import React from 'react';
import cl from "./MyModal.module.css"


const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal] // масив з іменами класів css

    if (visible){
        rootClasses.push(cl.active);
    }


    return (
        <div
            className={rootClasses.join(" ")} // [cl.myModal, cl.active].join(" ")
            onClick={() => setVisible(false)}
        >
            <div
                className={cl.myModalContent}
                onClick={(e) => e.stopPropagation()} // e.stopPropagation():  для того
                                                                                // щоб це поле ігнорувало закривання вікна
                                                                                //
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;