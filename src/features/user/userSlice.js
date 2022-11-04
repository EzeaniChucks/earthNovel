import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    registerUser as registerUserAPI,
    loginUser as loginUserAPI,
    getAuthor as getAuthorAPI,
    followBook as followBookAPI,
    refreshUser as refreshUserAPI,
} from '../../utils/api/userAPI';
import { clearLocalStorage, getItemFromLocalStorage, saveItemToLocalStorage, } from '../../utils/localStorage';
import { toast } from 'react-toastify'

export const registerUser = createAsyncThunk(
    'user/register', async (formdata, thunk) => {
        try {
            const { data } = await registerUserAPI(formdata);
            if (data) toast.success(`Welcome, ${data.firstname} ${data.lastname}`);
            saveItemToLocalStorage(data);
            return data.user;
        } catch (err) {
            toast.error(err.response.data)
            return thunk.rejectWithValue(err.response.data)
        }
    }
)

export const loginUser = createAsyncThunk(
    'user/login', async (formdata, thunk) => {
        try {
            const { data } = await loginUserAPI(formdata);
            if (data) toast.success(`login successful`);
            saveItemToLocalStorage(data)
            return data.user;
        } catch (err) {
            toast.error(err.response.data);
            return thunk.rejectWithValue(err.response.data)
        }
    }
)

export const editUser = createAsyncThunk(
    'user/edit'
)

export const getUserAfterBookCreation = createAsyncThunk(
    'create-book/author', async (id, thunk) => {
        try {
            const { data } = await getAuthorAPI(id);
            saveItemToLocalStorage(data);
            return data.user;
        } catch (err) {
            return thunk.rejectWithValue(err.response.data)
        }
    }
)
export const followBook = createAsyncThunk(
    'follow-book', async (dataObj, thunkAPI) => {
        try {
            const { data } = await followBookAPI(dataObj)
            saveItemToLocalStorage(data);
            return data.user
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response)
        }
    }
)
export const refreshUser = createAsyncThunk(
    'user/refresh-user', async (_id, thunkAPI) => {
        try {
            const { data } = await refreshUserAPI(_id)
            saveItemToLocalStorage(data);
            return data.user
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response)
        }
    }
)

const initialState = {
    user: getItemFromLocalStorage()?.user,
    isLoading: false,
    isError: false,
    success: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearUser: (state) => {
            state.user = null;
            clearLocalStorage()
            toast.success('logged out')
        }
    },
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true
            state.isError = false
        },
        [registerUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isError = false;
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.isError = { message: payload.msg }
        },
        [loginUser.pending]: (state) => {
            state.isLoading = true
            state.isError = false;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.user = action.payload
            state.isLoading = false
            state.isError = false
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.isError = { message: payload.desc.slice(0, 31) }
        },
        [getUserAfterBookCreation.pending]: (state) => {
            state.isLoading = true
            state.isError = false;
        },
        [getUserAfterBookCreation.fulfilled]: (state, action) => {
            state.user = action.payload
            state.isLoading = false
            state.isError = false
        },
        [getUserAfterBookCreation.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.isError = { message: payload?.desc?.slice(0, 31) }
        },
        [followBook.pending]: (state) => {
            state.isloading = true;
            state.isError = false;
            state.success = false;
        },
        [followBook.fulfilled]: (state, { payload }) => {
            state.isloading = false;
            state.user = payload;
            state.isError = false;
            state.success = true;
        },
        [followBook.rejected]: (state) => {
            state.isloading = false;
            state.isError = true;
            state.success = false;
        },
        [refreshUser.pending]: (state) => {
            state.isloading = true;
            state.isError = false;
            state.success = false;
        },
        [refreshUser.fulfilled]: (state, { payload }) => {
            state.isloading = false;
            state.user = payload;
            state.isError = false;
            state.success = true;
        },
        [refreshUser.rejected]: (state) => {
            state.isloading = false;
            state.isError = true;
            state.success = false;
        },
    }
})

export default userSlice.reducer;
export const { clearUser } = userSlice.actions