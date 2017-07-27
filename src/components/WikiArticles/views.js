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

const WikiArticleView = ({ article: { name, description, url }}) => {    

    return (
        <WikiArticle>
            <WikiArticleTitle href={ url }>{name}</WikiArticleTitle>
            <WikiArticleDescription>{cleanse(description)}</WikiArticleDescription>
        </WikiArticle>
    )
}
