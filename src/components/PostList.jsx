import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => { // ({posts, title}) -- це вже декомпозиція props
                                                // remove -- колбек для видалення поста
    return (
        <div> 

            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
        
            {posts.map((post, index) => 
                <PostItem 
                    remove={remove} // передача callback на другий рівень
                    number={index + 1} 
                    post={post} 
                    key={post.id}
                />
            )}
  
  
        </div>
    )
}

export default PostList;