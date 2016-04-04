$( document ).ready(function() {
  $("#boton").click(function(){
      $.ajax("doc.txt")
      .done(function(data) {
          $("#doc").html(data);
      })
      .fail(function() {
          $("#doc").html("error");
      })
    });
  });
