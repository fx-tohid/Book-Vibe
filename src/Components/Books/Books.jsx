import React, { use } from 'react';
import { Star } from 'lucide-react'; // Optional: using lucide-react for the star icon
import Book from '../Book/Book';

const Books = ({ fetchDatas }) => {

    const BooksData = use(fetchDatas);
    // console.log(Books);
    return (
        <div className='px-20 py-10'>
            <div>
                {/* Heading */}
                <h2 className='text-center text-4xl font-medium'>Books</h2>
            </div>
            <div className='grid grid-cols-3 gap-4 flex-nowrap pt-4'>
                {
                    BooksData.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;