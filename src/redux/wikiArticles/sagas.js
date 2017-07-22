import { take, call, put, select } from "redux-saga/effects"
import { actions } from "./reducers"
import { queryWikiArticles } from "Services"

export default function* () {
    while ( yield take("@@redux-form/CHANGE") ) {
        let state = yield select()
        let values = state.form.wikiSearchBar.values
        let query = values ? values.wikiArticleQuery : ""
        console.log("QUERY:", query)

        if (query === "") {
            yield put(actions.fetchArticlesSuccess([]))
            continue
        }

        try {
            let articles = yield call(queryWikiArticles, query)
            console.log("Between ajax and dispatching success")
            yield put(actions.fetchArticlesSuccess(articles))
            console.log("after success :D")
        } catch (e) {
            console.log(e)
            yield put(actions.fetchArticlesError())
        }
    }
}