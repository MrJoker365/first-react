import {useEffect, useRef, useState} from "react";
import Pagination from "../components/UI/pagination/Pagination";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {getPageCount} from "../utils/pages";
import PostService from "../API/PostService";
import {useFetchingHook} from "../hooks/useFetchingHook";
import {usePostsHook} from "../hooks/usePostsHook";

import "../styles/App.css"


function Posts() {



    const [posts, setPosts] = useState([
        // {id: 1, title: "JavaScript", body: "Description"},
        // {id: 2, title: "Java", body: "Description"}
    ])

    const [filter, setFilter] = useState({sort: "", query: ""}) // замість selectedSort та searchQuery
    // для PostFilter.jsx
    const [modal, setModal] = useState(false); // вспливання вікна для створення поста

    const [totalPages, setTotalPages] = useState(0); //
    const [limit, setLimit] = useState(10);          //  для посторінкового виводу
    const [page, setPage] = useState(1);             //

    const lastElement = useRef(); // <div> у зоні видимості
    const observer = useRef(); // можна зберігати дані, щоб не втрачати їх від рендеру до рендеру

    const sortedAndSearchedPosts = usePostsHook(posts, filter.sort, filter.query) // власний hook  (usePostsHook.js)
    // скорочений вигляд sortedPost
    // та sortedAndSearchedPosts




    const [fetchPosts, isPostsLoading, postError] = useFetchingHook(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts ,...response.data]);
        const totalCount = (response.headers["x-total-count"]) // загальна кількість постів
        setTotalPages(getPageCount(totalCount, limit))
    }) // загрузка callback через await / Обробка індикації загрузки / Обробка можливих помилок

    useEffect(() => { //
        fetchPosts(limit, page); // 2 спосіб
    }, [page]);



    useEffect(() => {

        if (isPostsLoading) return;
        if(observer.current) observer.current.disconnect();
        let callback = function (entries, observe) {

            if (entries[0].isIntersecting && page < totalPages) {
                console.log("div в зоні видимості:" + page)
                setPage(page + 1)
            }
        }
        observer.current = new IntersectionObserver(callback); // значення записуються до useRef(), щоб між рендерінгом вони не втрачались
        observer.current.observe(lastElement.current); // потім від нього викликається функція observe(), де передається useRef з тим умовним <div/> видимості

    }, [isPostsLoading]);





    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false) // для того щоб скривалось модальне вікно пісдя створення поста
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page) // 2 спосіб (а так буде працювати без запізнеь)
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

            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}> <Loader/> </div>
            }

            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список 1"/>

            <div ref={lastElement} style={{height:20, background:"red"}}/>  {/*Умовний блок для відображення зони видимості*/}



            <Pagination // нумераці (пагінація) сторінок
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />




        </div>
    );
}

export default Posts;
