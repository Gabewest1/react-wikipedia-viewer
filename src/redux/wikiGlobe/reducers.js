import { createActions, handleActions } from "redux-actions"

const initialState = {
    isExpanded: false,
    firstGlobeId: "topGlobe",
    secondGlobeId: "bottomGlobe",
    bottom: "initial",
    top: "initial",
    height: "auto",
    width: "auto"
}

const {
    expandGlobe,
    collapseGlobe,
    setGlobeHeight
} = createActions("EXPAND_GLOBE", "COLLAPSE_GLOBE", "SET_GLOBE_HEIGHT")

const globeReducer = handleActions({
    [expandGlobe]: (state, action) => ({...state, isExpanded: true}),
    [collapseGlobe]: (state, action) => ({...state, isExpanded: false}),
    [setGlobeHeight]: (state, action) => ({...state, height: action.payload})
}, initialState)

export const actions = {
    expandGlobe, collapseGlobe, setGlobeHeight
}

export default globeReducer
