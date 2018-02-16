$("#btn").click(function(){ 
var city = $("#city").val();
 $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',us&units=imperial&APPID=710d968a9a3a8f2c6da4dc4dfa8ec87b', 
  function(data) {
    console.log(data);
  var temp = data["main"]["temp"];
  var humidity = data["main"]["humidity"];
  var speed = data["wind"]["speed"];
  var description = data["weather"][0]["description"];
  $("#city").html(city);
  $("#temp").html(temp);
  $("#humidity").html(humidity);
  $("#speed").html(speed);
  $("#description").html(description);
  
  })

})