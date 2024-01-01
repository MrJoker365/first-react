import './styles/App.css' ;
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import PostIdPage from "./pages/PostIdPage";
import Login from "./pages/Login";
import {AuthContext} from "./context";
import {useEffect, useState} from "react";
import Loader from "./components/UI/Loader/Loader";



function App() {

    const[isAuth, setIsAuth] = useState(false);
    const[isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        if (localStorage.getItem("auth")){
            setIsAuth(true)
        }
        setIsLoading(false);
    }, []);




    if (isLoading){
        return <Loader/>
    }

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth // setIsAuth: setIsAuth
            //isLoading
            //...
        }}>

            {isAuth
                ?
                <Routes>
                    <Route path="/" element={<Navbar />}>  {/*  буде на всіх сторінка (header, footer)  */}
                        <Route index element={<Posts/>} /> {/* index - за для уникнення помилки з path="/"  */}
                        <Route path="posts" element={<Posts/>} /> {/* здублював для себе */}
                        <Route path="about" element={<About />} />
                        <Route path="*" element={<Error />} />
                        <Route path="posts/:id" element={<PostIdPage />} />
                    </Route>
                </Routes>

                :
                <Routes>
                    <Route path="/login" element={<Login />}/>  {/*  буде на всіх сторінка (header, footer)  */}
                    <Route path="*" element={<Login />} />
                </Routes>
            }

        </AuthContext.Provider>
    )
}

export default App;
