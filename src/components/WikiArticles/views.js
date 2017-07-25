import React from "react"
import cleanse from "cleanse-html"
import { WikiArticle, WikiArticles, WikiArticleTitle, WikiArticleDescription } from "./styles"

export const WikiArticlesView = ({ id, height, articles }) => {

    return (
        <WikiArticles id={ id } height={ height }>
            {articles.map((article, i) => <WikiArticleView key={ i } article={ article } />)}
        </WikiArticles>
    )
}

const WikiArticleView = ({ article: { title, snippet } }) => {

    return (
        <WikiArticle>
            <WikiArticleTitle>{title}</WikiArticleTitle>
            <WikiArticleDescription>{cleanse(snippet)}</WikiArticleDescription>
        </WikiArticle>
    )
}
