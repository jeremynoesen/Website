let player;
let status = false;
let buffer = ["", "", ""];
let style1 = `body {
                background-image: linear-gradient(to right, #221800, #220000, #001822);
              }
              
              .button:hover {
                background-color: #AA444444;
              }
              
              .notfound {
                background-image: url(resources/drip.jpg);
                background-position-y: 30%;
                justify-content: unset;
                align-items: unset;
                text-align: left;
              }`;
let styleSheet = document.createElement("style");

/**
 * Listen for keystroke patterns
 *
 * @param event Key event
 */
function keyEvent(event) {
    buffer.shift();
    buffer.push(event.key);
    if (buffer.join("") === "sus") {
        if (status !== true) {
            player.src = "resources/drip.mpga";
            player.loop = true;
            player.load();
            player.play();
            styleSheet.innerText = style1;
            document.head.appendChild(styleSheet);
            buffer = ["", "", ""];
            status = true;
        } else {
            player.pause();
            document.head.removeChild(styleSheet);
            buffer = ["", "", ""];
            status = false;
        }
    }
}

/**
 * Initialize the listener
 */
function scriptInit() {
    player = document.querySelector("#player");
    document.addEventListener("keypress", keyEvent);
}

/**
 * Load script on page load
 */
window.onload = () => {
    scriptInit();
}
