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
        <Globe onClick={ onClick } height={ height }>
            <GlobeTop
                src="assets/images/wiki-globe-left.png"
                id={ firstGlobeId }
                isExpanded={ isExpanded }
                top={ top } />

            { children }

            <GlobeBottom
                src="assets/images/wiki-globe-right.png"
                id={ secondGlobeId }
                isExpanded={ isExpanded }
                bottom={ bottom } />
        </Globe>
    )
}
