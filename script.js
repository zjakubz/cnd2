/*auto video player*/
window.onload = function() {
    var iframe = document.querySelector('.container-right iframe');
    var src = iframe.getAttribute('src');
    iframe.setAttribute('src', src + '?autoplay=1&controls=0&modestbranding=1&rel=0&fs=0&iv_load_policy=3&disablekb=1');
};
/*drop down nav */
(function () {
  const header = document.querySelector('.header');
  const icon = document.querySelector('.icon-container');
  icon.onclick = function () {
      header.classList.toggle('menu-open');
  }
}());