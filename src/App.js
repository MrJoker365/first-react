import {useMemo, useState} from "react";
import './styles/App.css' ;
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";


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
    const [modal, setModal] = useState(false);




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
        setModal(false) // для того щоб скривалось модальне вікно пісдя створення поста
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    // const sortPost = (sort) => { // для MySelect.jsx
    //     setSelectedSort(sort);
    //     console.log(sort)
    // }




// Ссилка на модальне вікно React.Js 1.24 год

  
  return (
      <div className="App">

          <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
              Створити пост
          </MyButton>

          <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost} />
          </MyModal>

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
