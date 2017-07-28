import styled from "styled-components"
import colors from "Lib/colors"

const itemMargin = 15

export const WikiArticles = styled.ul`
    background: ${colors.secondary};
    box-sizing: border-box;
    padding: 0;
    padding-top: 10px;
    margin: ${({ margin }) => margin};
    overflow-y: scroll;
    height: ${({ height }) => height};
`

export const WikiArticle = styled.li`
    margin-left: 10px;
    border-left: solid 7px black;
    padding-left: 10px;
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
