/**
 * Put 3rd Pary APIs here
 */
import $ from "jquery"

export function queryWikiArticles(query) {
    const URL = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${query}&format=json`
    const options = {
        url: URL,
        dataType: "jsonp",
        jsonp: "callback",
        headers: {"Access-Control-Allow-Origin": "*"},
    }

    return new Promise((resolve) => {
        $.ajax(options).then(response => {
            console.log(response)
            resolve(response)
        })
    })
}
