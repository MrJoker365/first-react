import React, {useContext} from 'react';
import {Link, Outlet, useNavigate} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const navigate = useNavigate(); // сам есперементую

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("auth")
        // navigate("/login")
    }

    return (

        <>
            <header>
                {/*<Link to={"/login"} >*/}
                {/*    <MyButton onClick={logout}>*/}
                {/*        Вийти*/}
                {/*    </MyButton>*/}
                {/*</Link>*/}

                <MyButton onClick={logout}>
                    Вийти
                </MyButton>

                <Link to="/about" > Про сайт </Link>    {/*  замість  <a href="/about">Про сайт</a>  */}
                <Link to="/posts" > Пости </Link>
            </header>

            <Outlet /> {/* буде передано весь контент */}

            <footer>
                2023
            </footer>
        </>
    );
};

export default Navbar;