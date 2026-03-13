import { toast } from "react-toastify";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");
    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    } else {
        return [];
    }
}
const getWishlistBook = () => {
    const storedBookSTR = localStorage.getItem("wishlist");
    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    } else {
        return [];
    }
}

const addToStoreDB = (id) => {
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        // toast.warning('The book is already listed')
        Swal.fire({
            icon: "error",
            title: "You have read this book!",
        });
    } else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)
        Swal.fire({
            icon: 'success',
            title: 'Successfully added to read list'
        })
    }
}
const addToStoreWishlistDB = (id) => {
    const storedBookData = getStoredBook();
    const storedWishlistData = getWishlistBook();
    if (storedBookData.includes(id)) {
        Swal.fire({
            icon: "error",
            title: "You have read this book!",
        });

    } else if (storedWishlistData.includes(id)) {
        Swal.fire({
            icon: "error",
            title: "The book is already added in wishlist!",
        });
    } else {
        storedWishlistData.push(id);
        console.log(storedWishlistData);
        const data = JSON.stringify(storedWishlistData);
        localStorage.setItem("wishlist", data)
        Swal.fire({
            icon: 'success',
            title: 'Successfully added to Wishlist'
        })
    }
}

export { addToStoreDB, getStoredBook, addToStoreWishlistDB, getWishlistBook };