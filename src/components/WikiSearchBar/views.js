import React from "react"

import { Input, Button } from "./styles"

export const SearchButtonView = props => {
    let { children, fetchArticles, height, isExpanded } = props

    return (
        <Button
            onClick={ () => fetchArticles() }
            height={ height }
            isExpanded={ isExpanded } />
    )
}

export const SearchBarView = ({ input }) => {

    return (
        <Input { ...input } />
    )
}
