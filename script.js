function search() {
  window.open("search/index.html")
}
function honeycrisp() {
  window.open("honeycrisp/index.html")
}
function datapacks() {
  window.open("datapacks/index.html")
}

var color = 0
function colormode() {
  if (color === 0) {
    var html = document.getElementById("html");
    html.setAttribute("style", "background-color: #ffffff"); 
    color = 1
  } else if (color === 1) {
    var html = document.getElementById("html");
    html.setAttribute("style", "background-color: #2d2d2d");
    color = 0
  }
}
