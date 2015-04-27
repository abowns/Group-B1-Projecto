// Include the google charts api and manually bootstrap the angular
// app defined in controller.js once the api has been loaded.
google.load('visualization', '1', {packages: ['line']});
google.setOnLoadCallback(function() {
	angular.bootstrap(document.body, ['snowy']);
    });

var snowy = snowy || {};
snowy.module = {};

snowy.module = function(){






}





      
	    // Create the chart that will be used to animate resort-by-resort information.
	    var chart= new google.charts.Line(document.getElementById('visualization_div'));	  
	    	
	//give some feature options for the line chart
		var screenWidth = window.screen.width; 
		var screenHeight = window.screen.height; 
		  var options = { 
        width: screenWidth/2.1,
        height: screenHeight*.59,
        legend: {position:'none'},
        hAxis: { format: ''},
       vAxis: {title: 'Snowfall (in.)',
        		format: 'decimal'}
      };
 
	    // Make the initial query to get the whole Fusion table.
	    var query = "SELECT Resort, 'Annual Snowfall', Year FROM 1AoZsRLfcNALHsaHrhBxi1ZuqahhlcOCP_P6CYLJL";	    
	    var opts = {sendMethod: 'auto'};
	    var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=');
	       
	    
	    // Define the variables to hold the entire fusion table,
	    // and a collection of views, one for each resort.
	    var data;
	    var views = {};
	   
	    
	    // Send the query and handle the response by creating and
	    // drawing the data for a resort
	    queryObj.setQuery(query);
	    queryObj.send(function(e) { 
		    
		    data = e.getDataTable();
		    
		 	 //   Create a view for resort (column[0]) that takes in the year (column[2]) 
		    // and the snowfall (column[1]) as parameters.
		    var thisResort = resort;
                    views[thisResort] = new google.visualization.DataView(data);
                    views[thisResort].setRows(views[thisResort].getFilteredRows([{column: 0, value: thisResort}]));
		    views[thisResort].setColumns([2,1]);
			
		    // Draw the chart for a single mountain
		    $scope.chart.draw(views[thisResort].toDataTable(), google.charts.Line.convertOptions(options));
		});	

	   
	   // *****************************************************************
	   //	variable reference
	   // *****************************************************************
	   
	    // create a table of the resort names for reference
	    var mtnNames = ["alpe-dhuez", "alta-ski-area", "alyeska-resort", "breckenridge",
	     "davos-klosters", "geilo", "heavenly-mountain-resort", "killington-resort", 
	     "laax", "las-lenas", "mt-baker", "mt-hood-meadows", "vail", "valle-nevado", 
	     "whakapapa", "whistler-blackcomb"];
	     
	    //beginning values help setup what the first graph is
	    var i = 0; 
	    var resort = mtnNames[i];
	    //$scope.rName = mtnNames[i];

	    // ************************************************************************
	    // Controller functions
	    // ************************************************************************


	    // get()
	    //    Get a new chart.
	    var get = function() {

		// If the view of data for the selected resort hasn't been created
		// yet, create it.
		if (views[thisResort] === undefined) {
			
		    var thisResort = $scope.resort;
                    views[thisResort] = new google.visualization.DataView(data);
                    views[thisResort].setRows(views[thisResort].getFilteredRows([{column: 0, value: thisResort}]));
                    views[thisResort].setColumns([2, 1]);
		}
		// Draw the chart for selected year.
		chart.draw(views[thisResort].toDataTable(), google.charts.Line.convertOptions(options));
	    };
		
		//switch()
		//helps select a specific location based on the 
		//selection
		var switch = function() {
		var x = document.getElementById("dropdown").selectedIndex;
		resort = mtnNames[x];
		//$scope.rName = mtnNames[x];
		get(); 
		}
		
		$scope.chosen=["alpe-dhuez", "alta-ski-area", "alyeska-resort", "breckenridge",
	     "davos-klosters", "geilo", "heavenly-mountain-resort", "killington-resort", 
	     "laax", "las-lenas", "mt-baker", "mt-hood-meadows", "vail", "valle-nevado", 
	     "whakapapa", "whistler-blackcomb"];
		
	    // minus():
	    // decrement alphabetically through the resorts
	    var minus = function() {
	  	if (i > 0){
	  	i--;
		resort = mtnNames[i];
		get();
		}
	    };

	    // plus():
	    // increment alphabetically through the resorts
	   var plus = function() {
	    if (i < 15){
	    i++;
		resort = mtnNames[i];
		get();
		}
	    };
	
	   var workName = function(resort) {
	    	reload = false; 
	    			resort = mtnNames[i]; 
	    			get(); 
	    			
	    		}   
	}]);
	
	 // create a table of the resort names for reference 
	    var myNames = ["alpe-dhuez", "alta-ski-area", "alyeska-resort", "breckenridge",
	     "davos-klosters", "geilo", "heavenly-mountain-resort", "killington-resort", 
	     "laax", "las-lenas", "mt-baker", "mt-hood-meadows", "vail", "valle-nevado", 
	     "whakapapa", "whistler-blackcomb"];
	     
	     var reload = false;
	     //change name is called when we click on an icon, referred by view-controller.js
changeName = function(title){
		for (i = 0; i < myNames.length; i++){
    		if (title == myNames[i])
    			{
	    			 
	    			snowy.workName(title); 
	    		}
	    	}
}