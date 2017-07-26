import { createSelector } from "reselect"
import getElementsComputedStyle from "Lib/getElementsComputedStyle"

const selectFirstGlobeId = (state) => state.firstGlobeId
const selectSecondGlobeId = (state) => state.secondGlobeId

const selectFirstGlobeElement = (state) => {
    let id = selectFirstGlobeId(state)

    return document.getElementById(id)
}

const selectSecondGlobeElement = (state) => {
    let id = selectSecondGlobeId(state)

    return document.getElementById(id)
}

const selectFirstGlobeWidth = (state) => {
    let globe = selectFirstGlobeElement(state)

    return globe ? getElementsComputedStyle(globe, "width") : 0
}

const selectSecondGlobeWidth = createSelector(
    selectFirstGlobeElement,
    (globe) => globe ? getElementsComputedStyle(globe, "width") : 0
)

const selectTop = (state) => state.top
const selectBottom = (state) => state.bottom
const selectHeight = (state) => state.height
const selectIsExpanded = (state) => state.isExpanded

export default {
    selectFirstGlobeId,
    selectSecondGlobeId,
    selectFirstGlobeElement,
    selectSecondGlobeElement,
    selectFirstGlobeWidth,
    selectTop,
    selectBottom,
    selectHeight,
    selectIsExpanded,
    selectSecondGlobeWidth
}
