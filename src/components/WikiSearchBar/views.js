import React from "react"

import { Input, Button } from "./styles"

export const SearchButtonView = props => {
    let { children, fetchRandomWikiArticles, height, isExpanded } = props

    return (
        <Button
            onClick={ () => fetchRandomWikiArticles() }
            height={ height }
            isExpanded={ isExpanded }>
            Random
        </Button>
    )
}

export const SearchBarView = ({ input }) => {

    return (
        <Input { ...input } />
    )
}
