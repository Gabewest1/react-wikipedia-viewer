const selectArticles = (state) => {
    let articles = state.articles

    if (!articles[1]) {
        return []
    }

    let numOfArticles = articles[1].length
    let names = articles[1]
    let descriptions = articles[2]
    let urls = articles[3]

    let newArticles = []

    for (let i = 0; i < numOfArticles; i++) {
        let name = names[i]
        let description = descriptions[i]
        let url = urls[i]
        newArticles.push({ name, description, url })
    }

    return newArticles
}

const selectCurrentArticleUrl = (state) => state.currentArticle
const isExpanded = (state) => selectArticles(state).length > 0
const getHeight = (state) => state.height
const getMaxHeight = (state) => state.maxHeight

export default {
    getHeight,
    getMaxHeight,
    selectArticles,
    selectCurrentArticleUrl,
    isExpanded
}
