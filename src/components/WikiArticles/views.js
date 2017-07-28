import React from "react"
import cleanse from "cleanse-html"
import { WikiArticle, WikiArticles, WikiArticleTitle, WikiArticleDescription } from "./styles"

export const WikiArticlesView = ({ id, height, margin, articles, setCurrentArticle }) => {

    return (
        <WikiArticles id={ id } height={ height } margin={ margin }>
            {articles.map((article, i) => <WikiArticleView key={ i } article={ article } onClick={ setCurrentArticle } />)}
        </WikiArticles>
    )
}

const WikiArticleView = ({ article: { name, description, url }, onClick }) => {    

    return (
        <WikiArticle onClick={ () => onClick(url) }>
            <WikiArticleTitle>{ name }</WikiArticleTitle>
            <WikiArticleDescription>{cleanse(description)}</WikiArticleDescription>
        </WikiArticle>
    )
}
