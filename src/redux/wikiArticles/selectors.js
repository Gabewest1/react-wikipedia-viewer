const selectArticles = (state) => {
    let articles = state.articles

    if (!articles[1]) {
        return []
    }

    let numOfArticles = articles[1].length
    let names = articles[1]
    let descriptions = articles[2]
    let newArticles = []

    for (let i = 0; i < numOfArticles; i++) {
        let name = names[i]
        let description = descriptions[i]
        newArticles.push({ name, description })
    }

    console.log("NEW ARTICLES:", newArticles)
    return newArticles
}


export default {
    selectArticles
}
