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
    display: ${({ src }) => src ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const TintedBackground = styled.div`
    position: absolute;
    width: ${window.innerWidth}px;
    height: ${window.innerHeight}px;
    background: rgba(0,0,0,.7);
    z-index: 1;
`
export const RandomButton = styled.button`
    margin-top: 10px;
`