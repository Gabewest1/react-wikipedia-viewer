import React from "react"
import { Globe, GlobeTop, GlobeBottom } from "./styles"
import { ReactHeight } from "react-height"

export const GlobeView = (props) => {
    let { 
        children, isExpanded, topGlobeId, 
        bottomGlobeId, top, bottom,
        expandGlobe, collapseGlobe,
        height, setGlobeHeight, onClick
    } = props

    // let onClick = isExpanded ? collapseGlobe : expandGlobe

    return (
        <Globe onClick={ onClick } height={ height }>
            <GlobeTop
                src="assets/images/wiki-globe-left.png"
                id={ topGlobeId }
                isExpanded={ isExpanded }
                top={ top } />

            { children }

            <GlobeBottom
                src="assets/images/wiki-globe-right.png"
                id={ bottomGlobeId }
                isExpanded={ isExpanded }
                bottom={ bottom } />
        </Globe>
    )
}
