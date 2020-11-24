const urlParams = new URLSearchParams(window.location.search);
var baseUrl =
  "https://rivian.com/compimg/" + urlParams.get("model") + "/1.3/us/";
