import './styles/App.css' ;
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";



function App() {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Posts/>} />
        </Routes>
    )
}

export default App;
