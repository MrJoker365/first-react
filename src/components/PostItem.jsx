import React from "react";

const PostItem = (props) => { // В даному випадку props - це значення, які передавались в  App.js у :
                                //  <PostItem post={{id: 1, title: "JavaScript", body: "Description"}} />
                                // доступ до title : {props.post.title}
    return (
        <div className="post">
        <div className="post__content">
          <strong>{props.number}. {props.post.title} </strong>
          <div> 
            {props.post.body}
          </div>
        </div>
        <div className="post__btns">
          <button>Видалити</button>
        </div>
      </div>
    )
}

export default PostItem;

