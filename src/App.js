import './styles/App.css' ;
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";



function App() {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>  {/*  буде на всіх сторінка (header, footer)  */}
                <Route index element={<Posts/>} /> {/* index - за для уникнення помилки з path="/"  */}
                <Route path="about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    )
}

export default App;
