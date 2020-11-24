const urlParams = new URLSearchParams(window.location.search);
var baseUrl =
  "https://rivian.com/compimg/" + urlParams.get("model") + "/1.3/us/";

var exteriorString =
  "vv00000282_" +
  urlParams.get("color") +
  "_vv00000370_" +
  urlParams.get("wheels");

var interiorString = "";

var front = baseUrl + exteriorString + "@3072x2688.front.webp";
var side = baseUrl + exteriorString + "@3072x2688.side.webp";
var rear = baseUrl + exteriorString + "@3072x2688.rear.webp";
var driver = baseUrl + interiorString + "@3072x2688.driver.webp";
var backseats = baseUrl + interiorString + "@3072x2688.backseats.webp";

var htmlToAdd =
  '<div class="media text-muted pt-3"><div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"><div class="d-flex justify-content-between align-items-center w-100"><strong class="text-gray-dark">Front</strong></div><img width="100%" src="' +
  front +
  '"></div></div>';

window.onload = function () {
  $("#cardiv").html(htmlToAdd);
};
