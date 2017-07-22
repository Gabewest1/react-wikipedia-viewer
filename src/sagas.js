import { all } from "redux-saga/effects"
import { sagas as wikiArticleSagas } from "redux/wikiArticles"

export default function* rootSaga() {
    yield all([
        wikiArticleSagas()
    ])
}
