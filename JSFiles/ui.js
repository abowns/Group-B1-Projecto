/*
 * ui.js
 */

// Extend namespaces
var snowy = snowy || {};
snowy.ui = {};

// The intention of this approach is to be framework-agnostic
// and to avoid namespace pollution by encapsulating the contents of 
// this module in a function:
snowy.ui = function() {
    
    // ************************************************************************
    // Methods local to this module.
    // ************************************************************************

    // ************************************************************************
    // Methods provided by this module, visible via the namespace.
    // ************************************************************************
    snowy.ui.listEvents = function(list, num) {

	// Get ready to make a list of unordered elements
	var createUl = document.createElement("UL");
	
	for(var i = 0; i < num; i++) {
	    // Make a clickable link to the name of
	    // the event.  The event name is the text
	    // and the href attribute is the url.
	    // Make sure to make the target blank so
	    // that the page opens in the browser, and
	    // doesn't get blocked by the app window.
	    var createA = document.createElement('a');
	    var createAText = document.createTextNode(list[i].name);
	    createA.setAttribute('href', list[i].url);
	    createA.setAttribute('target', '_blank');
	        
	    // Append the text to the <a> element.
	    createA.appendChild(createAText);
	        
	    // Append the <a> element just created to
	    // an <li> element.  Append the <li> element
	    // to the unordered list.
	    var li = document.createElement("LI");
	    li.appendChild(createA);    
	    createUl.appendChild(li);
	}
      
	// Grab the div where we will list the
	// events.
	var es = document.getElementById("events"); 
	es.appendChild(createUl);
    };

}; // end module                                                 

// Invoke module.                                                               
snowy.ui();