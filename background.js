/**
 * background.js
 *
 * Pulled from Dr. Crenshaw's "Librarians" example
 *
 * The background script defines what the Chrome Packaged App should
 * do when the app is launched:
 **/

/**
 * onLaunched()
 *
 * This event is fired when the user starts the app.  It immediately
 * opens a window for the app of the specified width and height.
 *
 */
chrome.app.runtime.onLaunched.addListener(function() {

	// Create the window
	chrome.app.window.create('window.html', {
		'bounds' : {
		    'width' : 840,
			'height' : 500
			}
	    });   

    });