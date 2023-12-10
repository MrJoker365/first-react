import {useEffect, useState} from "react";
import './styles/App.css' ;
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePostsHook} from "./hooks/usePostsHook";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetchingHook} from "./hooks/useFetchingHook";
import {getPageCount, getPagedArray} from "./utils/pages";
import myButton from "./components/UI/button/MyButton";


function App() {



    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "Description"},
        {id: 2, title: "Java", body: "Description"}
    ])

    const [filter, setFilter] = useState({sort: "", query: ""}) // замість selectedSort та searchQuery
                                                                                                // для PostFilter.jsx
    const [modal, setModal] = useState(false); // вспливання вікна для створення поста

    const [totalPages, setTotalPages] = useState(0); //
    const [limit, setLimit] = useState(10);          //  для посторінкового виводу
    const [page, setPage] = useState(1);             //

    const sortedAndSearchedPosts = usePostsHook(posts, filter.sort, filter.query) // власний hook  (usePostsHook.js)
                                                                                // скорочений вигляд sortedPost
                                                                                // та sortedAndSearchedPosts

    let pagesArray = getPagedArray(totalPages); // для визначеня кількості сторінок (pages.js)

    console.log([pagesArray])
    const [fetchPosts, isPostsLoading, postError] = useFetchingHook(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = (response.headers["x-total-count"]) // загальна кількість постів
        setTotalPages(getPageCount(totalCount, limit))
    }) // загрузка callback через await / Обробка індикації загрузки / Обробка можливих помилок

    useEffect(() => { //
        fetchPosts();
    }, [page]); // Добавивши сюди [page], useEffect буде оновлятись при кожній зміні page







    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false) // для того щоб скривалось модальне вікно пісдя створення поста
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const changePage = (page) => {
        setPage(page)
        //fetchPosts() // так не підійде, по буде працювати з запізненням (іза рендерінга JS)
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
          {postError &&
              <h1>Виникла помилка ${postError}</h1>

          }

          {isPostsLoading
              ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}> <Loader/> </div>
              : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список 1"/>


          }

          <div style={{marginTop: 30}}>
              {pagesArray.map(p => // номери сторінок
                  // <MyButton>{p}</MyButton>
                  <span
                      onClick={() => changePage(p)} // передаєм номер сторінки на яку нажав користувач
                      key={p}
                      className={page === p // умова коли вибрана сторінка
                          ? 'page page__current'
                          : 'page'}
                  >{p}</span>
              )}
          </div>


      </div>
  );
}

export default App;
