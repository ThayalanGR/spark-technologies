function onLoadComplete(elementToFade) {
    var element = document.getElementById(elementToFade);
    var prelaod = document.getElementById("preload");
    preload.innerHTML = '';
}

window.onload = function () {
    onLoadComplete("preloader")
}