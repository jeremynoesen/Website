/**
 * This script can be paired with theme.css to make it scale better for mobile browsers in a way that doesnt cause the
 * theme to break its shape.
 *
 * @author Jeremy Noesen
 */

let gridWidth;
let wideSize;
let largeSize;
let smallSize;
let margins;
let radius;
let gaps;
let shadows;
let padding;
let fontSize;
let lineSpacing;

/**
 * initialize original values for variables and register event
 */
function resizeInit() {
    gridWidth = document.body.style.getPropertyValue("--grid-width");
    wideSize = document.body.style.getPropertyValue("--wide-box-size");
    largeSize = document.body.style.getPropertyValue("--large-box-size");
    smallSize = document.body.style.getPropertyValue("--small-box-size");
    margins = document.body.style.getPropertyValue("--margin-size");
    radius = document.body.style.getPropertyValue("--border-radius");
    gaps = document.body.style.getPropertyValue("--gap-size");
    shadows = document.body.style.getPropertyValue("--shadow-size");
    padding = document.body.style.getPropertyValue("--padding");
    fontSize = document.body.style.getPropertyValue("--font-size");
    lineSpacing = document.body.style.getPropertyValue("--line-height");

    resizeEvent();
    window.addEventListener("resize", resizeEvent);
}

/**
 * on resize, dynamically size all page elements
 */
function resizeEvent() {
    let width = window.innerWidth;
    if (width <= 1080) {
        let size = width - 20;
        let dynPadding = size * (32 / 736); //padding, grid width
        let dynGaps = size * (16 / 736); //gap size, grid width
        let dynShadows = size * (16 / 736); //shadow size, grid width
        let dynRadius = size * (24 / 736); //border radius, grid width
        let dynFontSize = size * (18 / 736); //font size + 2, grid width
        let dynLineHeight = size * (24 / 736); //line height, grid width
        let dynWideSize = size - (2 * dynPadding);
        let dynLargeSize = (size / 2) - (2 * dynPadding) - (dynGaps / 2);
        let dynSmallSize = (size / 4) - (2 * dynPadding) - (dynGaps / 1.333);

        document.body.style.setProperty("--grid-width", size + "px");
        document.body.style.setProperty("--wide-box-size", dynWideSize + "px");
        document.body.style.setProperty("--large-box-size", dynLargeSize + "px");
        document.body.style.setProperty("--small-box-size", dynSmallSize + "px");
        document.body.style.setProperty("--font-size", dynFontSize + "px");
        document.body.style.setProperty("--line-height", dynLineHeight + "px");
        document.body.style.setProperty("--border-radius", dynRadius + "px");
        document.body.style.setProperty("--gap-size", dynGaps + "px");
        document.body.style.setProperty("--shadow-size", dynShadows + "px");
        document.body.style.setProperty("--padding", dynPadding + "px");
        document.body.style.setProperty("--margin-size", "0px auto");
    } else if (width > 1080) {
        document.body.style.setProperty("--grid-width", gridWidth);
        document.body.style.setProperty("--wide-box-size", wideSize);
        document.body.style.setProperty("--large-box-size", largeSize);
        document.body.style.setProperty("--small-box-size", smallSize);
        document.body.style.setProperty("--margin-size", margins);
        document.body.style.setProperty("--font-size", fontSize);
        document.body.style.setProperty("--line-height", lineSpacing);
        document.body.style.setProperty("--border-radius", radius);
        document.body.style.setProperty("--gap-size", gaps);
        document.body.style.setProperty("--shadow-size", shadows);
        document.body.style.setProperty("--padding", padding);
    }
}

/**
 * initialize on load
 */
window.onload = () => {
    resizeInit();
}