import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { addToStoreDB, addToStoreWishlistDB } from '../../utils/localstorage';
const BookDetails = () => {
    const datas = useLoaderData();
    const { id } = useParams();
    const parseId = parseFloat(id)
    const data = datas.find(data => data.id === parseId);

    // console.log(data)
    const { bookName, author, image, review, rating, category, publisher, tags, totalPages, yearOfPublishing } = data;
    // const [book, setBook] = useState([]);


    const handleMarkAsRead = (id) => {
        // toast('vuter baccha')
        // store with id
        // array or collection
        // if book already exists then show a alert
        // if book not exist then push in the collection or array
        addToStoreDB(id)
    }
    const handleSetWishlist = (id) => {
        addToStoreWishlistDB(id)
    }

    return (
        <div className="max-w-5xl mx-auto p-8 bg-white flex flex-col md:flex-row gap-12 font-sans">
            <div className="w-full md:w-1/2 bg-[#f3f3f3] rounded-3xl flex items-center justify-center p-12">
                <img
                    src={image}
                    alt="Book Cover"
                    className="w-full max-w-sm drop-shadow-2xl rounded-sm"
                />
            </div>

            <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">
                    {bookName}
                </h1>
                <p className="text-xl text-gray-700 mb-6 font-medium">
                    By : {author}
                </p>

                <hr className="border-gray-200 mb-4" />
                <span className="text-xl text-gray-600 font-medium mb-4">{category}</span>
                <hr className="border-gray-200 mb-6" />

                <div className="mb-8 leading-relaxed text-gray-500">
                    {review}
                </div>

                {/* Tags Section */}
                <div className="flex items-center gap-4 mb-8">
                    <span className="font-bold text-gray-900">Tags</span>
                    <div className="flex gap-2">
                        {
                            tags.map((tag, idx) => <span key={idx} className="bg-[#f2fcf3] text-[#22c55e] px-4 py-1.5 rounded-full text-sm font-semibold">
                                #{tag}
                            </span>)
                        }
                    </div>
                </div>

                <hr className="border-gray-200 mb-8" />

                {/* Data Table */}
                <div className="space-y-4 mb-10 text-lg">
                    <div className="flex">
                        <span className="w-48 text-gray-500">Number of Pages:</span>
                        <span className="font-bold text-gray-900">{totalPages}</span>
                    </div>
                    <div className="flex">
                        <span className="w-48 text-gray-500">Publisher:</span>
                        <span className="font-bold text-gray-900">{publisher}</span>
                    </div>
                    <div className="flex">
                        <span className="w-48 text-gray-500">Year of Publishing:</span>
                        <span className="font-bold text-gray-900">{yearOfPublishing}</span>
                    </div>
                    <div className="flex">
                        <span className="w-48 text-gray-500">Rating:</span>
                        <span className="font-bold text-gray-900">{rating}</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <button onClick={() => handleMarkAsRead(id)} className="px-10 py-3 border-2 border-gray-200 rounded-xl font-bold text-gray-900 hover:bg-gray-50 transition-colors">
                        Mark as Read
                    </button>
                    <button onClick={() => handleSetWishlist(id)} className="px-10 py-3 bg-[#5eb7cc] text-white rounded-xl font-bold hover:bg-[#4ea6bb] transition-colors">
                        Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;