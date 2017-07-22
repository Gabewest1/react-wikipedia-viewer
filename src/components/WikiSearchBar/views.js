import React from "react"

import { Input, Button } from "./styles"

export const SearchButtonView = (props) => {
    let { children, fetchArticles } = props
    console.log(props)

    return (
        <Button onClick={ () => fetchArticles() }>
            {children}
        </Button>
    )
}

export const SearchBarView = () => {
    return (
        <Input />
    )
}
