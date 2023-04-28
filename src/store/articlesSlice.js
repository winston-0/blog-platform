import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { getArticles, getSignleArticle } from "../blogApi/blogApi";
import { editArticle } from "../blogApi/blogApi";
import { favoriteArticle, unFavoriteArticle } from "../blogApi/blogApi";


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

export const fetchEditArticle = createAsyncThunk('fetchEditArticle', async (payload) => {
    const {body, slug} = payload
    const request = await editArticle(body, slug);
    return request
})

export const favoriteArticleRequest = createAsyncThunk('favoriteArticleRequest', async (slug) => {
    const request = await favoriteArticle(slug);
    return request;
})

export const unFavoriteArticleRequest = createAsyncThunk('unFavoriteArticleRequest', async (slug) => {
    const request = await unFavoriteArticle(slug)
    return request;
})

const articlesSlice = createSlice({
    name: 'articlesData',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        },
        clearCurrentArticle: (state) => {
            state.oneArticle = null
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
        }).addCase(fetchEditArticle.fulfilled, (state, action) => {
            state.loading = false;
            state.oneArticle = action.payload;
        }).addCase(fetchEditArticle.pending, state => {
            state.loading = true
        }).addCase(favoriteArticleRequest.fulfilled, (state, action) => {
            state.data.articles.forEach(item => {
                if(item.slug === action.payload.slug) {
                    item.favorited = true
                    item.favoritesCount += 1
                }
            });
        }).addCase(unFavoriteArticleRequest.fulfilled, (state, action) => {
            state.data.articles.forEach(item => {
                if(item.slug === action.payload.slug) {
                    item.favorited = false
                    item.favoritesCount -= 1
                }
            });
        })
    }
})

export const {changePage, clearCurrentArticle} = articlesSlice.actions
export default articlesSlice.reducer