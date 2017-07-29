import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { WikiArticlesView } from "./views"

import { actions as wikiArticleActions, selectors as wikiArticleSelectors } from "Redux/wikiArticles"
import { selectors as wikiGlobeSelectors } from "Redux/wikiGlobe"

import getElementsComputedStyle from "Lib/getElementsComputedStyle"
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
        let siblings = getSiblings(articlesElement, (sib) =>
            sib !== articlesElement && getElementsComputedStyle(sib, "position") !== "absolute"
        )

        let margin = parseInt(this.props.margin.replace("px", ""))

        let siblingsHeight = siblings.reduce((sum, sib) => sum + getElementsComputedStyle(sib, "height"), 0)
        let parentHeight = getElementsComputedStyle(parent, "height")
        let articlesHeight = parentHeight - siblingsHeight - margin * 2

        console.log("HEIGHTS:", parentHeight - siblingsHeight, articlesHeight)

        this.props.setArticlesHeight(articlesHeight + "px")
    }
    render() {

        return (
            <WikiArticlesView id="articles" { ...this.props } />
        )
    }
}

function mapStateToProps(state) {
    let { wikiArticles, wikiGlobe } = state

    return {
        articles: wikiArticleSelectors.selectArticles(wikiArticles),
        height: state.wikiArticles.height,
        isGlobeExpanded: wikiGlobeSelectors.selectIsExpanded(wikiGlobe)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(wikiArticleActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WikiArticles)
