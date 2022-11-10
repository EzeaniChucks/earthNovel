import axios from 'axios'
import { getItemFromLocalStorage } from '../localStorage';

const API = axios.create({ baseURL: 'https://earth-novel.herokuapp.com' })

export const createBook = (bookData) => API.post('/create-book', bookData, { headers: { authorization: `Bearer ${getItemFromLocalStorage().token}` } });
export const getAuthorBooks = (authorStoryArray) => API.post('/author-books', { authorStoryArray }, { headers: { authorization: `Bearer ${getItemFromLocalStorage().token}` } });
export const getLibraryBooks = (libraryArray) => API.post('/library-books', { libraryArray }, { headers: { authorization: `Bearer ${getItemFromLocalStorage().token}` } });
export const getFilteredBooks = (packedData) => API.get(`/search-books/${packedData.genre}`);
export const getTitleQuerySearch = (packedData) => API.get(`/search-books/${packedData.genre}?${packedData.queryString}`);
export const getSingleBook = (id) => API.get(`/single-book/${id}`);
export const editBook = (bookObj) => API.post(`/edit-book/${bookObj.id}`, bookObj.bookdata, { headers: { authorization: `Bearer ${getItemFromLocalStorage().token}` } });
export const deleteBook = (obj) => API.delete(`/delete-book/${obj._id}/${obj.userId}`, { headers: { authorization: `Bearer ${getItemFromLocalStorage().token}` } });
export const picUpload = (fileObj) => {
    return API.post(`/upload/${fileObj.prevImageName}`, fileObj.imagedata, { headers: { authorization: `Bearer ${getItemFromLocalStorage().token}` } });
}