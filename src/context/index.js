import {createContext} from "react";


export const AuthContext = createContext(null); // для можливості
                                                                        // любій сторінці отримати загальнодоступну інформацію
                                                                        // App.js
                                                                        // Login.jsx
                                                                        // Navbar.jsx (там є кнопка "Вийти")