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
    var title = document.getElementById("title");
    var subtitle = document.getElementById("subtitle");
    var linkslabel = document.getElementById("linkslabel");
    var colormodeimg = document.getElementById("colormodeimg");

    html.setAttribute("style", "background-color: #ffffff"); 
    title.setAttribute("style", "color: #000000");
    subtitle.setAttribute("style", "color: #000000");
    linkslabel.setAttribute("style", "color: #000000");
    colormodeimg.setAttribute("src", "imgs/colormodes-dark.png")
    color = 1
  } else if (color === 1) {
    var html = document.getElementById("html");
    var title = document.getElementById("title");
    var subtitle = document.getElementById("subtitle");
    var linkslabel = document.getElementById("linkslabel");
    var colormodeimg = document.getElementById("colormodeimg");

    html.setAttribute("style", "background-color: #2d2d2d"); 
    title.setAttribute("style", "color: #ffffff");
    subtitle.setAttribute("style", "color: #ffffff");
    linkslabel.setAttribute("style", "color: #ffffff");
    colormodeimg.setAttribute("src", "imgs/colormodes-light.png")
    color = 0
  }
}
