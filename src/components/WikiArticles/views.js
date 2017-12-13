import React from "react"
import cleanse from "cleanse-html"
import { Greeting, WikiArticle, WikiArticles, WikiArticleTitle, WikiArticleDescription } from "./styles"

export const WikiArticlesView = ({ id, height, margin, maxHeight, articles, setCurrentArticle, isGlobeExpanded, isExpanded }) => {
    articles = articles.map((article, i) =>
        <WikiArticleView key={ i } article={ article } onClick={ setCurrentArticle } />
    )

    return (
        <WikiArticles id={ id } height={ height } maxHeight={ maxHeight } margin={ margin } isExpanded={ isExpanded } isGlobeExpanded={ isGlobeExpanded }>
            {
                isExpanded && isGlobeExpanded
                    ? articles
                    : !isExpanded && isGlobeExpanded
                        ? <Greeting>Explore your interests or jump into a random topic</Greeting>
                        : <Greeting>Click the Globe to Search the World</Greeting>
            }
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
