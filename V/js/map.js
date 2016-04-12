/*-------------------------------Notes-------------------------------------*/
//------------------------Latitude puis longitude--------------------------*/



var map;
var maPosition;

function setPosition(position) {

	loadJQuery();

	maPosition = {
    latitude: position.coords.latitude,
	longitude: position.coords.longitude
    
  	}

	// create a map in the "map" div, set the view to a given place and zoom
	map = L.map('map').setView([maPosition.latitude,maPosition.longitude], 13);
	map.setView([maPosition.latitude,maPosition.longitude ], 13);
	// add an OpenStreetMap tile layer
	
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);


	// add a marker in the given location, attach some popup content to it and open the popup
	/*L.marker([maPosition.longitude, maPosition.latitude]).addTo(map)
		.bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
		.openPopup(); 
		
	var marker = L.marker([51.5, -0.09]).addTo(map);
	
	var circle = L.circle([51.508, -0.11], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
	}).addTo(map);
	
	var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
	]).addTo(map);

	marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
	circle.bindPopup("I am a circle.");
	polygon.bindPopup("I am a polygon."); */

	var popup = L.popup()
		.setLatLng([maPosition.latitude, maPosition.longitude])
		.setContent("Vous etes ici")
		.openOn(map);
		

	map.on('click', onMapClick);

	var popup = L.popup();

	function onMapClick(e) {
		var nous = L.latLng([maPosition.latitude, maPosition.longitude]);
		 popup
			.setLatLng(e.latlng)
			.setContent(parseInt(e.latlng.distanceTo(nous)).toString() + " mètres de chez vous")//distanceOnClick(e, maPosition)
			.openOn(map);
	}
}

$(function(){
 if(navigator.geolocation){
  //document.write ("yolo");
  navigator.geolocation.getCurrentPosition(setPosition);
	
}
else {
     document.write("tan pi")
}
});

function recentrer(){
	map.setView([maPosition.latitude,maPosition.longitude ], 13);
	L.popup()
		.setLatLng([maPosition.latitude, maPosition.longitude])
		.setContent("Vous etes ici")
		.openOn(map);
}

function centrerSur(latitude, longitude){
  map.setView([latitude, longitude], 13);
}


