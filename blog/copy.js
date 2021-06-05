function copy(url) {
    let copyText = document.getElementById("copytext");
    copyText.value = url;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}