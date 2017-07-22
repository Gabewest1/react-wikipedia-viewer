import React from "react"
import { Field } from "redux-form"

import { Input, Button } from "./styles"

export const SearchButtonView = (props) => {
    let { children, fetchArticles } = props

    return (
        <Button onClick={ () => fetchArticles() }>
            {children}
        </Button>
    )
}

export const SearchBarView = ({ input }) => {

    return (
        <Input { ...input } />
    )
}
