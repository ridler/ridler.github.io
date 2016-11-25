function loadRoute(route) {
    var active = route;
    var anchors = document.getElementsByClassName('nav-link');
    for (var _i = 0, anchors_1 = anchors; _i < anchors_1.length; _i++) {
        var el = anchors_1[_i];
        el.innerHTML = el.innerHTML.split(' ')[0];
    }
    event.target.innerHTML += ' <span class="active-anchor">✶</span>';
    for (var _a = 0, _b = document.getElementsByClassName('route-content'); _a < _b.length; _a++) {
        var el = _b[_a];
        if (el.id !== route) {
            el.style.display = 'none';
        }
    }
    document.getElementById(route).style.display = 'block';
    window.scrollTo(0, 0);
}
