export default function(element) {
    return parseInt(window.getComputedStyle(element).getPropertyValue("height"))
}
