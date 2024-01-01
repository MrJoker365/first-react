import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {

    const{isAuth, setIsAuth} = useContext(AuthContext); // отримання загальнодоступної інформації

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", "true")
    }

    return (
        <div>
            <h1>Сторінка для логіна</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введіть логін"/>
                <MyInput type="password" placeholder="Введіть пароль"/>
                <MyButton>Ввійти</MyButton>
            </form>
            
        </div>
    );
};

export default Login;