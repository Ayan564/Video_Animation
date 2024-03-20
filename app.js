Draggable.create("#dragme", {
    type: "x",
    bounds: ".container"
});
function checkOverlap() {
    let cir = document.querySelector(".cir");
    let dragme = document.querySelector("#dragme");
    let rect1 = cir.getBoundingClientRect();
    let rect2 = dragme.getBoundingClientRect();

    if (rect1.left < rect2.right) {
        document.querySelector("#video1").style.opacity = 0;
    }
    else {
        document.querySelector("#video1").style.opacity = 1;
    }
}
window.addEventListener("mousemove", checkOverlap);