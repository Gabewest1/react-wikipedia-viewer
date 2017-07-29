import styled from "styled-components"

//The height of the Globe is dependent on the height set by the GlobeTop and GlobeBottom
//when they initially get rendered to the browser
export const Globe = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: ${({ height }) => height};
`
const GlobeImage = styled.img`
    position: absolute;
    max-height: ${window.innerHeight / 3}px;
    max-width: 50%;
    transition: all 1s ease-in-out;
`
export const GlobeTop = styled(GlobeImage)`
    ${({ isExpanded }) => getStyles(isExpanded, "top")}
`
export const GlobeBottom = styled(GlobeImage)`
    ${({ isExpanded }) => getStyles(isExpanded, "bottom")}
`

function getStyles(isExpanded, topOrBottom) {
    //Sets the styles for the two halfs of the globes( (top/left) && (bottom/right) )
    let collapsedStyles = {
        top: `left: 50%; transform: translateX(-50%); cursor: pointer;`,
        bottom: `right: 50%; transform: translateX(50%); cursor: pointer;`
    }

    let expandedStyles = {
        top: `left: 0;`,
        bottom: `right: 0;`
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
