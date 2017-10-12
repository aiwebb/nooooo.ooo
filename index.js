var MAX_GIF = 16
var index   = Math.floor(Math.random() * (MAX_GIF + 1))
var path    = 'gifs/' + index + '.gif'
$('#background').css({backgroundImage: 'url(' + path + ')'})