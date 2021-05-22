const sound = "https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z9b2a7e929faa13a473850510_f10306c64124d325b_d20210310_m062616_c000_v0001079_t0021";

let player;
let status = 0;
let buffer = ["", "", ""];

let style1 = `* {
                cursor: url(https://ani.cursors-4u.net/games/gam-16/gam1570.cur), url(https://ani.cursors-4u.net/games/gam-16/gam1570.cur), auto !important;
              }

              :root {
                --background-color: #220000;
              }
              
              .notfound {
                background-image: url(https://i1.sndcdn.com/artworks-Uii8SMJvNPxy8ePA-romBoQ-t500x500.jpg);
                background-size: cover;
                background-position-y: 25%;
              }
              
              .notfound:hover {
                filter: brightness(1.1);
              }`;

let style2 = `:root {
                --background-color: #4DFF00;
                --box-color: #FFF200;
                --box-hover-color: #7E05E8;
                --button-hover-color: #0050ea;
                --shadow-color: #ff00f3;
                --text-color: #B54618;
              }
              
              body {
                font-family: Comic Sans MS;
              }
              
              .notfound {
                background-image: url(https://i.kym-cdn.com/photos/images/newsfeed/001/018/903/29e.jpg);
                background-size: 150px;
                background-repeat: no-repeat;
                background-position-x: 5%;
                background-position-y: 50%;
              }`;

let styleSheet = document.createElement("style");

function keyEvent(event) {
    buffer.shift();
    buffer.push(event.key);

    if (buffer.join("") === "sus") {
        if (status !== 1) {
            player.src = sound;
            player.loop = true;
            player.load();
            player.play();
            styleSheet.innerText = style1;
            document.head.appendChild(styleSheet);
            buffer = ["", "", ""];
            status = 1;
        } else {
            player.pause();
            document.head.removeChild(styleSheet);
            buffer = ["", "", ""];
            status = 0;
        }
    } else if (buffer.join("") === "gdp") {
        if (status !== 2) {
            player.pause();
            styleSheet.innerText = style2;
            document.head.appendChild(styleSheet);
            buffer = ["", "", ""];
            status = 2;
        } else {
            document.head.removeChild(styleSheet);
            buffer = ["", "", ""];
            status = 0;
        }
    }
}

window.onload = () => {
    player = document.querySelector("#player");
    document.addEventListener("keypress", keyEvent);
}