import React from "react" 
import { Globe, GlobeTop, GlobeBottom, ExpandGlobeButton } from "./styles"

export const GlobeView = (props) => {
    let { children, isExpanded, topGlobeId, bottomGlobeId, top, bottom } = props

    return (
        <Globe>
            <GlobeTop
                src="assets/images/wiki-globe-top.png"
                id={topGlobeId}
                isExpanded={ isExpanded } 
                top={ top }/>

            { children }

            <GlobeBottom
                src="assets/images/wiki-globe-bottom.png"
                id={bottomGlobeId}
                isExpanded={ isExpanded } 
                bottom={ bottom } />
        </Globe>
    )
}

export const ExpandGlobeButtonView = (props) => {
    let { isExpanded, expandGlobe, collapseGlobe, children } = props
    let onClick = isExpanded ? collapseGlobe : expandGlobe
    let text = children ? children :
               isExpanded ? "Close Globe" : "Open the Earth"
             
    return (
        <ExpandGlobeButton onClick={ () => onClick() }>{ text }</ExpandGlobeButton>
    )
}
