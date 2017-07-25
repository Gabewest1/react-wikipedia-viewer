import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import WikiSearchBar from "Components/WikiSearchBar"
import WikiArticles from "Components/WikiArticles"
import { GlobeView } from "./views"

import { actions as wikiGlobeActions } from "Redux/wikiGlobe"

class WikiGlobe extends React.Component {
    componentDidMount() {
        let { topGlobeId, setGlobeHeight } = this.props
        let globeElement = document.getElementById(topGlobeId)

        //Need setTimeout bc this function runs before the TopGlobe element is rendered
        //in the browser
        setTimeout(() => {
            let height = parseInt(window.getComputedStyle(globeElement).getPropertyValue("height"))
            console.log("HEIGHT:", globeElement, height)
            setGlobeHeight(height + "px")
        }, 1)
    }
    handleClick(e) {
        if (this.props.isExpanded) {
            console.log("preventing default :D")
            e.preventDefault()
        } else {
            this.props.expandGlobe()
        }
    }
    render() {
        return (
            <GlobeView onClick={ this.handleClick.bind(this) } { ...this.props } />
        )
    }
}

function mapStateToProps(state) {
    return {
        isExpanded: state.wikiGlobe.isExpanded,
        topGlobeId: state.wikiGlobe.topGlobeId,
        bottomGlobeId: state.wikiGlobe.bottomGlobeId,
        top: state.wikiGlobe.top,
        bottom: state.wikiGlobe.bottom,
        height: state.wikiGlobe.height
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(wikiGlobeActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WikiGlobe)
