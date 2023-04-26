import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getArticles, getSignleArticle } from "../blogApi/blogApi";



const initialState = {
    data: null,
    oneArticle: null,
    loading: false,
    page: 1,
}

export const fetchArticles = createAsyncThunk('fetchArticles', async (page) => {
    const fetchedArticles = await getArticles(page)
    return fetchedArticles;
})

export const fetchSingleArticle = createAsyncThunk('fetchSignleArticle', async (id) => {
    const fetchedArticle = await getSignleArticle(id);
    return fetchedArticle;
})

const articlesSlice = createSlice({
    name: 'articlesData',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticles.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        }).addCase(fetchArticles.pending, (state) => {
            state.loading = true
        }).addCase(fetchSingleArticle.pending, (state) => {
            state.loading = true
        }).addCase(fetchSingleArticle.fulfilled, (state, action) => {
            state.loading = false;
            state.oneArticle = action.payload
        })
    }
})

export const {changePage} = articlesSlice.actions
export default articlesSlice.reducer