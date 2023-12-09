import {useMemo, useState} from "react";
import './styles/App.css' ;
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";


function App() {



    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "Description"},
        {id: 2, title: "Java", body: "Description"}
    ])

    // const [selectedSort, setSelectedSort] = useState(""); // для MySelect.jsx
    //
    // const [searchQuery, setSearchQuery] = useState("") // Для пошукового поля

    const [filter, setFilter] = useState({sort: "", query: ""}) // замість selectedSort та searchQuery
                                                                                                // для PostFilter.jsx




    const sortedPosts = useMemo(()=>{ // Допомагає виконувати функцію лише при певних змінах

        console.log("Спрацювала функція sortedPosts")
        if (filter.sort){
            return [...posts].sort((a, b) =>  a[filter.sort].localeCompare(b[filter.sort]))
        }

        return posts;

    }, [filter.sort, posts]);  // Виконається, якщо хоть одне значення із масива зміниться


    const sortedAndSearchedPosts = useMemo( () => {

        console.log("Спрацювала функція sortedAndSearchedPosts")

        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))

    }, [filter.query, sortedPosts])






    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    // const sortPost = (sort) => { // для MySelect.jsx
    //     setSelectedSort(sort);
    //     console.log(sort)
    // }






  
  return (
      <div className="App">

          <PostForm create={createPost}/>

          <hr style={{margin: '15px 0'}}/>

          <PostFilter // містиь сортування по умові та фільтрацію по полю пошуку
              filter={filter}
              setFilter={setFilter}
          />

          <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список 1"/>

          
      </div>
  );
}

export default App;
