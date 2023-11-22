let player;
let status = false;
let buffer = ["", "", ""];
let styleSheet = document.createElement("style");
let style = `@keyframes pulse {
                0% {
                    transform: scale(1);
                    background-size: 100%;
                    filter: brightness(100%);
                }
                3% {
                    transform: scale(1.02);
                    background-size: 102%;
                    filter: brightness(104%);
                }
                50% {
                    transform: scale(1);
                    background-size: 100%;
                    filter: brightness(100%);
                }
                53% {
                    transform: scale(1.05);
                    background-size: 105%;
                    filter: brightness(110%);
                }
                100% {
                    transform: scale(1);
                    background-size: 100%;
                    filter: brightness(100%);
                }
              }

              body {
                background-image: linear-gradient(to right, #221800, #220000, #001822);
              }
              
              .button:hover {
                background-color: #AA444444;
              }

              .footer {
                color: #AA4444FF;
              }
              
              .notfound {
                background-image: url(resources/drip.jpg);
                background-position-y: 30%;
                background-position-x: 50%;
                animation-name: pulse;
                animation-iteration-count: 57;
                animation-duration: 1.2765957447s;
                animation-delay: 0.275s;
              }`;

/**
 * Listen for keystroke patterns
 *
 * @param event Key event
 */
function keyEvent(event) {
    buffer.shift();
    buffer.push(event.key);
    if (buffer.join("") === "sus") {
        buffer = ["", "", ""];
        if (status !== true) {
            player.play();
            styleSheet.innerText = style;
            document.head.appendChild(styleSheet);
            status = true;
        } else {
            player.pause();
            player.currentTime = 0;
            document.head.removeChild(styleSheet);
            status = false;
        }
    }
}

/**
 * Initialize the listener
 */
function scriptInit() {
    player = document.querySelector("#player");
    player.src = "resources/drip.mpga";
    player.loop = false;
    player.load();
    document.addEventListener("keypress", keyEvent);
}

/**
 * Load script on page load
 */
window.onload = () => {
    scriptInit();
}
