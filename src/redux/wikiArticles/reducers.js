import { createActions, handleActions } from "redux-actions"

const initialState = {
    articles: [],
    height: "auto",
    loading: false,
    error: false
}

const {
    fetchArticles,
    fetchRandomWikiArticles,
    fetchArticlesSuccess,
    fetchArticlesError,
    setArticlesHeight,
    setCurrentArticle
} = createActions(
    "FETCH_ARTICLES",
    "FETCH_RANDOM_WIKI_ARTICLES",
    "FETCH_ARTICLES_SUCCESS",
    "FETCH_ARTICLES_ERROR",
    "SET_ARTICLES_HEIGHT",
    "SET_CURRENT_ARTICLE")

const articlesReducer = handleActions({
    [fetchArticles]: (state, action) => ({...state, loading: true}),
    [fetchRandomWikiArticles]: (state, action) => ({...state, loading: true}),
    [fetchArticlesSuccess]: (state, action) => ({...state, articles: action.payload}),
    [fetchArticlesError]: (state, action) => ({...state, loading: false, error: true}),
    [setArticlesHeight]: (state, action) => ({...state, height: action.payload}),
    [setCurrentArticle]: (state, action) => ({...state, currentArticle: action.payload})
}, initialState)

export const actions = {
    fetchArticles,
    fetchRandomWikiArticles,
    fetchArticlesSuccess,
    fetchArticlesError,
    setArticlesHeight,
    setCurrentArticle
}

export default articlesReducer
