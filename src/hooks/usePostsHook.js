import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {

    const sortedPosts = useMemo(()=>{ // Допомагає виконувати функцію лише при певних змінах
        console.log("Спрацювала функція sortedPosts")
        if (sort){ // filter.sort
            return [...posts].sort((a, b) =>  a[sort].localeCompare(b[sort]))
        }

        return posts;

    }, [sort, posts]);  // Виконається, якщо хоть одне значення із масива зміниться

    return sortedPosts;

}

export const usePostsHook = (posts, sort, query) => {

    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo( () => {

        console.log("Спрацювала функція sortedAndSearchedPosts")

        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))

    }, [query, sortedPosts]);

    return sortedAndSearchedPosts;

}