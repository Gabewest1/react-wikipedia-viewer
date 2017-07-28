import { fork } from "redux-saga/effects"
import { sagas as wikiArticleSagas } from "Redux/wikiArticles"
import { sagas as wikiIframeSagas } from "Redux/wikiIframe"

export default function* rootSaga() {
    yield [
        fork(wikiArticleSagas),
        fork(wikiIframeSagas)
    ]
}
