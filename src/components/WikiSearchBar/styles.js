import styled from "styled-components"
import { ReactHeight } from "react-height"
import colors from "Lib/colors"

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
    border: none;
    outline: none;
    width: 100%
`
export const Button = styled.button`
    background: lightgray;
    background-size: 100% 100%;
    cursor: pointer;
    opacity: ${({ isExpanded }) => isExpanded ? 1 : 0};
    position: absolute;
    right: 0;
    border: none;
    padding: 0 5px;
    outline: none;
    height: 100%;
    transition: ${({ isExpanded }) => {
        return isExpanded
            ? "opacity .5s ease-in-out 1s"  
            : "opacity 1s ease-in-out"
    }};

    &:hover {
        color: white;
    }
    &:active {
        background: darkgray;
    }
`
