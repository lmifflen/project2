import fetch from 'node-fetch';

// api url
const api_url = 
      "https://data.calgary.ca/resource/qndb-27qm.geojson";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);