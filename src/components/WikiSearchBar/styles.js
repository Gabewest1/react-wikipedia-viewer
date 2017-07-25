import styled from "styled-components"
import { ReactHeight } from "react-height"

export const Wrapper = styled(ReactHeight)`
    display: flex;
    z-index: ${({ isExpanded }) => isExpanded ? "1" : "auto"};
`
export const Input = styled.input`
    padding: 10px 15px;
    outline: none;
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
