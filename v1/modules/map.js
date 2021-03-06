/** MAP module */
define(["./data", "./mapUtils"], function(data, mapUtils) {	
	var locationData = data.locationData;
	var activityTimeByType = data.activityTimeByType;

	return {    		
		locationMarkers: [],
    	geocode: function (address) {
    		// use geocoder to find longitute/latitude location of current address
    		var geocoder = new google.maps.Geocoder();
    		geocoder.geocode({ 'address': address }, this.render(this));
    	},
        resize: function (panelWidth) {
      		$('#map-canvas').width($(window).width() - panelWidth); // resize map
  		},
  	 	// callback to geocode lookup for lat/long of location
  		render: function (that) {
  			return function (results, status) {
		    	var map;

		    	// upon successful address to lat/long resolution
		    	if (status == google.maps.GeocoderStatus.OK) {  
		    		// trigger event with user's location
		    		$( "body").trigger( "eventUserLocationIdentified", [{ position: results[0].geometry.location }]);    

			      	// basic map options
			      	var mapOptions = {
			        	center: results[0].geometry.location, // center map on resolved geolocation
			          	mapTypeId: google.maps.MapTypeId.ROADMAP  // default map is classic map
			      	}

			      	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

			      	// zoom map to be within radius of circle (zoom based on distance, not present number)
			      	var circle = new google.maps.Circle({radius: 16000, center: results[0].geometry.location}); 
			      	map.fitBounds(circle.getBounds()); 

			      	// draw marker in center of map
			      	var youMarker = new google.maps.Marker({
			          	map: map,
			          	title: 'You\'re Here',
			          	position: results[0].geometry.location,
			          	animation: google.maps.Animation.DROP
			      	});     

			      	var infoWindow = new google.maps.InfoWindow({ content: '---', maxWidth: 500 });

			      	// create location markers on the map for each destination location
					locationData.forEach(function(locationObject) {	      	
						var locationMarker = new google.maps.Marker({
				          	map: map,
				          	title: locationObject.title,
				          	position: new google.maps.LatLng(locationObject.lat, locationObject.lng),
				          	animation: google.maps.Animation.DROP,
				          	icon: mapUtils.markerIconByType(locationObject.type),
				          	activityTime: activityTimeByType[locationObject.type].time,
				          	id: locationObject.id // unique identifier for location
				      	});   

				      	google.maps.event.addListener(locationMarker, 'click', function() {
				        	infoWindow.setContent('');	// clear content from previous use
				        	mapUtils.setMarkerTravelTime(youMarker.getPosition(), locationMarker.getPosition(), infoWindow, locationMarker);

				        	infoWindow.setContent('<div class="location-info-title" data-locationid="' + locationMarker.get('id') + '">' + locationMarker.get('title') + '</div>' + infoWindow.getContent());
				        	infoWindow.setPosition(locationMarker.getPosition());
				        	infoWindow.open(map, locationMarker);
				      	});   

				      	// collect all location markers into a single hash table (array) with id as index
				      	that.locationMarkers[locationMarker.get('id')] = locationMarker;
				    });

				    // add listener for ADD button
				    $('body').on('click', '.location-info-add-button', that.addButtonClicked(that));

			      	google.maps.event.addListener(youMarker, 'click', function() {
				        infoWindow.setContent('You are here');
				        infoWindow.setPosition(youMarker.getPosition());
			        	infoWindow.open(map, youMarker);
					});       
			    }
			};
		},
		// callback when teh ADD button in infoWindow is clicked
		addButtonClicked: function (that) {
			return function (e) {
				var locationId = $(this).prevAll('.location-info-title').data('locationid');
				var locationMarker = that.locationMarkers[locationId];
			   	$( "body").trigger( "eventAddButtonClicked", [{ 
			   		id: locationMarker.get('id'), 
			   		title: locationMarker.get('title'),
			   		duration: locationMarker.get('duration'),
			   		distance: locationMarker.get('distance'),
			   		position: locationMarker.getPosition(),	// geolocation of location
			   		activityTime: locationMarker.get('activityTime')
			   	}]);
			};
		}
    }
});