import { createActions, handleActions } from "redux-actions"

const initialState = {articles: [], loading: false, error: false}

const {
    fetchArticles, fetchArticlesSuccess, fetchArticlesError
} = createActions("FETCH_ARTICLES", "FETCH_ARTICLES_SUCCESS", "FETCH_ARTICLES_ERROR")

const articlesReducer = handleActions({
    [fetchArticles]: (state, action) => ({...state, loading: true}),
    [fetchArticlesSuccess]: (state, action) => ({...state, articles: action.payload}),
    [fetchArticlesError]: (state, action) => ({...state, loading: false, error: true})
}, initialState)

export const actions = {
    fetchArticles,
    fetchArticlesSuccess,
    fetchArticlesError
}

export default articlesReducer
