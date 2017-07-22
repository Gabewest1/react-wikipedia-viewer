import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import WikiArticlesView from "./views"

import { actions as wikiArticleActions } from "redux/wikiArticles"

class WikiArticles extends React.Component {
    render() {

        return (
            <WikiArticlesView { ...this.props } />
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
