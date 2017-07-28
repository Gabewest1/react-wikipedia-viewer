import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import { default as wikiArticles } from "Redux/wikiArticles"
import { default as wikiGlobe } from "Redux/wikiGlobe"
import { default as wikiIframe } from "Redux/wikiIframe"

export default combineReducers({
    form: formReducer,
    wikiArticles,
    wikiGlobe,
    wikiIframe
})
