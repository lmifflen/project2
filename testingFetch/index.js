// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
import fetch from 'node-fetch'

const api_url = 
      "https://data.calgary.ca/resource/qndb-27qm.geojson?$$app_token=HatApPAlpadAM1CSMeork4GH6";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response;
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);

