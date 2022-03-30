

let map;


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 51.05148738951964, lng: -114.07109595189976 },
  });
  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  map.data.loadGeoJson(
    "https://data.calgary.ca/resource/qndb-27qm.geojson?$limit=50000"
  );

  map.data.loadGeoJson(
    "https://data.calgary.ca/resource/jjqk-9b73.geojson?$limit=50000"
  );
  
}
// show current location google maps
function showCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      var marker = new google.maps.Marker({
        position: pos,
        map: map,
      });
      map.setCenter(pos)  //set center of map to current location
          }); 
  }
}

// create location button
function createLocationButton() {
  var locationButton = document.createElement("button");
  locationButton.innerHTML = "Show Current Location";
  locationButton.addEventListener("click", showCurrentLocation);
  document.body.appendChild(locationButton);
}











//import soda geojson
function importGeoJson() {
  map.data.loadGeoJson(
    "https://data.calgary.ca/resource/qndb-27qm.geojson"
  );
}   //import soda geojson