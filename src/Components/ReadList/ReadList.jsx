import React, { useEffect, useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { ChevronDown, Users, FileText, MapPin } from 'lucide-react';
import { useLoaderData, useNavigate } from 'react-router';
import { getStoredBook, getWishlistBook } from '../../utils/localstorage';

const ReadList = () => {

    // Worst case - we wont use that in future

    const data = useLoaderData();
    const navigate = useNavigate();
    const [readList, setReadList] = useState([]);
    const [wishlist, setWishlist] = useState([])
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.id))
        setReadList(myReadList);


        //
        const storedWishlist = getWishlistBook();
        const convertedWishlistBooks = storedWishlist.map(id => parseInt(id))
        const myWishlist = data.filter(book => convertedWishlistBooks.includes(book.id))
        setWishlist(myWishlist)
    }, [data])

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen font-sans">

            {/* Page Header */}
            <div className="w-full bg-[#f3f3f3] rounded-2xl py-8 mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900">Books</h1>
            </div>

            {/* Sort Button */}
            <div className="flex justify-center mb-10">
                <button className="bg-[#2cc116] text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2">
                    Sort By <ChevronDown size={18} />
                </button>
            </div>

            {/* React Tabs Container */}
            <Tabs selectedTabClassName="border-x border-t border-gray-200 rounded-t-xl !text-gray-800 !bg-white">

                {/* Tab Navigation */}
                <TabList className="flex border-b border-gray-200 mb-8 outline-none">
                    <Tab className="px-6 py-3 text-gray-400 font-medium cursor-pointer outline-none transition-all">
                        Read Books
                    </Tab>
                    <Tab className="px-6 py-3 text-gray-400 font-medium cursor-pointer outline-none transition-all">
                        Wishlist Books
                    </Tab>
                </TabList>

                {/* Panel 1: Read Books */}
                <TabPanel>
                    {
                        readList.map(book => <div key={book.id} className="border mb-6 border-gray-200 rounded-[2rem] p-6 flex flex-col md:flex-row gap-8 items-start shadow-sm bg-white">

                            <div className="bg-[#f3f3f3] rounded-2xl p-6 w-full md:w-52 shrink-0 flex justify-center">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="h-40 object-contain drop-shadow-lg transform rotate-2"
                                />
                            </div>


                            <div className="flex-1 w-full">
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                                    {book.title}
                                </h2>
                                <p className="text-gray-600 font-medium mb-4">By : Awlad Hossain</p>

                                <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-sm text-gray-500 mb-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-black">Tag</span>
                                        {
                                            book.tags.map((tag, idx) => <span key={idx} className="bg-[#f1fcf3] text-[#2cc116] px-3 py-1 rounded-full font-semibold">#{tag}</span>
                                            )
                                        }
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MapPin size={16} />
                                        <span>Year of Publishing: {book.yearOfPublishing}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-6 text-gray-500 text-sm mb-6 pb-6 border-b border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <Users size={16} />
                                        <span>Publisher: {book.publisher}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FileText size={16} />
                                        <span>Page {book.totalPages}</span>
                                    </div>
                                </div>

                                {/* Action Badges & Button */}
                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="bg-[#e2efff] text-[#3b82f6] px-5 py-2 rounded-full font-medium text-sm">
                                        Category: {book.category}
                                    </span>
                                    <span className="bg-[#fff4e5] text-[#ff9800] px-5 py-2 rounded-full font-medium text-sm">
                                        Rating: {book.rating}
                                    </span>
                                    <button onClick={() => navigate(`/books/${book.id}`)} className="bg-[#2cc116] cursor-pointer text-white px-6 py-2 rounded-full font-bold hover:bg-[#25a312]">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>)
                    }
                </TabPanel>

                {/* Panel 2: Wishlist Books */}
                <TabPanel>


                    {
                        wishlist.map(book => <div key={book.id} className="border mb-6 border-gray-200 rounded-[2rem] p-6 flex flex-col md:flex-row gap-8 items-start shadow-sm bg-white">

                            <div className="bg-[#f3f3f3] rounded-2xl p-6 w-full md:w-52 shrink-0 flex justify-center">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="h-40 object-contain drop-shadow-lg transform rotate-2"
                                />
                            </div>


                            <div className="flex-1 w-full">
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                                    {book.title}
                                </h2>
                                <p className="text-gray-600 font-medium mb-4">By : Awlad Hossain</p>

                                <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-sm text-gray-500 mb-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-black">Tag</span>
                                        {
                                            book.tags.map((tag, idx) => <span key={idx} className="bg-[#f1fcf3] text-[#2cc116] px-3 py-1 rounded-full font-semibold">#{tag}</span>
                                            )
                                        }
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MapPin size={16} />
                                        <span>Year of Publishing: {book.yearOfPublishing}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-6 text-gray-500 text-sm mb-6 pb-6 border-b border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <Users size={16} />
                                        <span>Publisher: {book.publisher}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FileText size={16} />
                                        <span>Page {book.totalPages}</span>
                                    </div>
                                </div>

                                {/* Action Badges & Button */}
                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="bg-[#e2efff] text-[#3b82f6] px-5 py-2 rounded-full font-medium text-sm">
                                        Category: {book.category}
                                    </span>
                                    <span className="bg-[#fff4e5] text-[#ff9800] px-5 py-2 rounded-full font-medium text-sm">
                                        Rating: {book.rating}
                                    </span>
                                    <button onClick={() => navigate(`/books/${book.id}`)} className="bg-[#2cc116] cursor-pointer text-white px-6 py-2 rounded-full font-bold hover:bg-[#25a312]">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>)}

                    {
                        wishlist.length === 0 && <div className="text-center py-20 border border-dashed border-gray-200 rounded-[2rem] text-gray-400">
                            <p className="italic text-lg">Your wishlist is currently empty.</p>
                        </div>
                    }
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default ReadList;