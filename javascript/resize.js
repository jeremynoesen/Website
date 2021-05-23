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
    document.addEventListener("resize", keyEvent);
}

function resizeEvent(event) {
    let width = window.innerWidth;
    if(width <= 1024 && width >= 736) {
        width -= 112;
        document.body.style.setProperty("--grid-width", width + "px");
        document.body.style.setProperty("--wide-box-size", (width - 60) + "px");
        document.body.style.setProperty("--large-box-size", ((width / 2) - 68) + "px");
        document.body.style.setProperty("--small-box-size", ((width / 4) / - 34) + "px");
        document.body.style.setProperty("--margin-size", "50px auto");
        document.body.style.fontSize = (width / 45) + "px"
        document.body.style.lineHeight = (width / 30) + "px"
    } else if (width > 1024) {
        document.body.style.setProperty("--grid-width", gridWidth);
        document.body.style.setProperty("--wide-box-size", wideSize);
        document.body.style.setProperty("--large-box-size", largeSize);
        document.body.style.setProperty("--small-box-size", smallSize);
        document.body.style.setProperty("--margin-size", margins);
        document.body.style.fontSize = "16px";
        document.body.style.lineHeight = "24px";
    }
}

window.addEventListener('resize', resizeEvent);