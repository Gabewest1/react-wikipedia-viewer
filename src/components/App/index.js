import React from "react"

import WikiSearchBar from "Components/WikiSearchBar"
import WikiArticles from "Components/WikiArticles"

export default class App extends React.Component {
    render() {
        return (
            <div>
                <WikiSearchBar />
                <WikiArticles />
            </div>
        )
    }
}
