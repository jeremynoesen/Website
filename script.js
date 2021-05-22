const sound = "https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z9b2a7e929faa13a473850510_f10306c64124d325b_d20210310_m062616_c000_v0001079_t0021";

let player;
let changed = false;
let buffer = ["", "", ""];

let styles = `* {
                cursor: url(https://ani.cursors-4u.net/games/gam-16/gam1570.cur), url(https://ani.cursors-4u.net/games/gam-16/gam1570.cur), auto !important;
              }`;

let styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;

let oldColor = getComputedStyle(document.documentElement).getPropertyValue("--button-hover-color");

function keyEvent(event) {
    buffer.shift();
    buffer.push(event.key);

    if (buffer.join("") === "sus") {
        if (changed === false) {
            player.src = sound;
            player.loop = true;
            player.load();
            player.play();
            document.head.appendChild(styleSheet);
            document.body.style.background = "#220000";
            document.documentElement.style.setProperty("--button-hover-color", "#990000");
            document.getElementById("logo").src = "https://i1.sndcdn.com/artworks-Uii8SMJvNPxy8ePA-romBoQ-t500x500.jpg";
            document.getElementById("logo").width = 360;
            document.getElementById("logo").height = 360;
            document.getElementById("logo").style.borderRadius = getComputedStyle(document.documentElement).getPropertyValue("--radius");
            buffer = ["", "", ""];
            changed = true;
        } else {
            player.pause();
            document.head.removeChild(styleSheet);
            document.body.style.background = getComputedStyle(document.documentElement).getPropertyValue("--background-color");
            document.documentElement.style.setProperty("--button-hover-color", oldColor);
            document.getElementById("logo").src = "resources/Logo.png";
            document.getElementById("logo").width = 250;
            document.getElementById("logo").height = 250;
            buffer = ["", "", ""];
            changed = false;
        }
    }
}

window.onload = () => {
    player = document.querySelector("#player");
    document.addEventListener("keypress", keyEvent);
}