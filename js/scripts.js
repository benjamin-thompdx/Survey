// Back-end logic


// Front-end logic
$(document).ready(function () {
  $("form#favorite-animal").submit(function (event) {
    event.preventDefault();
    var favorite-animal = $("#favorite-animal").val();
    $("form.radio").submit(function (event) {
      event.preventDefault();
      var genre = $("input:radio[name=genre]:checked").val();
    });
  });
