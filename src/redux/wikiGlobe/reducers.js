import { createActions, handleActions } from "redux-actions"

const initialState = {
    isExpanded: false,
    topGlobeId: "topGlobe",
    bottomGlobeId: "bottomGlobe",
    bottom: "initial",
    top: "initial"
}

const { expandGlobe, collapseGlobe } = createActions("EXPAND_GLOBE", "COLLAPSE_GLOBE")


const globeReducer = handleActions({
    [expandGlobe]: (state, action) => ({...state, isExpanded: true}),
    [collapseGlobe]: (state, action) => ({...state, isExpanded: false})
}, initialState)

export const actions = {
    expandGlobe, collapseGlobe
}

export default globeReducer
