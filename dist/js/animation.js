let up = true;

function rotateArrow() {

    var arrow = document.getElementById("list-arrow");

    if (up) {
    arrow.style.transform = "rotate(-180deg)";
    up = false;
    } else {
        arrow.style.transform = "rotate(0deg)";
        up = true;
    }

}