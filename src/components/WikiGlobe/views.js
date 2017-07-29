import React from "react"
import { Globe, GlobeTop, GlobeBottom } from "./styles"

export const GlobeView = (props) => {
    let { 
        children, isExpanded, firstGlobeId, 
        secondGlobeId, top, bottom,
        expandGlobe, collapseGlobe,
        height, setGlobeHeight, onClick
    } = props

    // let onClick = isExpanded ? collapseGlobe : expandGlobe

    return (
        <Globe height={ height }>
            <GlobeTop
                src="assets/images/wiki-globe-left.png"
                id={ firstGlobeId }
                onClick={ onClick }
                isExpanded={ isExpanded }
                top={ top } />

            { children }

            <GlobeBottom
                src="assets/images/wiki-globe-right.png"
                id={ secondGlobeId }
                onClick={ onClick }
                isExpanded={ isExpanded }
                bottom={ bottom } />
        </Globe>
    )
}
