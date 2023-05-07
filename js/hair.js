var img = document.getElementById("img");
var h = document.getElementById("htitel");
var p = document.getElementById("ptitel");
var p1 = document.getElementById("ptitel1");

var imgs = ["/img/carousel-1.jpg",
    "/img/carousel-2.jpg"
];
var htitle = ["WE WILL KEEP YOU AN AWESOME LOOK", "LUXURY HAIRCUT AT AFFORDABLE PRICE "];
var ptitle = ["123 STREET, NEW YORK, USA", "456 STREET, NEW YORK, USA"];
var ptitel1 = ["+012 345 67890", "+012 987 67890"];
var index = 0;

function nextt() {
    ++index;
    if (index == imgs.length) {
        index = 0;
    }
    img.src = imgs[index];
    h.textContent = htitle[index];
    p.textContent = ptitle[index];
    p1.textContent = ptitel1[index];


}

function backk() {
    --index;
    if (index == -1) {
        index = imgs.length - 1;
    }
    img.src = imgs[index];
    h.textContent = htitle[index];
    p.textContent = ptitle[index];
    p1.textContent = ptitel1[index];

}

////////////////////////////
var list_header = document.getElementById("list_header");

function menu() {
    if (list_header.style.height === "0px") {
        list_header.style.height = "auto";
        list_header.style.borderTop = "1px solid red";
    } else {
        list_header.style.height = "0px";
        list_header.style.borderTop = "0px solid red";
    }

}
var menu_list_header = document.getElementById("menu_list_header");

function menu2() {
    if (menu_list_header.style.height == "auto") {
        menu_list_header.style.height = "0px";
        menu_list_header.style.top = "0px";
        menu_list_header.style.display = "none";
    } else {
        menu_list_header.style.height = "auto";
        menu_list_header.style.top = "0px";
        menu_list_header.style.display = "flex";
    }

}
///////

//////////////////////////touch slider in page6
var touch = document.getElementsByClassName("touch")[0];
var draggin = false;
var click = false;
var down = false;
var mouseposition;
var shiftx;
touch.addEventListener('mousedown', function(e) {
    draggin = false;
    down = true;
    shiftx = touch.offsetLift - e.clientX;
});
touch.addEventListener('mouseup', function() {
    if (draggin == true) {
        click = false;
    } else {
        click = true;
    }
    draggin = false;
    down = false;
});
touch.addEventListener('mousemove', function(event) {
    draggin == true;
    event.preventDefault();
    if (down) {
        mouseposition = event.clientX;
        var posx = mouseposition + shiftx;
        var image = 20;
        var m = window.innerWidth - (touch.offsetWidth + image);
        if (posx > m && posx < 0) {
            touch.style.left = posx + 'px';
        }
    }

});
/////////////////////
// var img = document.getElementsByClassName("touch_img");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var name1 = document.getElementById("name");
var level = document.getElementById("level");
var disc = document.getElementById("disc");

function image1() {
    img1.classList.add("add");
    img1.classList.remove("touch_img");
    img2.classList.add("touch_img");
    img3.classList.add("touch_img");
    name1.textContent = "M";
    level.textContent = "Profession";
    disc.textContent = "Clita 1 clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita";

}

function image2() {
    img2.classList.add("add");
    img2.classList.remove("touch_img");
    img1.classList.add("touch_img");
    img3.classList.add("touch_img");
    name1.textContent = "o";
    level.textContent = "Profession";
    disc.textContent = "Clita 2 clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita";

}

function image3() {
    img3.classList.add("add");
    img3.classList.remove("touch_img");
    img2.classList.add("touch_img");
    img1.classList.add("touch_img");
    name1.textContent = "n";
    level.textContent = "Profession";
    disc.textContent = "Clita 3 clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita";

}