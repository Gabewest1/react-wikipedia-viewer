import { all, take, takeEvery, put } from "redux-saga/effects"
import { actions } from "./reducers"
import { actions as wikiArticleActions } from "Redux/wikiArticles"

export default function* rootSaga() {
    yield all([
        watchIframeOpenAnimation(),
        watchIframeCloseAnimation()
    ])
}

export function* watchIframeOpenAnimation() {
    yield takeEvery(wikiArticleActions.setCurrentArticle, openIframeAnimation)
}
export function* watchIframeCloseAnimation() {
    yield takeEvery(actions.fadeOutIframe, closeIframeAnimation)
}

export function* openIframeAnimation() {
    yield put(actions.fadeIframe(true))
    yield take(actions.fadeIframeFinished)

    yield put(actions.expandIframe(true))
    yield take(actions.expandIframeFinished)
}

export function* closeIframeAnimation() {
    yield put(actions.expandIframe(false))
    yield take(actions.expandIframeFinished)

    yield put(actions.fadeIframe(false))
    yield take(actions.fadeIframeFinished)
}
