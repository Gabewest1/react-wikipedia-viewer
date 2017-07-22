import { take, call, put } from "redux-saga/effects"
import { actions } from "./reducers"
import $ from "jquery"

export default function* () {
    while ( true ) {
        let { query } = yield take(actions.fetchArticles)

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

function queryWikiArticles(query) {
    const URL = `https://en.wikipedia.org/w/api.php?action=query&srsearch=${query}&list=search&format=json`
    const options = {
        url: URL,
        dataType: "jsonp",
        jsonp: "callback",
        headers: {"Access-Control-Allow-Origin": "*"},
    }

    return new Promise((resolve) => {
        $.ajax(options).then(response => {
            console.log("HELLOO")
            console.log(response)
            let articles = response.query.search
            console.log("HELLOOfdsfdsfdsfds")
            console.log(articles)
            resolve(articles)
        })
    })
}
