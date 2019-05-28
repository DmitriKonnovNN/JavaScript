'use strict'
const API_ACCESS_KEY = 'aef6f84300a6a26fc4a6df8a5e435a40';
const URL_TO_GET_IP ='https://api.ipify.org?format=json';
const URL_TO_GET_DATA = 'http://api.ipstack.com/';


async function getIP() {
    let respnonse = await fetch (URL_TO_GET_IP);
    let jsonResponse = await respnonse.json();
    let ip = jsonResponse.ip;

    document.getElementById("IP").innerHTML = ip;
};

async function getData () {
    let dataURL = URL_TO_GET_DATA  + document.getElementById("IP").innerText + '?access_key=' + API_ACCESS_KEY + '&language=en';
    let respnonse = await fetch(dataURL);
    let jsonResponse = await respnonse.json();
    
    const countryName = jsonResponse.country_name;
    const city = jsonResponse.city;
    const continentName = jsonResponse.continent_name;

    document.getElementById("COUNTRY").innerHTML = countryName;
    document.getElementById("CONTINENT").innerHTML = continentName;
    document.getElementById("CITY").innerHTML = city;
        
    

};