$(document).ready(function() {
  $('#get_color').click(function(e) {
    e.preventDefault();

    $.post('/color', function(response){
      console.log(response)
      console.log(response['cell']);
      var cell = response['cell']
      var color = response['color']
      $('#color_me li:nth-child(' + cell + ')').css('background-color', color) 
    });    
  });
});
