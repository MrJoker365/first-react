import React from "react";
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => { // В даному випадку props - це значення, які передавались в  App.js у :
                                //  <PostItem post={{id: 1, title: "JavaScript", body: "Description"}} />
                                // доступ до title : {props.post.title}
const navigate = useNavigate(); // для передачі динамічної URL

    return (

        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title} </strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={()=> navigate(`/posts/${props.post.id}`)}> {/* так як <Link to="/"/> (замість <a href="/"/>) я тут не застосую, є такий хук,
                                                                                    яки переходить по посиланню без перезагрузки сторінки */}
                    Відкрити
                </MyButton>
                <MyButton onClick={()=> props.remove(props.post)}> {/* виклик callback видалення поста */}
                    Видалити
                </MyButton>
            </div>
        </div>
    )
}

export default PostItem;

