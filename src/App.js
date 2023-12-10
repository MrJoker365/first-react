import {useEffect, useState} from "react";
import './styles/App.css' ;
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePostsHook} from "./hooks/usePostsHook";
import axios from "axios";
import PostService from "./API/PostService";


function App() {



    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "Description"},
        {id: 2, title: "Java", body: "Description"}
    ])

    const [filter, setFilter] = useState({sort: "", query: ""}) // замість selectedSort та searchQuery
                                                                                                // для PostFilter.jsx
    const [modal, setModal] = useState(false); // вспливання вікна для створення поста

    const sortedAndSearchedPosts = usePostsHook(posts, filter.sort, filter.query) // власний hook  (usePostsHook.js)
                                                                                    // скорочений вигляд sortedPost
                                                                                    // та sortedAndSearchedPosts

    // useEffect(() => {
    //     console.log("1 useEffect Спрацює лише раз при запуску")
    // }, []);
    //
    // useEffect(() => {
    //     console.log("2 useEffect Спрацює на кожну зміну у filter ")
    // }, [filter]);
    //
    // useEffect(() => {
    //     console.log("3 useEffect Спрацює лише раз при демонтуванні компонента (хз що і як...)")
    //     return () => {
    //          alert("очистка")
    //         // робим очистку
    //     }
    // }, []);


    useEffect(() => {
        fetchPosts();
    }, []);


    async function fetchPosts() {

        const getUrlPosts = await PostService.getAll(); // зробив API шаблон
        console.log(getUrlPosts)
        setPosts(getUrlPosts)



    }





    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false) // для того щоб скривалось модальне вікно пісдя створення поста
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


// Ссилка на модальне вікно React.Js 1.24 год

  
  return (
      <div className="App">

          <button onClick={fetchPosts} >GET POSTS</button>

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
