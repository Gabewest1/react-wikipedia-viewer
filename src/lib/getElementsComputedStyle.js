export default function(element, style) {
    let value = window.getComputedStyle(element).getPropertyValue(style)

    return (style === "width" || style === "height") ? parseInt(value) : value
}
