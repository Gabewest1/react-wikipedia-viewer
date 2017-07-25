import { createActions, handleActions } from "redux-actions"

const initialState = {
    articles: [],
    height: "auto",
    loading: false,
    error: false
}

const {
    fetchArticles, fetchArticlesSuccess, fetchArticlesError, setArticlesHeight
} = createActions("FETCH_ARTICLES", "FETCH_ARTICLES_SUCCESS", "FETCH_ARTICLES_ERROR", "SET_ARTICLES_HEIGHT")

const articlesReducer = handleActions({
    [fetchArticles]: (state, action) => ({...state, loading: true}),
    [fetchArticlesSuccess]: (state, action) => ({...state, articles: action.payload}),
    [fetchArticlesError]: (state, action) => ({...state, loading: false, error: true}),
    [setArticlesHeight]: (state, action) => ({...state, height: action.payload})
}, initialState)

export const actions = {
    fetchArticles,
    fetchArticlesSuccess,
    fetchArticlesError,
    setArticlesHeight
}

export default articlesReducer
