import React from "react"
import cleanse from "cleanse-html"
import { Greeting, WikiArticle, WikiArticles, WikiArticleTitle, WikiArticleDescription } from "./styles"

export const WikiArticlesView = ({ id, height, margin, articles, setCurrentArticle, isGlobeExpanded }) => {
    articles = articles.map((article, i) =>
        <WikiArticleView key={ i } article={ article } onClick={ setCurrentArticle } />
    )

    let greetingText = isGlobeExpanded ? "Search an Interesting Topic or See What Whackyness Fate Bestows Upon You"
                                       : "Click the Globe to Search the World"
    return (
        <WikiArticles id={ id } height={ height } margin={ margin }>
            {
                articles.length > 0 ? articles : <Greeting>{ greetingText }</Greeting>}
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
