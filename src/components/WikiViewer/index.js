import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import WikiSearchBar from "Components/WikiSearchBar"
import WikiArticles from "Components/WikiArticles"
import WikiGlobe from "Components/WikiGlobe"
import { Container } from "./styles"

import { actions as wikiGlobeActions } from "Redux/wikiGlobe"

class WikiViewer extends React.Component {
    constructor() {
        super()

        //Margin is tracked in order to properly calculate the height of the 
        //articles component in its fillRemainingSpace() method
        this.state = {margin: "20px"}
    }
    render() {
        return (
            <Container>
                <WikiGlobe>
                    <WikiSearchBar />
                </WikiGlobe>
                <WikiArticles margin={ this.state.margin } />
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        isExpanded: state.wikiGlobe.isExpanded,
        firstGlobeId: state.wikiGlobe.firstGlobeId,
        secondGlobeId: state.wikiGlobe.secondGlobeId,
        top: state.wikiGlobe.top,
        bottom: state.wikiGlobe.bottom
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(wikiGlobeActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WikiViewer)
