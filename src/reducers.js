import { combineReducers } from "redux"
import { default as wikiArticles } from "redux/wikiArticles"
import { reducer as formReducer } from "redux-form"
import { default as wikiGlobe } from "redux/wikiGlobe"

export default combineReducers({
    wikiArticles,
    form: formReducer,
    wikiGlobe
})
