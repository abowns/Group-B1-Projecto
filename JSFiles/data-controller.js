/**
 * data-controller.js
 *
 * Defines the applications functionality for fetching and transforming
 * data from the New York Times api.
 *
 *
 */

// Extend the namespace
var librs = librs || {};
librs.data = {};

// The intention of this approach is to be framework-agnostic
// and to avoid namespace pollution by encapsulating the contents of 
// this module in a function:
librs.data = function() {

    var apikey = librs.apikey.get();

    // ************************************************************************
    // Methods local to this module.
    // ************************************************************************

    /** 
     * makeHttpObject()
     * 
     * Based on the example offered in Chapter 14 of Eloquent
     * JavaScript by Marjin Haverbeke, this function is a browser
     * agnostic and framework agnostic wrapper for creating an http
     * object in JavaScript.
     *
     */
    var makeHttpObject = function() {
	try {return new XMLHttpRequest();}
	catch (error) {}
	try {return new ActiveXObject("Msxml2.XMLHTTP");}
	catch (error) {}
	try {return new ActiveXObject("Microsoft.XMLHTTP");}
	catch (error) {}
	
	throw new Error("Could not create HTTP request object.");
    };

    // ************************************************************************
    // Methods provided by this module, visible via the namespace.
    // ************************************************************************

    /** 
     * request()
     *
     * Based on the example offered in Chapter 14 of Eloquent JavaScript by
     * Marjin Haverbeke, this function leverages the makeHttpObject call
     * to make an http request.
     *
     */
    librs.data.request = function() {

	// Make a new request.
        var r = makeHttpObject();
	// var r = new XMLHttpRequest;
	if (r) {

	    var apikey = librs.apikey.get();
	    var url = "http://api.nytimes.com/svc/events/v2/listings.json?query=computer&api-key="+apikey;
	    // Construct the details of the credentialed request and send it.
	    r.open("GET", url, true);

	    // Alter the onreadystatchange property of the object to a
	    // function that will be called every time the state changes.
	    // If the state is '4' -- the document has been fully loaded.
	    r.onreadystatechange = function(evtXHR) {
		if (r.readyState == 4){
		    if (r.status == 200) {
			
			// Convert the string response into JSON
			// format.
			var j = JSON.parse(r.responseText);
			
			console.log(j);

			list = {};
			
			// Create a list of events and names.
			for(var i = 0; i < j["num_results"]; i++) {
			        
			    list[i] = {};

			    // Extract the event name and url from the
			    // JSON object received from the server.
			    list[i].name = j.results[i]["event_name"];
			    list[i].url = j.results[i]["event_detail_url"];
			}

			// List the events on the UI.
			librs.ui.listEvents(list, j["num_results"]);

			// Send a message to the map.
			var message = {
			    command: 'render'
			}
			
			document.getElementById('map').contentWindow.postMessage(message, '*');


		    }
		}
	    }
	    r.send();
	}
    };

    
}; // end lbrs.data-ctrl module

// Invoke module.
librs.data();