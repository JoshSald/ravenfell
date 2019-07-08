const en = document.getElementById("en-btn");
const de = document.getElementById("de-btn");
const body = document.getElementsById("lang");

en.addEventListener("click", function() {
  document.body.innerHTML = "";
});
de.addEventListener("click", function() {
  console.log("German");
});
