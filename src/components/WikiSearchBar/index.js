import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { SearchBarView, SearchButtonView } from "./views"

import { actions as wikiArticleActions } from "redux/wikiArticles"

class WikiSearchBar extends React.Component {
    render() {

        return (
            <div>
                <SearchBarView { ...this.props } />
                <SearchButtonView { ...this.props }>Search Wiki</SearchButtonView>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(wikiArticleActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WikiSearchBar)
