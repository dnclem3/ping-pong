$(document).ready(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    var input = $("#entry").val();
    for (i = 1; input > i - 1; i++) {
      if (i % 15 == 0) {
        $("#output").append("<li>pingpong</li>");
      }
      else if (i % 3 == 0) {
        $("#output").append("<li>ping</li>");
      }
      else if (i % 5 == 0) {
        $("#output").append("<li>pong</li>");
      }
      else {
        $("#output").append("<li>" + i + "</li>");
      }
    };
  });
});
