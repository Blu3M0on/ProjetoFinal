document.getElementById("acceptCookies").addEventListener("click", function () {
  document.cookie =
    "cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

  document.getElementById("cookieBanner").style.display = "none";
});

var header = document.getElementById("header");
var scrolled = false;
var headerimg = document.getElementById("header-image");

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

window.onscroll = function () {
  if (window.pageYOffset > 900) {
    if (!scrolled) {
      header.classList.add("scrolled");
      scrolled = true;
      headerimg.classList.add("scrolled");
      headerimg.src = "/projetofinal/media/Dinner.svg";
    }
  } else {
    if (scrolled) {
      header.classList.remove("scrolled");
      scrolled = false;
      headerimg.src = "";
      headerimg.classList.remove("scrolled");
    }
  }
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

backToTopButton.addEventListener("click", goToTop);

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    center: { lat: 39.006101862402126, lng: -7.250440905014578 },
    zoom: 18,
    mapId: "4504f8b37365c3d0",
  });
  const marker = new AdvancedMarkerElement({
    map,
    position: { lat: 39.006101862402126, lng: -7.250440905014578 },
  });
}

initMap();
