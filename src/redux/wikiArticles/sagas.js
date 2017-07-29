import { fork, takeLatest, call, put, select } from "redux-saga/effects"
import { change } from "redux-form"
import { actions } from "./reducers"
import { queryWikiArticles } from "Services"
import randomWords from "random-words"

export default function* rootSaga() {
    yield [
        fork(watchFormChange),
        fork(watchFetchRandomArticles)
    ]
}
export function* watchFormChange() {
    yield takeLatest("@@redux-form/CHANGE", updateViewWithQuery)
}
export function* watchFetchRandomArticles() {
    yield takeLatest(actions.fetchRandomWikiArticles, updateViewWithRandomArticles)
}

export function* updateViewWithQuery() {
    let { form } = yield select()
    let query = ""

    if (form.wikiSearchBar.values && form.wikiSearchBar.values.wikiArticleQuery) {
        query = form.wikiSearchBar.values.wikiArticleQuery
    }

    console.log("QUERY:", query)

    if (query === "") {
        yield put(actions.fetchArticlesSuccess([]))

        return
    }

    try {
        let articles = yield call(queryWikiArticles, query)
        yield put(actions.fetchArticlesSuccess(articles))
    } catch (e) {
        console.log(e)
        yield put(actions.fetchArticlesError())
    }
}

export function* updateViewWithRandomArticles() {
    try {
        console.log("LOOKING FOR RANDOM ARTICLES :D")
        let randomCatagory = randomWords()
        yield setQueryInputFieldText(randomCatagory)
    } catch (e) {
        console.log(e)
        yield put(actions.fetchArticlesError())
    }
}

export function* setQueryInputFieldText(text) {
    yield put(change("wikiSearchBar", "wikiArticleQuery", text))
}
