import styled from "styled-components"
import { ReactHeight } from "react-height"

//The animation timing is coupled with the animation timing in the wikiGlobe component
export const Wrapper = styled(ReactHeight)`
    display: flex;
    z-index: ${({ isExpanded }) => isExpanded ? "1" : "auto"};
    width: ${({ isExpanded }) => isExpanded ? "100%" : "0%"};
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
    width: ${({ height }) => height };
    position: relative;
    right: ${({ height }) => height };
    padding: 0;
    outline: none;
`
