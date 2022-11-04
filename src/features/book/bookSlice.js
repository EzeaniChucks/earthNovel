import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import {
    createComment as createCommentApi,
    getComments as getCommentsApi,
} from '../../data';
import {
    createBook as createBookAPI,
    picUpload as picUploadAPI,
    getAuthorBooks as getAuthorBooksAPI,
    getLibraryBooks as getLibraryBooksAPI,
    getSingleBook as getSingleBookAPI,
    editBook as editBookAPI,
    getFilteredBooks as getFilteredBooksAPI,
    deleteBook as deleteBookAPI,
} from '../../utils/api/bookApi';

export const createComment = createAsyncThunk(
    'book/addComment', async (bookinfo, thunkAPI) => {
        try {
            const resp = await createCommentApi(bookinfo)
            return resp;
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    })

export const fetchComments = createAsyncThunk(
    'book/ReadAllComment', async (bookId, thunkAPI) => {
        try {
            const resp = await getCommentsApi(bookId)
            return resp;
        } catch (err) {
            thunkAPI.rejectWithValue(err)
        }

    })

export const createBook = createAsyncThunk(
    'create-book', async (bookData, thunkAPI) => {
        try {
            const { data } = await createBookAPI(bookData);
            toast.success('Congratulations! Book succesfully created')
            return data;
        } catch (err) {
            toast.error(err.response.data.desc)
            return thunkAPI.rejectWithValue(err.response.data.msg)
        }
    }
)
export const getAuthorBooks = createAsyncThunk(
    'author-books', async (authorStoryArray, thunkAPI) => {
        try {
            const { data } = await getAuthorBooksAPI(authorStoryArray);
            return data;
        } catch (err) {
            toast.error(err.response.data.desc)
            return thunkAPI.rejectWithValue(err.response.data.msg)
        }
    }
)
export const getLibraryBooks = createAsyncThunk(
    'user/library-books', async (libraryArr, thunkAPI) => {
        try {
            const { data } = await getLibraryBooksAPI(libraryArr)
            return data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response)
        }
    }
)
export const getSingleBook = createAsyncThunk(
    'single-book', async (id, thunkAPI) => {
        try {
            const { data } = await getSingleBookAPI(id)
            return data;
        } catch (err) {
            thunkAPI.rejectWithValue(err.response)
        }
    }
)
export const getFilteredBooks = createAsyncThunk(
    'filtered-books', async (packedData, thunkAPI) => {
        try {
            const { data } = await getFilteredBooksAPI(packedData)
            return data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response)
        }
    }
)
export const editBook = createAsyncThunk(
    'edit-book', async (fileObj, thunkAPI) => {
        try {
            const { data } = await editBookAPI(fileObj)
            if (data) toast.success('Book Succesfully Edited')
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response)
        }
    }
)
export const fileUpload = createAsyncThunk(
    'book/fileupload', async (filedata, thunkAPI) => {
        try {
            await picUploadAPI(filedata)
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response)
        }
    }
)
export const deleteBook = createAsyncThunk(
    'authorBook/delete-book', async (obj, thunkAPI) => {
        try {
            const { data } = await deleteBookAPI(obj)
            return data
        } catch (err) {
            thunkAPI.rejectWithValue(err.response)
        }
    }
)

const initialState = {
    book: {},
    authorBooks: [],
    libraryBooks: [],
    filteredBooks: [],
    paginatedChapter: [],
    chapterNumber: 0,
    comments: [],
    deleteBookObj: {},
    isloading: false,
    error: false,
    errorStatusCode: 0,
    success: false,
    editSuccess: false,
    deleteSuccess: false,
}

const bookSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        commentsDefault: (state) => {
            state.comments = [];
        },
        setPagination: (state, { payload }) => {
            state.paginatedChapter = payload
        },
        setChapterNumber: (state, { payload }) => {
            state.chapterNumber = payload
        },
        setDeleteBookObj: (state, { payload }) => {
            const { _id, title, userId } = payload
            state.deleteBookObj = { ...state.deleteBookObj, _id, title, userId }
        },
        resetBook: (state) => {
            state.book = [];
            state.filteredBooks = [];
            state.success = false;
        }
    },
    extraReducers: {
        [createComment.pending]: (state) => {
            state.isloading = true;
        },
        [createComment.fulfilled]: (state, action) => {
            state.comments = action.payload;
            state.isloading = false;
        },
        [createComment.rejected]: (state) => {
            state.isloading = false;
        },

        [fetchComments.pending]: (state) => {
            state.isloading = true;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.comments = action.payload;
            state.isloading = false;
        },
        [fetchComments.rejected]: (state) => {
            state.isloading = false;
        },

        [createBook.pending]: (state) => {
            state.isloading = true;
            state.error = false;
            state.success = false;
        },
        [createBook.fulfilled]: (state, { payload }) => {
            state.isloading = false;
            state.book = payload
            state.error = false
            state.success = true;
        },
        [createBook.rejected]: (state) => {
            state.isloading = false;
            state.error = true;
            state.success = false;
        },

        [getAuthorBooks.pending]: (state) => {
            state.isloading = true;
            state.error = false;
            state.success = false;
        },
        [getAuthorBooks.fulfilled]: (state, { payload }) => {
            state.isloading = false;
            state.authorBooks = payload
            state.error = false
            state.success = true;
        },
        [getAuthorBooks.rejected]: (state,) => {
            state.isloading = false;
            state.error = true;
            state.authorBooks = [];
            state.success = false;
        },

        [getLibraryBooks.pending]: (state) => {
            state.isloading = true;
            state.error = false;
            state.success = false;
        },
        [getLibraryBooks.fulfilled]: (state, { payload }) => {
            state.isloading = false;
            state.libraryBooks = payload;
            state.error = false
            state.success = true
        },
        [getLibraryBooks.rejected]: (state, { payload }) => {
            state.isloading = false;
            state.error = true;
            state.libraryBooks = [];
            state.success = false;
            state.errorStatusCode = payload.status
            toast.error(payload.statusText)
        },

        [getFilteredBooks.pending]: (state) => {
            state.isloading = true;
            state.error = false;
            state.success = false;
        },
        [getFilteredBooks.fulfilled]: (state, { payload }) => {
            state.isloading = false;
            state.filteredBooks = payload
            state.error = false
            state.success = true;
        },
        [getFilteredBooks.rejected]: (state, { payload }) => {
            state.isloading = false;
            state.error = true;
            state.filteredBooks = payload
            state.success = true;
        },

        [getSingleBook.pending]: (state) => {
            state.isloading = true;
            state.error = false;
            state.success = false;
        },
        [getSingleBook.fulfilled]: (state, { payload }) => {
            state.isloading = false;
            state.book = payload
            state.error = false
            state.success = true;
        },
        [getSingleBook.rejected]: (state) => {
            state.isloading = false;
            state.error = true;
            state.success = false;
        },

        [editBook.pending]: (state) => {
            state.isloading = true;
            state.error = false;
            state.editSuccess = false;
        },
        [editBook.fulfilled]: (state, { payload }) => {
            state.isloading = false;
            state.book = payload;
            state.error = false;
            state.editSuccess = true;
        },
        [editBook.rejected]: (state) => {
            state.isloading = false;
            state.error = true;
            state.editSuccess = false;
        },

        [deleteBook.pending]: (state) => {
            state.isloading = true;
            state.error = false;
            state.deleteSuccess = false;
        },
        [deleteBook.fulfilled]: (state) => {
            state.isloading = false;
            state.error = false;
            state.deleteSuccess = true;
        },
        [deleteBook.rejected]: (state) => {
            state.isloading = false;
            state.error = true;
            state.deleteSuccess = false;
        },

        [fileUpload.pending]: (state) => {
            state.isloading = true;
            state.error = false;
            state.success = false;
        },
        [fileUpload.fulfilled]: (state) => {
            state.isloading = false;
            state.error = false
            state.success = true;
        },
        [fileUpload.rejected]: (state) => {
            state.isloading = false;
            state.error = true;
            state.success = false;
        },
    }
})

export default bookSlice.reducer;

export const { commentsDefault, resetBook, setPagination, setChapterNumber, setSectionJumper, setDeleteBookObj } = bookSlice.actions