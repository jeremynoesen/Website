const sound = "https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z9b2a7e929faa13a473850510_f10306c64124d325b_d20210310_m062616_c000_v0001079_t0021";

let player;
let status = 0;
let buffer = ["", "", ""];

let style1 = `body {
                background-color: #00000000;
                background-image: linear-gradient(to right, #221800, #220000, #001822);
                background-attachment: fixed;
              }
              
              .button:hover {
                background-color: #AA444444;
              }
              
              .notfound {
                background-image: url(https://i1.sndcdn.com/artworks-Uii8SMJvNPxy8ePA-romBoQ-t500x500.jpg);
                background-size: cover;
                background-position-y: 20%;
                justify-content: unset;
                align-items: unset;
                text-align: left;
              }`;

let style2 = `body {
                background-color: #00000000;
                background-image: linear-gradient(#080022, #221800);
                background-attachment: fixed;
              }
              
              .button:hover {
                background-color: #40308888;
              }
              
              .notfound {
                background-image: url(https://raw.githubusercontent.com/jeremynoesen/Pseudo3D/main/img/Perspective.gif);
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
            player.src = sound;
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
