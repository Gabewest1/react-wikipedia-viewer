const selectFadeInStatus = (state) => state.isFadedIn
const selectExpandedStatus = (state) => state.isExpanded
const selectFadeIn = (state) => state.fadeIn
const selectFadeOut = (state) => state.fadeOut

export default {
    selectFadeInStatus,
    selectExpandedStatus,
    selectFadeIn,
    selectFadeOut
}
