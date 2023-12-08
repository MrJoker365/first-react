import {useState } from "react";
import './styles/App.css' ;
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";


function App() {



    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "Description"},
        {id: 2, title: "Java", body: "Description"}
    ])
    const [selectedSort, setSelectedSort] = useState(""); // для MySelect.jsx

    const [searchQuery, setSearchQuery] = useState("") // Для пошукового поля
    
    function getSortedPost() {
        console.log("Спрацювала функція sortedPost")
        if (selectedSort){
            return [...posts].sort((a, b) =>  a[selectedSort].localeCompare(b[selectedSort]))
        }

        return posts;

    }


    const sortedPost =getSortedPost();







    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const sortPost = (sort) => { // для MySelect.jsx
        setSelectedSort(sort);
        console.log(sort)
    }






  
  return (
      <div className="App">

          <PostForm create={createPost}/>

          <hr style={{margin: '15px 0'}}/>


          <div>

              <MyInput
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Пошук..."
              />



              <MySelect

                  value={selectedSort}
                  onChange={sortPost}
                  defaultValue={"Сортування по"}
                  options={[
                      {value: 'title', name: 'Пл назві'},
                      {value: 'body', name: 'По опису'},
                  ]}
              />

          </div>

          {posts.length // тернарний операто
              ?
              <PostList remove={removePost} posts={sortedPost} title="Список 1"/>
              :
              <h1 style={{textAlign: "center"}}>
                  Пости не найдено
              </h1>
          }


      </div>
  );
}

export default App;
