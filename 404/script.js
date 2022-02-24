let player;
let status = 0;
let buffer = ["", "", ""];

let style1 = `body {
                background-image: linear-gradient(to right, #221800, #220000, #001822);
              }
              
              .button:hover {
                background-color: #AA444444;
              }
              
              .notfound {
                background-image: url(resources/drip.jpg);
                background-size: cover;
                background-position-y: 30%;
                justify-content: unset;
                align-items: unset;
                text-align: left;
              }`;

let style2 = `body {
                background-image: linear-gradient(#080022, #221800);
              }
              
              .button:hover {
                background-color: #40308888;
              }
              
              .notfound {
                background-image: url(resources/p3d.gif);
                background-size: cover;
                background-position-y: 100%;
                justify-content: unset;
                align-items: unset;
                text-align: left;
                image-rendering: pixelated;
              }`;

let styleSheet = document.createElement("style");

/**
 * listen for keystroke patterns
 *
 * @param event key event
 */
function keyEvent(event) {
    buffer.shift();
    buffer.push(event.key);

    if (buffer.join("") === "sus") {
        if (status !== 1) {
            console.log('Sus mode activated!');
            player.src = "resources/drip.mpga";
            player.loop = true;
            player.load();
            player.play();
            styleSheet.innerText = style1;
            document.head.appendChild(styleSheet);
            buffer = ["", "", ""];
            status = 1;
        } else {
            console.log('Sus mode deactivated!');
            player.pause();
            document.head.removeChild(styleSheet);
            buffer = ["", "", ""];
            status = 0;
        }
    } else if (buffer.join("") === "p3d") {
        if (status !== 2) {
            console.log('P3D mode activated!');
            player.pause();
            styleSheet.innerText = style2;
            document.head.appendChild(styleSheet);
            buffer = ["", "", ""];
            status = 2;
        } else {
            console.log('P3D mode deactivated!');
            document.head.removeChild(styleSheet);
            buffer = ["", "", ""];
            status = 0;
        }
    }
}

/**
 * initialize the listener
 */
function scriptInit() {
    player = document.querySelector("#player");
    document.addEventListener("keypress", keyEvent);
}

/**
 * load script on load, as well as resize script
 */
window.onload = () => {
    scriptInit();
}
