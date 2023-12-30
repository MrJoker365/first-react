import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Navbar = () => {
    return (
        // <div className="navbar">
        //     <div className="navbar__links">
        //         <Link to="/abou" > Про сайт </Link>    {/*  замість  <a href="/about">Про сайт</a>  */}
        //         <Link to="/posts" > Пости </Link>
        //     </div>
        // </div>

        <>
            <header>
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