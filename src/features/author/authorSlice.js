import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAuthor as getAuthorAPI } from '../../utils/api/userAPI';

export const getAuthor = createAsyncThunk(
    'author', async (id, thunk) => {
        try {
            const { data } = await getAuthorAPI(id);
            return data.user;
        } catch (err) {
            return thunk.rejectWithValue(err.response.data)
        }
    }
)

const initialState = {
    author: null,
    loadingAuthor: false,
    isError: false,
}

const authorSlice = createSlice({
    name: 'author',
    initialState,
    extraReducers: {
        [getAuthor.pending]: (state) => {
            state.loadingAuthor = true;
        },
        [getAuthor.fulfilled]: (state, { payload }) => {
            state.author = payload
            state.loadingAuthor = false;
        },
        [getAuthor.rejected]: (state) => {
            state.loadingAuthor = false
            state.author = null
        }
    }
})

export default authorSlice.reducer;