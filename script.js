let weather = {
	"apiKey": "70ecae721d13fc8c2029df887fdf5f4a",
	fetchWeather : function(place){
		fetch(
			"https://api.openweathermap.org/data/2.5/weather?q=" 
			+ place
			+ "&units=metric&appid=" 
			+ this.apiKey
			)
		.then((response) => response.json())
		.then((data) =>this.displayWeather(data));
	},
	displayWeather: function(data){
		const { name } = data;
		const { icon, description } = data.weather[0];
		const { temp, humidity } = data.main;
		const { speed } = data.wind;
		document.querySelector(".place").innerText = "Weather in " + name;
		document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"; 
		document.querySelector(".desc").innerText = description;
    	document.querySelector(".temperature").innerText = temp + "°C";
    	document.querySelector(".hum").innerText =
      	"Humidity: " + humidity + "%";
    	document.querySelector(".air").innerText =
      	"Wind speed: " + speed + " km/h";
      	document.querySelector(".climate").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
	},
	search: function(){
		this.fetchWeather(document.querySelector(".type-here").value);
	},
};

document.querySelector(".searchButton").addEventListener("click", function (){
	weather.search();
});

document.querySelector(".type-here").addEventListener("keyup", function (event){
	if(event.key=="Enter"){
		weather.search();
	}
	});

weather.fetchWeather("New York");