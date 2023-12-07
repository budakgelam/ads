var MINUTE_MILLISECONDS = 30000;
var now = new Date().getTime();

if (!localStorage.t || now > parseInt(localStorage.t) + MINUTE_MILLISECONDS) {
    var date = new Date();
    localStorage.t = now;
    window.location.href = "https://www.google.com/";
    window.open(window.document.URL, "_blank");
}
