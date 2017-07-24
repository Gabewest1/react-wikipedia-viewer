import React from "react" 
import { ExpandGlobeButton } from "./styles"

export const ExpandGlobeButtonView = (props) => {
    let { isExpanded, expandGlobe, collapseGlobe, children } = props

    let onClick = isExpanded ? collapseGlobe : expandGlobe
    let text = children ? children :
               isExpanded ? "Close Globe" : "Open the Earth"
 
    return (
        <ExpandGlobeButton onClick={ () => onClick() }>{ text }</ExpandGlobeButton>
    )
}
