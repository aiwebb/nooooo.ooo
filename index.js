var MAX_GIF = 16
var index   = Math.floor(Math.random() * (MAX_GIF + 1))
var path    = 'gifs/' + index + '.gif'
document.querySelector("#background").style.backgroundImage = 'url(' + path + ')';
