import React from 'react';
import {getPagedArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {

    let pagesArray = getPagedArray(totalPages); // для визначеня кількості сторінок (pages.js)

    return (
        <div className="page__wrapper" >
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
    );
};

export default Pagination;