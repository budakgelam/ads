window.onload = function() {
  var puURL = 'https://www.toprevenuegate.com/e2f23hjf2?key=d48a82a8f874452ba9976cdf2cb6478b';
  var puTS = Math.round(+new Date()/1000);
  console.log('T.'+localStorage.puTS+'/'+puTS);
  if (typeof localStorage.puTS == 'undefined' || parseInt(localStorage.puTS) <= (puTS - 30)) {
    var links = document.getElementsByTagName('a');
    for(var i = 0, len = links.length; i < len; i++) {
      links[i].onclick = function (e) {
        var puHref = this.getAttribute("href");
          var puTarget = this.getAttribute("target");
          if (puHref !== '#' && puHref !== 'javascript:void(0)') {
          e.preventDefault();    
          if (puTarget == '_blank') {
            window.open(window.location.href);
          }
          window.open(puHref);
          window.location.href = puURL;
          localStorage.puTS = puTS;
        }
      }
    }
  }
};
