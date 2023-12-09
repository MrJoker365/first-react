import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>

            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Пошук..."
            />



            <MySelect

                value={filter.sort}
                onChange={sortedPost => setFilter({...filter, sort: sortedPost})} //
                defaultValue={"Сортування по"}
                options={[
                    {value: 'title', name: 'Пл назві'},
                    {value: 'body', name: 'По опису'},
                ]}
            />

        </div>
    );
};

export default PostFilter;