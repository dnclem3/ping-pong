$(document).ready(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    var input = $("#entry").val();
    for (i = 1; input > i; i++) {
      if (i % 15 == 0) {
        $("#output").append("pingpong");
      }
      else if (i % 3 == 0) {
        $("#output").append("ping");
      }
      else if (i % 5 == 0) {
        $("#output").append("pong");
      }
      else {
        $("#output").append(i);
        console.log(i);
      }
    };
  });
});
