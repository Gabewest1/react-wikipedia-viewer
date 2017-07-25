import styled from "styled-components"

export const Globe = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({ height }) => height};
`
export const GlobeTop = styled.img`
    position: absolute;
    max-width: 50%;
    transition: all 1s ease-in-out;
    ${({ isExpanded }) => getStyles(isExpanded, "top")}
`
export const GlobeBottom = styled.img`
    position: absolute;
    max-width: 50%;
    transition: all 1s ease-in-out;
    ${({ isExpanded }) => getStyles(isExpanded, "bottom")}
`

function getStyles(isExpanded, topOrBottom) {
    //Sets the styles for the two halfs of the globes( (top/left) && (bottom/right) )
    let collapsedStyles = {
        "top": `left: 50%; transform: translateX(-50%);`,
        "bottom": `right: 50%; transform: translateX(50%);`
    }

    let expandedStyles = {
        "top": `left: 0;`,
        "bottom": `right: 0;`
    }

    if (topOrBottom === "top") {
        if (isExpanded) {
            return expandedStyles["top"]
        } else {
            return collapsedStyles["top"]
        }
    } else {
        if (isExpanded) {
            return expandedStyles["bottom"]
        } else {
            return collapsedStyles["bottom"]
        }
    }
} 
