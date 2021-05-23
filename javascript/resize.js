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
    let height = window.innerHeight;
    let size;
    if (height < width) size = height;
    else size = width;
    if(size <= 900 && size >= 540) {
        size -= 32;
        document.body.style.setProperty("--grid-width", size + "px");
        document.body.style.setProperty("--wide-box-size", (size - 60) + "px");
        document.body.style.setProperty("--large-box-size", ((size / 2) - 68) + "px");
        document.body.style.setProperty("--small-box-size", ((size / 4) - 72) + "px");
        document.body.style.setProperty("--margin-size", "0px auto");
        document.body.style.fontSize = (size / 40) + "px"
        document.body.style.lineHeight = (size / 30) + "px"
    } else if (size > 900) {
        document.body.style.setProperty("--grid-width", gridWidth);
        document.body.style.setProperty("--wide-box-size", wideSize);
        document.body.style.setProperty("--large-box-size", largeSize);
        document.body.style.setProperty("--small-box-size", smallSize);
        document.body.style.setProperty("--margin-size", margins);
        document.body.style.fontSize = "16px";
        document.body.style.lineHeight = "24px";
    }
}