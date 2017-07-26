import styled from "styled-components"
import { ReactHeight } from "react-height"

//The animation timing is coupled with the animation timing in the wikiGlobe component
export const Wrapper = styled(ReactHeight)`
    display: flex;
    position: relative;
    z-index: ${({ isExpanded }) => isExpanded ? "1" : "auto"};
    width: ${({ isExpanded }) => isExpanded ? `${(window.innerWidth / 2)}px` : "0%"};
    transition: width 1s ease-in-out 100ms;
`
export const Input = styled.input`
    padding: 10px 15px;
    outline: none;
    width: 100%
`
export const Button = styled.button`
    background: url(assets/images/icons/search.svg);
    background-size: 100% 100%;
    width: ${({ height }) => height };  //This creates a square box
    opacity: ${({ isExpanded }) => isExpanded ? 1 : 0};
    position: absolute;
    right: 0;
    padding: 0;
    outline: none;
    height: 100%;
    transition: opacity .5s ease-in-out 1s;
`
