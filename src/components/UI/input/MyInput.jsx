import React from "react";
import classes from "./MyInput.module.css"

const MyInput = React.forwardRef( (props, ref) => { // компонент нааштовано для використання з useRef()
                                                    // раніше виглядало: (props) => {}
    return (

        <input ref={ref} className={classes.myInput} {...props} /> // тут ми предаєм сам ref (ref={ref})

    )
})

export default MyInput;