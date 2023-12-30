import './styles/App.css' ;
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import PostIdPage from "./pages/PostIdPage";



function App() {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>  {/*  буде на всіх сторінка (header, footer)  */}
                <Route index element={<Posts/>} /> {/* index - за для уникнення помилки з path="/"  */}
                <Route path="posts" element={<Posts/>} /> {/* здублював для себе */}
                <Route path="about" element={<About />} />
                <Route path="*" element={<Error />} />
                <Route path="posts/:id" element={<PostIdPage />} />
            </Route>
        </Routes>
    )
}

export default App;
