import React from "react"
import { WikiArticle, WikiArticles, WikiArticleTitle, WikiArticleDescription } from "./styles"

export default ({ articles }) => {

    return (
        <WikiArticles>
            {articles.map((article, i) => <WikiArticleView key={ i } article={ article } />)}
        </WikiArticles>
    )
}

const WikiArticleView = ({ article: { title, snippet }}) => {

    return (
        <WikiArticle>
            <WikiArticleTitle>{title}</WikiArticleTitle>
            <WikiArticleDescription>{snippet}</WikiArticleDescription>
        </WikiArticle>
    )
}
