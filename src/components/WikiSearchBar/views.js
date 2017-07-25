import React from "react"

import { Input, Button } from "./styles"

export const SearchButtonView = props => {
    let { children, fetchArticles, height } = props

    return (
        <Button
            onClick={ () => fetchArticles() }
            height={ height } />
    )
}

export const SearchBarView = ({ input }) => {

    return (
        <Input { ...input } />
    )
}
