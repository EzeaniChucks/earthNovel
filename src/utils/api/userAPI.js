import axios from 'axios';
import { getItemFromLocalStorage } from '../localStorage';

const API = axios.create({ baseURL: 'https://earth-novel.herokuapp.com/' })

export const registerUser = (data) => API.post('user/register', data)
export const loginUser = (data) => API.post('user/login', data);
export const followBook = (bookObj) => API.patch(`follow-book`, bookObj, {
    headers: { authorization: `Bearer ${getItemFromLocalStorage()?.token}` }
});
export const getAuthor = (id) => {
    return API.get(`user/${id}`, {
        headers: { authorization: `Bearer ${getItemFromLocalStorage()?.token}` }
    })
};
export const refreshUser = (_id) => API.get(`user/refresh-user/${_id}`)