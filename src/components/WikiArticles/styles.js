import styled, { keyframes } from "styled-components"
import colors from "Lib/colors"

const itemMargin = 15

const WikiArticleAnimation = keyframes`
    from { opacity: 0 }
    to { opacity: 1 }
`

export const WikiArticles = styled.ul`
    background: ${colors.secondary};
    box-sizing: border-box;
    padding: 0;
    padding-top: 10px;
    overflow-y: scroll;
    margin: ${({ margin }) => margin};
    height: ${({ height }) => height};
`

export const WikiArticle = styled.li`
    cursor: pointer;
    margin-left: 10px;
    border-left: solid 7px black;
    padding-left: 10px;
    animation: ${WikiArticleAnimation} 1s ease-in-out;

    &:hover {
        h1 {
            color: ${colors.primary};
        }
    }
`

export const WikiArticleTitle = styled.h1`
    margin: 0;
    margin-bottom: ${itemMargin}px;
    text-decoration: underline;
`

export const WikiArticleDescription = styled.p`
    margin: 0;
    margin-bottom: ${itemMargin}px;
    font-style: italic;
`
