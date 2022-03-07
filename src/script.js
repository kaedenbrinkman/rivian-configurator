const urlParams = new URLSearchParams(window.location.search);
const baseUrl =
  "https://rivian.com/compimg/" + urlParams.get("model") + "/2.2/us/";

// EXAMPLE R1T: https://rivian.com/compimg/r1t/2.2/us/exp-fgr_ord-ad3_pkg-adv_whl-1rd@3072x2688.front.webp
// EXAMPLE R1S: https://rivian.com/compimg/r1s/2.2/us/exp-fgr_ord-ad3_pkg-adv_whl-1rd@2048x1792.front.webp

var description = urlParams.get("model").toUpperCase();
var packageExtra = "";
if (urlParams.get("build") === "PKG-LCH") {
  description += " Launch Edition";
} else if (urlParams.get("build") === "PKG-ADV") {
  description += " Adventure Package";
  packageExtra = "vv00000282_";
} else if (urlParams.get("build") === "PKG-EXP") {
  description += " Explore Package";
}

let exteriorString = urlParams.get("color").toLowerCase() + "_ord-ad3_" + urlParams.get("build").toLowerCase() + "_" + urlParams.get("wheels").toLowerCase();
let interiorString1 = urlParams.get("interior").toLowerCase() + "_" + urlParams.get("build").toLowerCase();
let interiorString2 = urlParams.get("color").toLowerCase() + "_" + urlParams.get("interior").toLowerCase() + "_" + urlParams.get("build").toLowerCase();

var front = baseUrl + exteriorString + "@3072x2688.front.webp";
var side = baseUrl + exteriorString + "@3072x2688.side.webp";
var rear = baseUrl + exteriorString + "@3072x2688.rear.webp";
var driver = baseUrl + interiorString2 + "@2048x1152.driver.webp";
var backseats = baseUrl + interiorString1 + "@2048x1152.backseats.webp";

var htmlToAdd =
  '<div class="media text-muted pt-3"><div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"><div class="d-flex justify-content-between align-items-center w-100"><strong class="text-gray-dark"></strong></div><img width="100%" src="' +
  front +
  '"></div></div>';
htmlToAdd +=
  '<div class="media text-muted pt-3"><div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"><div class="d-flex justify-content-between align-items-center w-100"><strong class="text-gray-dark"></strong></div><img width="100%" src="' +
  side +
  '"></div></div>';

htmlToAdd +=
  '<div class="media text-muted pt-3"><div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"><div class="d-flex justify-content-between align-items-center w-100"><strong class="text-gray-dark"></strong></div><img width="100%" src="' +
  rear +
  '"></div></div>';

htmlToAdd +=
  '<div class="media text-muted pt-3"><div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"><div class="d-flex justify-content-between align-items-center w-100"><strong class="text-gray-dark"></strong></div><img width="100%" src="' +
  driver +
  '"></div></div>';

htmlToAdd +=
  '<div class="media text-muted pt-3"><div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"><div class="d-flex justify-content-between align-items-center w-100"><strong class="text-gray-dark"></strong></div><img width="100%" src="' +
  backseats +
  '"></div></div>';

window.onload = function () {
  $("#cardiv").html(htmlToAdd);
  $("#subtitle").html(description);
};

function back() {
  window.location = 'https://kaedenbrinkman.github.io/rivian-configurator/';
}
