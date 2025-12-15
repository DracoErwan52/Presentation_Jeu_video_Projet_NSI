const switchBtn = document.getElementById("switch");

switchBtn.addEventListener("click", function () {
    document.body.classList.toggle("invert");

    if (document.body.classList.contains("invert")) {
        switchBtn.src = "img/light.png";
    } else {
        switchBtn.src = "img/dark.png";
    }
}); 
const img = document.getElementById("monImage");

img.addEventListener("click", () => {
    if (img.requestFullscreen) {
        img.requestFullscreen(); 
    } else if (img.webkitRequestFullscreen) { 
        img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) {
        img.msRequestFullscreen();
    }
});

const ima = document.getElementById("Flowey");

ima.addEventListener("click", () => {
    if (ima.requestFullscreen) {
        ima.requestFullscreen(); 
    } else if (img.webkitRequestFullscreen) { 
        ima.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) {
        ima.msRequestFullscreen();
    }
});

const imi = document.getElementById("Asriel");

imi.addEventListener("click", () => {
    if (imi.requestFullscreen) {
        imi.requestFullscreen(); 
    } else if (img.webkitRequestFullscreen) { 
        imi.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) {
        imi.msRequestFullscreen();
    }
});

const ims = document.getElementById("Sans");

ims.addEventListener("click", () => {
    if (ims.requestFullscreen) {
        ims.requestFullscreen(); 
    } else if (img.webkitRequestFullscreen) { 
        ims.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) {
        ims.msRequestFullscreen();
    }
});

