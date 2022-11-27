import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllBookCard from './AllBookCard/AllBookCard';
import BookModal from './BookModal/BookModal';

const AllBook = () => {
    const books = useLoaderData();
    const [bookList, setBookList] = useState([])


    console.log(books)
    console.log(books)
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                {
                    books.map(book => <AllBookCard
                        key={book._id}
                        book={book}
                        setBookList={setBookList}
                    ></AllBookCard>)
                }
            </div>
            {
                <BookModal
                    bookList={bookList}
                    setBookList={setBookList}
                ></BookModal>
            }
        </div>

    );
};

export default AllBook;