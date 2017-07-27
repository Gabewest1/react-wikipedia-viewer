import React from "react"
import cleanse from "cleanse-html"
import { WikiArticle, WikiArticles, WikiArticleTitle, WikiArticleDescription } from "./styles"

export const WikiArticlesView = ({ id, height, margin, articles }) => {

    return (
        <WikiArticles id={ id } height={ height } margin={ margin }>
            {articles.map((article, i) => <WikiArticleView key={ i } article={ article } />)}
        </WikiArticles>
    )
}

const WikiArticleView = ({ article: { name, description }}) => {    

    return (
        <WikiArticle>
            <WikiArticleTitle>{name}</WikiArticleTitle>
            <WikiArticleDescription>{cleanse(description)}</WikiArticleDescription>
        </WikiArticle>
    )
}
