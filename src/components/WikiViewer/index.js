import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import WikiSearchBar from "Components/WikiSearchBar"
import WikiArticles from "Components/WikiArticles"
import WikiGlobe from "Components/WikiGlobe"
import WikiIframe from "Components/WikiIframe"
import { Container, IFrameWrapper, TintedBackground } from "./styles"

import { actions as wikiGlobeActions } from "Redux/wikiGlobe"
import { actions as wikiArticleActions, selectors as wikiArticleSelectors } from "Redux/wikiArticles"
import { actions as wikiIframeActions, selectors as wikiIframeSelectors } from "Redux/wikiIframe"

class WikiViewer extends React.Component {
    constructor() {
        super()

        //Margin is tracked in order to properly calculate the height of the 
        //articles component in its fillRemainingSpace() method
        this.state = {margin: "20px"}
    }
    handleTransitionEnd = (e) => {
        if (e.propertyName === "opacity") {
            console.log("FADEIFRAMEFINISHED OPACITY", e.target)
            this.props.fadeIframeFinished()
        }
    }
    render() {
        let { src, fetchRandomWikiArticles, isFadedIn, fadeOut, fadeIn, isExpanded } = this.props
        let iFrameWrapperProps = { isFadedIn, fadeOut, fadeIn, isExpanded, src }

        return (
            <Container>
                <TintedBackground
                    onTransitionEnd={ this.handleTransitionEnd }
                    { ...iFrameWrapperProps } />
                <IFrameWrapper
                    { ...iFrameWrapperProps }>

                    <WikiIframe />
                </IFrameWrapper>
                <WikiGlobe>
                    <WikiSearchBar />
                </WikiGlobe>
                <WikiArticles margin={ this.state.margin } />
            </Container>
        )
    }
}

function mapStateToProps(state) {
    let { wikiArticles, wikiIframe } = state

    return {
        src: wikiArticleSelectors.selectCurrentArticleUrl(wikiArticles),
        isFadedIn: wikiIframeSelectors.selectFadeInStatus(wikiIframe),
        isExpanded: wikiIframeSelectors.selectExpandedStatus(wikiIframe),
        fadeIn: wikiIframeSelectors.selectFadeIn(wikiIframe),
        fadeOut: wikiIframeSelectors.selectFadeOut(wikiIframe)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({...wikiArticleActions, ...wikiGlobeActions, ...wikiIframeActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WikiViewer)
