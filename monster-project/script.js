function randnum(max) {
  return Math.round(Math.random() * max)
}

function secret_ssshhhhh(delay) {
  var title = document.getElementById('top');
  title.innerText = "MonsterBook ( ͡° ͜ʖ ͡°)";
  setTimeout(function () {
    var title = document.getElementById('top');
    title.innerText = "MonsterBook";
  }, delay*1000)
}

function undosecret() {
  var title = document.getElementById('top');
  title.innerText = "MonsterBook";
}
