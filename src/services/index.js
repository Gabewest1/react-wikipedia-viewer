/**
 * Put 3rd Pary APIs here
 */
import $ from "jquery"

export function queryWikiArticles(query) {
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