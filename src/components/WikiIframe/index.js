import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { actions as wikiArticleActions, selectors as wikiArticleSelectors } from "Redux/wikiArticles"
import { WikiIframeView } from "./views"

class WikiIframe extends React.Component {
    render() {
        return (
            <WikiIframeView { ...this.props } />
        )
    }
}

function mapStateToProps(state) {
    let { wikiArticles } = state

    return {
        src: wikiArticleSelectors.selectCurrentArticleUrl(wikiArticles)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(wikiArticleActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WikiIframe)
