import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { WikiArticlesView } from "./views"

import { actions as wikiArticleActions } from "redux/wikiArticles"

import getElementsHeight from "Lib/getElementsHeight"
import getSiblings from "Lib/getSiblings"

class WikiArticles extends React.Component {
    componentDidMount() {
        //Need to wait for the articles html to render in the browser
        //before trying to find its height and remaing space
        setTimeout(() => this.fillRemainingSpace(), 100)
    }
    fillRemainingSpace() {
        let articlesElement = document.getElementById("articles")
        let parent = articlesElement.parentElement
        let siblings = articlesElement.siblings

        console.log(articlesElement, parent, siblings)

        let siblingsHeight = siblings.forEach((sum, sib) => sum + getElementsHeight(sib), 0)
        let parentHeight = getElementsHeight(parent)
        let articlesHeight = parentHeight - siblingsHeight


        this.props.setArticlesHeight(articlesHeight + "px")
    }
    render() {

        return (
            <WikiArticlesView id="articles" { ...this.props } />
        )
    }
}

function mapStateToProps(state) {
    return {articles: state.wikiArticles.articles}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({wikiArticleActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WikiArticles)
