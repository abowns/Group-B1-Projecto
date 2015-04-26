/**
*	viewController.js
*	
* 	This file is used by map.html. It provides map.html with icons representing each
* 	different resort. 
*
**/
    //load google maps API
    function loadScript() {
    var key = "AIzaSyDYSTO3iSnVmPyyo1Nvu0rjyFrI2Q-yyeM"
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + key + "&callback=initialize";
    document.body.appendChild(script);
}

// Create a map zoomed out to capture the entire world
function initialize() {
        var mapOptions = {
            center: {
                lat: 45.5200,
                lng: -70.6819
            },
            zoom: 2
        };
        
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        setMarkers(map, mountains);
    }//initialize()

//store the different mountains, their coordinates and a z value (used for overlapping icons)
//[mtn name, N coordinate, W coordinate, z value]
var mountains = [
    ['Vail, CO', 39.6358, -106.3631, 1],
    ['Breckenridge, CO', 39.4996, -106.0433, 2],
    ['Mt-Hood, OR', 45.3289, -121.6625, 3],
    ['Mt-Baker, WA', 48.8620, -121.6540, 4],
    ['Whistler-Blackcomb, BC', 50.1083, -122.9425, 5],
    ["Alpe d'Huez, France", 45.0603, 6.0714, 6],
    ['Heavenly, CA', 38.9353, -119.9400, 7],
    ['Whakapapa, New Zealand', -40.8167, 175.55, 8],
    ['Killington, VT', 43.6647, -72.7933, 9],
    ['Klosters, Switzerland', 46.8833, 9.883, 10],
    ['Geilo, Norway', 60.5167, 8.2000, 11],
    ['Alta, UT', 40.5808, -111.6372, 12],
    ['Alyeska, AK', 60.9705, -149.0982, 13], 
    ['Valle Nevado, Chile', -33.3547, -70.2498, 14],
    ['Las Lenas, Argentina', -35.1500, -70.0833, 15],
    ['Laax, Switzerland', 46.8000, 9.2500, 16]
];

// adds markers to the map
function setMarkers(map, locations) {
    //upload a custom (snowflake) map icon
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var image = {
        url: iconBase + 'snowflake_simple.png',
        size: new google.maps.Size(64, 64),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 64)
    };
	
	//shape defines what region will be clickable
	//polygon is 54x54 pixels 
    var shape = {
        cords: [1, 1, 1, 55, 55, 55, 55, 1],
        type: 'poly'
    };

	//add a new icon for each mountain and it's coordinates listed
    for (var i = 0; i < locations.length; i++) {
        var mtn = locations[i];
        var myLatLng = new google.maps.LatLng(mtn[1], mtn[2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image,
            shape: shape,
            clickable: true,
            title: mtn[0],
            zIndex: mtn[3]
        });
    }
}

window.onload = loadScript;
