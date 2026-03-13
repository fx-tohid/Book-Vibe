import React from 'react';
import { ChevronRight } from 'lucide-react'; 
const ErrorPage = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen font-sans flex flex-col items-center justify-center text-center space-y-8">

                {/* 1. Large 404 Heading */}
                <h1 className="text-[12rem] font-extrabold text-gray-900 leading-none tracking-tighter">
                    404
                </h1>

                {/* 2. Style-matched Card Container */}
                <div className="border border-gray-200 rounded-[2rem] p-10 max-w-2xl shadow-sm bg-white">
                    {/* Book-style placeholder graphic */}
                    <div className="bg-[#f3f3f3] rounded-2xl p-10 mb-8 flex flex-col items-center justify-center">
                        <div className="w-32 h-48 bg-white rounded-lg shadow-xl mb-4 transform -rotate-3 flex items-center justify-center border-t-4 border-gray-200">
                            {/* Simple visual indicator, like an empty page or "?" */}
                            <span className="text-8xl font-serif text-gray-200 font-black">?</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900 mb-2">Chapter Not Found</span>
                    </div>

                    {/* 3. Text & Info in Card */}
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                        The Story Ends Here... or Does It?
                    </h2>

                    {/* Descriptive Text - style-matched metadata font/color */}
                    <p className="text-lg text-gray-500 mb-6 leading-relaxed max-w-lg mx-auto">
                        It looks like you've navigated to a chapter that hasn't been written yet. The page you are looking for might have been moved, deleted, or never existed in this library.
                    </p>

                    {/* Tags Section - using style from Read/Wishlist buttons */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="font-bold text-gray-900">Possible Next Steps</span>
                        <div className="flex gap-2">
                            <span className="bg-[#e2efff] text-[#3b82f6] px-4 py-1.5 rounded-full font-semibold text-sm">
                                Check URL
                            </span>
                            <span className="bg-[#f1fcf3] text-[#2cc116] px-4 py-1.5 rounded-full font-semibold text-sm">
                                Return to Homepage
                            </span>
                        </div>
                    </div>

                    {/* 4. Action Button - using color from "Sort By" or "View Details" */}
                    <div className="flex justify-center mt-8">
                        <a
                            href="/"
                            className="bg-[#2cc116] text-white px-10 py-3 rounded-full font-bold text-lg hover:bg-[#25a312] transition-colors flex items-center gap-2"
                        >
                            Back to Home
                            <ChevronRight size={22} className="inline" />
                        </a>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ErrorPage;