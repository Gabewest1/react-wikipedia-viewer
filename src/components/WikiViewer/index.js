import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import WikiSearchBar from "Components/WikiSearchBar"
import WikiArticles from "Components/WikiArticles"
import WikiGlobe from "Components/WikiGlobe"
import WikiIframe from "Components/WikiIframe"
import { Container, IFrameWrapper, RandomButton, TintedBackground } from "./styles"

import { actions as wikiGlobeActions } from "Redux/wikiGlobe"
import { actions as wikiArticleActions, selectors as wikiArticleSelectors } from "Redux/wikiArticles"

class WikiViewer extends React.Component {
    constructor() {
        super()

        //Margin is tracked in order to properly calculate the height of the 
        //articles component in its fillRemainingSpace() method
        this.state = {margin: "20px"}
    }
    render() {
        let { src, fetchRandomWikiArticles } = this.props

        return (
            <Container>
                <IFrameWrapper src={ src }>
                    <WikiIframe />
                </IFrameWrapper>
                {src && <TintedBackground />}
                <WikiGlobe>
                    <WikiSearchBar />
                </WikiGlobe>
                <WikiArticles margin={ this.state.margin } />
            </Container>
        )
    }
}

function mapStateToProps(state) {
    let { wikiArticles } = state

    return {
        isExpanded: state.wikiGlobe.isExpanded,
        firstGlobeId: state.wikiGlobe.firstGlobeId,
        secondGlobeId: state.wikiGlobe.secondGlobeId,
        top: state.wikiGlobe.top,
        bottom: state.wikiGlobe.bottom,
        src: wikiArticleSelectors.selectCurrentArticleUrl(wikiArticles)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...wikiArticleActions, ...wikiGlobeActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WikiViewer)
