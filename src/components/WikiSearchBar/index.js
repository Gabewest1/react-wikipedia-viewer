import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Field, reduxForm } from "redux-form"

import { SearchBarView, SearchButtonView } from "./views"

import { actions as wikiArticleActions } from "redux/wikiArticles"

class WikiSearchBar extends React.Component {
    render() {
        return (
            <div>
                <Field { ...this.props } name="wikiArticleQuery" component={ SearchBarView } type="text" />
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

export default reduxForm({
    form: "wikiSearchBar"
})(connect(mapStateToProps, mapDispatchToProps)(WikiSearchBar))
