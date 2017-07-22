import { combineReducers } from "redux"
import { default as wikiArticles } from "redux/wikiArticles"
import { reducer as formReducer } from "redux-form"

export default combineReducers({wikiArticles, form: formReducer})
