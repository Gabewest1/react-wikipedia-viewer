import { createActions, handleActions } from "redux-actions"

const initialState = {
    fadeIn: false,
    fadeOut: false,
    expand: false,
    collapse: false,
    isFadedIn: false,
    isExpanded: false
}

const {
    fadeIframe,
    fadeInIframe,
    fadeOutIframe,
    fadeIframeFinished,
    expandIframe,
    expandIframeFinished
} = createActions(
    "FADE_IFRAME",
    "FADE_IN_IFRAME",
    "FADE_OUT_IFRAME",
    "FADE_IFRAME_FINISHED",
    "EXPAND_IFRAME",
    "EXPAND_IFRAME_FINISHED"
)

const iFrameReducer = handleActions({
    [fadeIframe]: (state, action) => ({...state, fadeIn: action.payload, fadeOut: !action.payload}),
    [expandIframe]: (state, action) => ({...state, isExpanded: action.payload, collapse: !action.payload}),
    [fadeIframeFinished]: (state, action) => {
        //This reducer gets called twice in a row for some reason. fadeIn or fadeOut 
        //should be true, so check if neither are set to determine if this is the
        //unexpected second call
        if (!state.fadeIn && !state.fadeOut) {
            return state
        }

        return ({...state, fadeIn: false, fadeOut: false, isFadedIn: !state.isFadedIn})
    }
}, initialState)

export const actions = {
    fadeIframe,
    fadeInIframe,
    fadeOutIframe,
    fadeIframeFinished,
    expandIframe,
    expandIframeFinished
}

export default iFrameReducer
