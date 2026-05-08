$(document).ready(function () {
  $("#hide-btn").click(function () {
    $("#text").hide(500);
  });
  $("#show-btn").click(function () {
    $("#text").show(500);
  });
  $("#toggle-btn").click(function () {
    $("#text").toggle(500);
  });
  $("#color-btn").click(function () {
    $("#text").css("color", "red");
  });
});
