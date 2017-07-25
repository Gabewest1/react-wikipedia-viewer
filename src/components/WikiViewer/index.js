import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import WikiSearchBar from "Components/WikiSearchBar"
import WikiArticles from "Components/WikiArticles"
import WikiGlobe from "Components/WikiGlobe"

import { actions as wikiGlobeActions } from "Redux/wikiGlobe"

class WikiViewer extends React.Component {
    getHeight() {
        //Returns the height of the remaining whitespace on the page
        let { topGlobeId } = this.props
        let el = document.getElementById(topGlobeId)

        //On the first render their won't be any elements to grab so return 100%
        if (!el) {
            return "100%"
        }

        let parent = el.parentElement
        let grandparent = parent.parentElement
        let greateGrandParent = grandparent.parentElement
        let greateGrandParentHeight = parseInt(window.getComputedStyle(greateGrandParent).getPropertyValue("height").replace("px", ""))
        let siblings = Array.from(grandparent.children)
        console.log(siblings, grandparent)

        let heightOfSiblings = siblings.reduce((sum, sib) => {
            let sibHeight = parseInt(window.getComputedStyle(sib).getPropertyValue("height").replace("px", ""))

            if (sib === parent) {
                return sum
            }

            return sum + sibHeight
        }, 0)

        console.log("HEIGHTOF SIBLINGS:", heightOfSiblings, greateGrandParentHeight)

        return greateGrandParentHeight - heightOfSiblings
    }
    render() {
        return (
            <div style={{ height: "100%"}}>
                <WikiGlobe>
                    <WikiSearchBar />
                </WikiGlobe>
                <WikiArticles />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isExpanded: state.wikiGlobe.isExpanded,
        topGlobeId: state.wikiGlobe.topGlobeId,
        bottomGlobeId: state.wikiGlobe.bottomGlobeId,
        top: state.wikiGlobe.top,
        bottom: state.wikiGlobe.bottom
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(wikiGlobeActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WikiViewer)
