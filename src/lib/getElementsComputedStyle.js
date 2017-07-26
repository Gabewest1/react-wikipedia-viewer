export default function(element, style) {
    console.log(element)

    return parseInt(window.getComputedStyle(element).getPropertyValue(style))
}
