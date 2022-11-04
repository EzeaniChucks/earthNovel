import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './features/book/bookSlice'
import modalSlice from './features/modal/modalSlice';
import userSlice from './features/user/userSlice';
import authorSlice from './features/author/authorSlice';

export const store = configureStore({
    reducer: {
        bookSlice,
        modalSlice,
        userSlice,
        authorSlice,
    }
})