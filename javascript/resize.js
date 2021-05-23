let gridWidth;
let wideSize;
let largeSize;
let smallSize;
let margins;

window.onload = () => {
    gridWidth = document.body.style.getPropertyValue("--grid-width");
    wideSize = document.body.style.getPropertyValue("--wide-box-size");
    largeSize = document.body.style.getPropertyValue("--large-box-size");
    smallSize = document.body.style.getPropertyValue("--small-box-size");
    margins = document.body.style.getPropertyValue("--margin-size");

    resizeEvent();
    window.addEventListener("resize", resizeEvent);
}

function resizeEvent(event) {
    let width = window.innerWidth;
    if(width <= 1080 && width >= 540) {
        width -= 32;
        document.body.style.setProperty("--grid-width", width + "px");
        document.body.style.setProperty("--wide-box-size", (width - 60) + "px");
        document.body.style.setProperty("--large-box-size", ((width / 2) - 68) + "px");
        document.body.style.setProperty("--small-box-size", ((width / 4) - 72) + "px");
        document.body.style.setProperty("--margin-size", "0px auto");
        document.body.style.fontSize = (width / 40) + "px"
        document.body.style.lineHeight = (width / 30) + "px"
    } else if (width > 1080) {
        document.body.style.setProperty("--grid-width", gridWidth);
        document.body.style.setProperty("--wide-box-size", wideSize);
        document.body.style.setProperty("--large-box-size", largeSize);
        document.body.style.setProperty("--small-box-size", smallSize);
        document.body.style.setProperty("--margin-size", margins);
        document.body.style.fontSize = "16px";
        document.body.style.lineHeight = "24px";
    }
}