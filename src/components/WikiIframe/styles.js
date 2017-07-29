import styled from "styled-components"

export const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
`

export const Modal = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0%;
    width: 0%;
    transition: all 1s ease-in-out;

    ${({ isExpanded }) => {
        if (!isExpanded) {
            return ``
        }

        let screenRatio = window.innerWidth / window.innerHeight
        let width, height

        if (screenRatio >= 1) {
            height = window.innerHeight * .8
            width = (window.innerWidth * height) / window.innerHeight
        } else {
            width = window.innerWidth * .8
            height = width * window.innerHeight / window.innerWidth
        }

        return `height: ${height}px; width: ${width}px;`
    }}
`
export const CloseModalButton = styled.button`
    border-radius: 50%;
    background: black;
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    width: 2em;
    height: 2em;
    opacity: ${({ isExpanded }) => isExpanded ? 1 : 0};
`
