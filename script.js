function loadRoute(route) {
  var active = route;
  var anchors = document.getElementsByClassName('nav-link');
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].innerHTML = anchors[i].innerHTML.split(' ')[0];
  }

  event.target.innerHTML += ' <span class="active-anchor">✶</span>';

  for (var ele of document.getElementsByClassName('route-content')) {
    if (ele.id !== route) {
      ele.style.display = 'none';
    }
  }
  document.getElementById(route).style.display = 'block';
  window.scrollTo(0, 0);
}
