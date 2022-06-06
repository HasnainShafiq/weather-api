# WeatherAPI app

## My take on the weather API application.

I took a shot at recreating a common aspiring junior web developer project, namely a weather API application. The project itself is simple enough; it is essentially two fetch API calls, one which calls the WeatherAPI endpoint for retrieving the current forecast for the city the user searches for, and the second which calls the Unsplash API and retrieves a (generally) suitable image which is then set as the background image. The fetch request to the Unsplash API looks like this: `https://api.unsplash.com/photos/random?query=${condition}&client_id=${clientID}` where the value of `condition` is determined by a short description of the weather which is accessed from the WeatherAPI JSON object. Therefore, the image retrieved is usually suitable, although it may sometimes fetch an image which is somewhat out of place.

Although it isn't something to be astounded by, it allowed me to refamiliarise myself with the back end of web development. This is the first back end project I developed since learning the concepts of aysnchronous functions, promises, and fetch.  
