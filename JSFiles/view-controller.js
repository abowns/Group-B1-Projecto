var map;
function initialize() {
    
    //map should be centered in on Portland, scaled out to entire world view
    var mapOptions = {
	zoom: 2,
	center: new google.maps.LatLng(45.520, -122.683)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
			      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);