let player;
let status = false;
let buffer = ["", "", ""];
let style1 = `@keyframes pulse {
                0% {
                    transform: scale(1);
                    background-size: 100%;
                    filter: brightness(100%);
                }
                3% {
                    transform: scale(1.02);
                    background-size: 102%;
                    filter: brightness(102%);
                }
                50% {
                    transform: scale(1);
                    background-size: 100%;
                    filter: brightness(100%);
                }
                53% {
                    transform: scale(1.05);
                    background-size: 105%;
                    filter: brightness(105%);
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
                animation-delay: 0.3191489362s;
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
            player.loop = false;
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
