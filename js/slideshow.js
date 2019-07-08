// ================
// Quote Slideshow
// ================
var quotes = document.querySelectorAll(".quote"),
  slideBg = document.querySelectorAll(".quote-img"),
  slideBtn = document.querySelectorAll(".selector"),
  headline = document.querySelector("#quote-head");

// =======================
// Mobile Cards Slideshow
// =======================
var card = document.querySelectorAll(".card");
var match = window.matchMedia("(max-width: 1024px)");
match.onchange = runShow;

// =======
// Quotes
// =======

//   --------------reset-----------------
function reset() {
  quotes.forEach(elem => elem.classList.remove("show"));
  slideBg.forEach(elem => elem.classList.remove("show"));
  slideBtn.forEach(elem => elem.classList.remove("active"));
  headline.classList.add("centralize");
}

// ----------------Buttons---------------
function quote(index) {
  reset();
  quotes[index].classList.add("show");
  slideBg[index].classList.add("show");
  slideBtn[index].classList.add("active");
  headline.classList.remove("centralize");
}

//-----------------Slideshow--------------

function slideshow() {
  var i = 1;

  function loop() {
    setTimeout(function() {
      quote(i);
      i++;
      if (i < quotes.length) {
        loop();
      } else if (i == quotes.length) {
        i = 0;
        loop();
      }
    }, 4000);
  }
  loop();
}

// init
quote();

// ============
// Mobile Cards
// =============

function resetCards() {
  card.forEach(elem => elem.classList.remove("show"));
}
function showCards(index) {
  resetCards();
  card[index].classList.add("show");
}
function cardSlide() {
  var i = 1;

  function loop() {
    setTimeout(function() {
      showCards(i);
      i++;
      if (i < card.length) {
        loop();
      } else if (i == card.length) {
        i = 0;
        loop();
      }
    }, 4000);
  }
  loop();
}

function runShow(e) {
  var i = document.getElementById("cards");
  if (e.matches) {
    cardSlide();
  }
}

runShow(match);
