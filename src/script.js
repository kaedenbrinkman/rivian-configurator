const urlParams = new URLSearchParams(window.location.search);
var baseUrl =
  "https://rivian.com/compimg/" + urlParams.get("model") + "/1.3/us/";

var r1sString = "";
if (urlParams.get("model") === "r1s") {
  r1sString = "vv00000285_";
}

var description = urlParams.get("model").toUpperCase();
var packageExtra = "";
if (urlParams.get("build") === "vv00000371") {
  description += " Launch Edition";
} else if (urlParams.get("build") === "vv00000370") {
  description += " Adventure Package";
  packageExtra = "vv00000282_";
} else if (urlParams.get("build") === "vv00000367") {
  description += " Explore Package";
}

var exteriorString =
  packageExtra +
  r1sString +
  urlParams.get("color") +
  "_vv00000370_" +
  urlParams.get("wheels");

var interiorString1 =
  urlParams.get("interior") +
  "_" +
  r1sString +
  urlParams.get("color") +
  "_" +
  urlParams.get("build");
var interiorString2 =
  urlParams.get("interior") + "_" + r1sString + urlParams.get("build");

var front = baseUrl + exteriorString + "@3072x2688.front.webp";
var side = baseUrl + exteriorString + "@3072x2688.side.webp";
var rear = baseUrl + exteriorString + "@3072x2688.rear.webp";
var driver = baseUrl + interiorString1 + "@2048x1152.driver.webp";
var backseats = baseUrl + interiorString2 + "@2048x1152.backseats.webp";

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
