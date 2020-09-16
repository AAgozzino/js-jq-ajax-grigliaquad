$(document).ready(function(){
// Generare 36 cell in container
var cellNumber = 36;

var source = $("#cell-template").html();
var template = Handlebars.compile(source);
for (var i = 0; i < cellNumber; i++) {
  // var context = {
  //   "number" : i,
  // }
  var html = template(i);
  $(".container").append(html);
}
});
