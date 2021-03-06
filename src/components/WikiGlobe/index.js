import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import getElementsComputedStyle from "Lib/getElementsComputedStyle"

import WikiSearchBar from "Components/WikiSearchBar"
import WikiArticles from "Components/WikiArticles"
import { GlobeView } from "./views"

import { actions as wikiGlobeActions, selectors as wikiGlobeSelectors } from "Redux/wikiGlobe"

class WikiGlobe extends React.Component {
    componentDidMount() {
        let { firstGlobeId, setGlobeHeight } = this.props
        let globeElement = document.getElementById(firstGlobeId)

        //Need setTimeout bc this function runs before the TopGlobe element is rendered
        //in the browser
        setTimeout(() => {
            let height = getElementsComputedStyle(globeElement, "height")
            console.log("HEIGHT:", globeElement, height)
            setGlobeHeight(height + "px")
        }, 100)
    }
    handleClick(e) {
        if (this.props.isExpanded) {
            console.log("preventing default :D")
            e.preventDefault()
            this.props.collapseGlobe()
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
    let { wikiGlobe } = state

    return {
        isExpanded: wikiGlobeSelectors.selectIsExpanded(wikiGlobe),
        firstGlobeId: wikiGlobeSelectors.selectFirstGlobeId(wikiGlobe),
        secondGlobeId: wikiGlobeSelectors.selectSecondGlobeId(wikiGlobe),
        top: wikiGlobeSelectors.selectTop(wikiGlobe),
        bottom: wikiGlobeSelectors.selectBottom(wikiGlobe),
        height: wikiGlobeSelectors.selectHeight(wikiGlobe),
        w1: wikiGlobeSelectors.selectFirstGlobeWidth(wikiGlobe),
        w2: wikiGlobeSelectors.selectSecondGlobeWidth(wikiGlobe)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(wikiGlobeActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WikiGlobe)
