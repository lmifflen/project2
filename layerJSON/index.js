let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 51.05148738951964, lng: -114.07109595189976 },
  });
  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  map.data.loadGeoJson(
    "https://data.calgary.ca/resource/qndb-27qm.geojson"
  );

  map.data.loadGeoJson(
    "https://data.calgary.ca/resource/jjqk-9b73.geojson"
  );
  
}

