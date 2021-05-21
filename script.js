const sound = "https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z9b2a7e929faa13a473850510_f1086ce5cf11d34ee_d20210310_m052952_c000_v0001075_t0018";

let player;
let cursorChanged = false;
let last_3_keys = ["", "", ""];

function keyEvent(event) {
    last_3_keys.shift();
    last_3_keys.push(event.key);

    if (last_3_keys.join("") === "sus") {
        if (cursorChanged === false) {
            player.load();
            player.play();
            document.body.style.cursor = "url(https://ani.cursors-4u.net/games/gam-16/gam1570.cur),auto";
            document.body.style.background = "#220000";
            cursorChanged = true;
        } else {
            document.body.style.cursor = "auto";
            document.body.style.background = getComputedStyle(document.documentElement).getPropertyValue("--background-color")
            cursorChanged = false;
        }
    }
}

window.onload = () => {
    player = document.querySelector("#player");
    player.src = sound;
    document.addEventListener("keypress", keyEvent);
}