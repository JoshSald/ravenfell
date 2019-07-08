var handlerFired;
window.addEventListener("scroll", function(e) {
  var containerBot = document.querySelector("#div1").getBoundingClientRect()
    .bottom;
  if (containerBot <= window.innerHeight) {
    if (!handlerFired) {
      handlerFired = 1;
      quote(0);
      slideshow();
    }
    if (containerBot > window.innerHeight) {
      handlerFired = 0;
    }
  }
});
