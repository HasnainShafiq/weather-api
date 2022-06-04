const APIKey = YOUR_API_KEY;
let button = document.querySelector('button');


// define async function which calls Unsplash API and changes 'main' element background.
async function bodyBg (url) {
// create img element which will have the Unsplash image as its src.
    let img = document.createElement('img');
    let main = document.querySelector('main');
// attribution to image author.
    let attr = document.querySelector('.attribution');
// create anchor tag to link to image author's Unsplash page.
    let userProfile = document.createElement('a');

// fetch url which will get appropriate photo based on key word contained within request parameter.
    const response = await fetch(url);
// if fetch response unsuccesful, throw an Error
    if (!response.ok) {
        throw new Error (response.statusText)
    }
// once promise is resolved, return it as json.
    const data = await response.json();
    console.log(data);

// set img src and alt from json object.
    img.src = data.urls.regular;
    img.alt = data.alt_description;

// set href url to image author Unsplash page & innerText to image author's name.
    userProfile.href = data.user.links.html;
    userProfile.innerText = data.user.name;
    attr.innerHTML = `By <a href = ${userProfile.href}>${userProfile.innerText}</a> on <a href='https://unsplash.com/'>Unsplash</a>`;

// set background based on img src with relevant styling.
    main.style.backgroundImage = `url(${img.src})`;
    main.style.backgroundRepeat = 'no-repeat';
    main.style.backgroundSize = 'cover';
    main.style.backgroundClip = 'content-box'; 
    main.style.backgroundOrigin = 'content-box;'
}

// define async function to fetch weather data from Weather API.
async function fetchWeather () {

    const clientID = YOUR_CLIENT_ID;

// select h1 (name of city) 
    let h1 = document.querySelector('h1');

// select country
    let country = document.querySelector('#country');

// select time
    let dateTime = document.querySelector('#time');

// select temperature
    let temp = document.querySelector('.temp');

// select h4 to display condition
    let conditionText = document.querySelector('#condition')

// select input element
    let input = document.getElementById('input');

// select img element
    let imgs = document.getElementsByTagName('img');

// set inputName to value of user input.
    let inputName = input.value;

// city = request paramater equal to city name which is input by user.
    let city = inputName;

// select the Fahrenheit/Celsius radio buttons.
    let tempValue = document.getElementsByClassName('radio');

// condition set by API data.
    let condition = ''

// returns true/false based on whether Fahrenheit radio button checked or not. 
    let fahrenheit = tempValue[0].checked;

// Weather API returns date in American format. Create a dateVar which we'll use to change date format.
    let dateVar = '';

// date = {day}/{month}/{year} 
    let date = '';
    let year = '';
    let month = '';
    let day = '';

// time set by API data
    let time = '';

// fetch weather data with API key & city name as request paramaters.
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=no`)
        if (!response.ok) {
            throw new Error (response.statusText)
        }
// once promise is resolved, return the promise data in json format.
    const data =  await response.json();
    console.log(data);

// sets weather condition based on data from json object. Displays weather condition, city name, and country name in HTML.
    condition = data.current.condition.text;
    h1.innerText = data.location.name;
    country.innerText = data.location.country;
    conditionText.innerText = condition;

// use dateVar to store date and time info which we'll use to create substrings and change the order of date information.
    dateVar = data.location.localtime;

// create substrings of just date information.
    date = dateVar.substring(0, 10);
    year = date.substring(0, 4);
    month = date.substring(5, 7);
    day = date.substring(8, 10);

// create time substring
    time = dateVar.substring(11, 16);

// set date and time information based on British date format.
    dateTime.innerText = `${day}/${month}/${year} ${time}`;
    
// if-statement checks if fahrenheit radio button is checked. If true, return temperature in fahrenheit, otherwise celsius.
    if (fahrenheit === true) {
        temp.innerText = parseInt(data.current.temp_f) + `\u00B0` + 'F';
    } else {
        temp.innerText = parseInt(data.current.temp_c) + `\u00B0` + 'C';
    }

// set img as small icon representing weather condition.
    for (img of imgs) {
        img.src = src = data.current.condition.icon;
    } 
    

// call the bodyBg function with request paramater of ${condition} to return a background image resembling similar conditions as in city which is searched for. 
    await bodyBg(`https://api.unsplash.com/photos/random?query=${condition}&client_id=${clientID}`);
}

button.addEventListener('click', (e) => {
// button is within form, so prevent form relocating to another url using e.preventDefault();
    e.preventDefault();
// call fetchWeather on click, which also calls bodyBg(url).
    fetchWeather();
});
