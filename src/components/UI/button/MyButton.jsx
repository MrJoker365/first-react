import React from "react";
import classes from "./MyButton.module.css"

const MyButton = ({children, ...props}) => { // знов декомпозиція
    return (
        <button {...props} className={classes.myBtn}>  {/* {...props} -- таким спопсобом передаються всі
                                                             параметри тега <MyButton disabled> */}

            {children}  {/* {props.children}  --  таким способом передається інформація  з <MyButton> Пост </MyButton> */}
            

        </button>
    )
}

export default MyButton;