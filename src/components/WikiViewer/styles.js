import styled from "styled-components"
import colors from "Lib/colors"

export const ExpandGlobeButton = styled.button`

`
export const Container = styled.div`
    height: ${window.innerHeight}px;
    background: ${colors.primary};
`
export const IFrameWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    ${({ isFadedIn, fadeIn, fadeOut }) => getFadingInStyles(isFadedIn, fadeIn, fadeOut)}
`
export const TintedBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.7);
    transition: opacity 1s ease-in-out;
    ${({ isFadedIn, fadeIn, fadeOut }) => getFadingInStyles(isFadedIn, fadeIn, fadeOut)}
`

function getFadingInStyles(isFadedIn, fadeIn, fadeOut) {
    let defaultStyles = `
        opacity: 0;
        z-index: -1;
    `
    let fadeInStyles = `
        opacity: 1;
        z-index: 2;
    `
    let fadeOutStyles = `
        opacity: 0;
        z-index: 2;
    `

    if (!isFadedIn && !fadeIn && !fadeOut) {
        return defaultStyles
    } else if ((!isFadedIn && fadeIn) || (isFadedIn && !fadeOut)) {
        return fadeInStyles
    } else if (isFadedIn && fadeOut) {
        return fadeOutStyles
    }

}
