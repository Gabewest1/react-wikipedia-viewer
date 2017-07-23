import styled from "styled-components"

export const Globe = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
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

export const ExpandGlobeButton = styled.button`

`

function getStyles(isExpanded, topOrBottom) {
    let collapsedStyles = {
        "top": `top: 50%; transform: translateY(-50%);`,
        "bottom": `bottom: 50%; transform: translateY(50%);`
    }

    let expandedStyles = {
        "top": `top: 0;`,
        "bottom": `bottom: 0;`
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
