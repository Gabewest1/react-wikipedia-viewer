import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { actions as wikiArticleActions, selectors as wikiArticleSelectors } from "Redux/wikiArticles"
import { actions as wikiIframeActions, selectors as wikiIframeSelectors } from "Redux/wikiIframe"

import { WikiIframeView } from "./views"

class WikiIframe extends React.Component {
    onClick = () => {
        this.props.fadeOutIframe()
    }
    onTransitionEnd = (e) => {
        let transitionName = e.propertyName

        if (transitionName === "width") {
            this.props.expandIframeFinished()
        }
    }
    render() {
        return (
            <WikiIframeView
                { ...this.props }
                onClick= { this.onClick }
                onTransitionEnd= { this.onTransitionEnd } />
        )
    }
}

function mapStateToProps(state) {
    let { wikiArticles, wikiIframe } = state

    return {
        src: wikiArticleSelectors.selectCurrentArticleUrl(wikiArticles),
        isFadedIn: wikiIframeSelectors.selectFadeInStatus(wikiIframe),
        isExpanded: wikiIframeSelectors.selectExpandedStatus(wikiIframe),
        fadeIn: wikiIframeSelectors.selectFadeIn(wikiIframe),
        fadeOut: wikiIframeSelectors.selectFadeOut(wikiIframe)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...wikiArticleActions, ...wikiIframeActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WikiIframe)
