$(document).ready(function(){

var lat;
var long;
var temp;
var weather;
var tempFarhen;
$(".fahrenheit").css("visibility","hidden");
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
     lat = (position.coords.latitude); 
     long = (position.coords.longitude);

     var url="https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+long;
	 $.getJSON(url,function(data1){
		$(".place").html(data1.name+" , "+data1.sys.country);
		$(".longitude").text("Longitude  :  "+long);
		$(".latitude").text("Latitude  :  "+lat);
		temp=data1.main.temp;
		weather=data1.weather[0].main;
		$(".forecast").on("click",function(){
			$(".longitude").html("Temp  : "+temp+" &#8451<br>Pressure  :  "+data1.main.pressure+" Pa <br>Humidity  :  "+data1.main.humidity+"<br>weather : "+data1.weather[0].main);
			$(".latitude").html("Visiblity  :  "+data1.visibility+"<br>Wind Speed  :  "+data1.wind.speed+" Kmph");
			$(".forecast").css("visibility","hidden");
			$(".fahrenheit").css("visibility","visible");
		});
		tempFarhen=Math.round(temp*(9/5)+32);
		$(".fahrenheit").on("click",function(){

			$(".longitude").html("Temp  : "+tempFarhen+" &#8457<br>Pressure  :  "+data1.main.pressure+" Pa <br>Humidity  :  "+data1.main.humidity+"<br>weather : "+data1.weather[0].main);
			$(".forecast").css("visibility","visible");
			$(".forecast").text("Convert in Celsius");
			$(".fahrenheit").css("visibility","hidden");
			
		});

		switch(weather){
			case 'Haze':$("body").css('background','url(http://allswalls.com/images/fog-in-the-forest-wallpaper-1.jpg)');
			break;

			case 'Clear':$("body").css('background','url(https://wallpaperscraft.com/image/summer_river_nature_grass_84576_3840x2160.jpg)');
			break;

			case 'Rain' :$("body").css('background','url(http://avante.biz/wp-content/uploads/Rainy-Images-Wallpapers/Rainy-Images-Wallpapers-064.jpg)');
			break;

			case 'Mist' :
			case 'Clouds' :$("body").css('background','url(https://wallpaperscraft.com/image/height_mountains_slopes_pasture_cloudy_sky_storm_clouds_sheep_bad_weather_green_53263_1920x1200.jpg)');
			break;

			default :$("body").css('background','url(http://allswalls.com/images/fog-in-the-forest-wallpaper-1.jpg)');
			break;
		}
		if(temp<2){
			
			$("body").css('background','url(https://wallpapers.walldevil.com/wallpapers/a52/preview/snow-wallpaper-scene-nature-weather-scenery-albums.jpg)');
		}
		
	});

  });

}

});