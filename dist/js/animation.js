var collapse = document.getElementById("collapse");
var arrow = document.getElementById("list-arrow");
let up = true;

collapse.addEventListener("click", function() {

    if (up) {
        arrow.style.transform = "rotate(-180deg)";
        up = false;
    } else {
        arrow.style.transform = "rotate(0deg)";
        up = true;
    }

});