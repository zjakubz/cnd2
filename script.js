window.onload = function() {
    var iframe = document.querySelector('.container-right iframe');
    var src = iframe.getAttribute('src');
    iframe.setAttribute('src', src + '?autoplay=1&controls=0&modestbranding=1&rel=0&fs=0&iv_load_policy=3&disablekb=1');
};
