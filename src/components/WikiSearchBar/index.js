import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Field, reduxForm } from "redux-form"

import { SearchBarView, SearchButtonView } from "./views"
import { Wrapper } from "./styles"

import { actions as wikiArticleActions } from "redux/wikiArticles"

class WikiSearchBar extends React.Component {
    constructor() {
        super()
        this.state = { height: "auto" }
    }
    render() {
        let { isExpanded } = this.props
        let { height } = this.state

        return (
            <Wrapper
              isExpanded={ isExpanded }
              onHeightReady={ (height) => this.setState({ height: height + "px" }) } >

                <Field { ...this.props } name="wikiArticleQuery" component={ SearchBarView } type="text" />
                <SearchButtonView height={ height } { ...this.props }>Search Wiki</SearchButtonView>
            </Wrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
        isExpanded: state.wikiGlobe.isExpanded
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(wikiArticleActions, dispatch)
}

export default reduxForm({
    form: "wikiSearchBar"
})(connect(mapStateToProps, mapDispatchToProps)(WikiSearchBar))
