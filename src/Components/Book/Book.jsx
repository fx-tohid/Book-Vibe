import React from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router';

const Book = ({ book }) => {
    const { bookName, author, image, review, rating, category, publisher, tags, id } = book;

    // const handleBooks = () => {
    //     console.log('Hello world')
    // }

    const navigate = useNavigate();

    const handleGreet = () => {
        navigate(`/books/${id}`);
    }

    return (
        <div>
            <div onClick={handleGreet} className="max-w-md bg-white border border-gray-200 rounded-4xl p-6 shadow-sm font-sans">
                <div className="bg-[#f2f2f2] rounded-[1.5rem] flex items-center justify-center py-10 px-6 mb-6">
                    <img
                        src={image}
                        alt="Book Cover"
                        className="h-64 object-contain shadow-2xl transform rotate-1"
                    />
                </div>

                <div className="flex gap-2 mb-6">
                    {
                        tags.map((tag, idx) => <span key={idx} className="bg-[#f1fcf3] text-[#22c55e] px-4 py-2 rounded-full text-sm font-semibold">
                            {tag}
                        </span>)
                    }
                </div>

                {/* Book Details */}
                <div className="mb-4">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                        {bookName}
                    </h2>
                    <p className="text-lg text-gray-600">
                        By : <span className="font-medium">{author}</span>
                    </p>
                </div>

                {/* Divider */}
                <div className="border-t border-dashed border-gray-300 my-4"></div>

                {/* Footer Info */}
                <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium text-lg">{category}</span>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-700 font-medium text-lg">{rating}</span>
                        <Star className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;