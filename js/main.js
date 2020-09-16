$(document).ready(function(){
  // Generare 36 cell in container
  var cellNumber = 36;

  var source = $("#cell-template").html();
  var template = Handlebars.compile(source);
  for (var i = 0; i < cellNumber; i++) {
    var html = template(i);
    $(".container").append(html);
  };

  $(".container").on("click", ".cell",
    function(){
      var cell = $(this);
      $.ajax(
        {
          url: "https://flynn.boolean.careers/exercises/api/random/int",
          method: "GET",
          success: function (data, stato) {
            // console.log(data.response);
            lessFive(cell, data.response)
          },
          error: function (richiesta, stato, errori) {
            alert("E' avvenuto un errore. " + errore);
          }
        }
      );
    }
  );
});

function lessFive(place, number) {
  place.html(number)
  if (number <= 5) {
    place.addClass("yellow");
  } else {
    place.addClass("green");
  }
};
