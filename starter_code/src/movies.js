//Check valid arrays 
function checkValidArray (array) {
  if (array === undefined) {
    // console.log("El arreglo es incorrecto");
    return false;
  } else if (array.length === 0) {
    // console.log("El arreglo está vacío");
    return false;
  } else {
    // console.log("El arreglo es correcto");
    return true;
  }
 }

/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

let minuteConverter = durationString => {
  // First, let's check if we even have a valid string 
  durationString = ''+ durationString;
  if (durationString !== '' || durationString !== undefined){
    // console.log('Raw duration:', durationString);
    //Removing all spaces from string
    durationString = durationString.replace(/ /g,'');
    // Check if durationString's format is readable'
    let expHours = /[h]/;
    let expMinutes = /[min]/;
    let flagHours = expHours.test(durationString);
    let flagMinutes = expMinutes.test(durationString);
    if (flagHours === true && flagMinutes === true){
      // durationString contains both hours and minutes
      // console.log("La cadena contiene horas y minutos");
      timeArray = durationString.split('h', 3);
      // console.log(timeArray);
      hours = timeArray[0].replace('h','');
      minutes = timeArray[1].replace('min','');
      totalTime = hours * 60 + parseInt(minutes);
      // console.log(totalTime);
      return totalTime;
    }
    else if (flagMinutes === true){
      //Try to catch if durationString contains only minutes
      // console.log("La cadena contiene sólo minutos");
      timeArray = durationString.split("min", 1);
      // console.log(timeArray); 
      minutes = timeArray[0];
      totalTime = parseInt(minutes);
      // console.log(totalTime);
      return totalTime;
      //Try to catch if durationString contains only hours
      //Return false if durationString is unparseable
    } else if (flagHours === true){
      // console.log("La cadena contiene sólo horas");
      timeArray = durationString.split("h", 1);
      // console.log(timeArray); 
      minutes = timeArray[0]*60;
      totalTime = parseInt(minutes);
      // console.log(totalTime);
      return totalTime;
    }

  } else{
    console.log("durationString inválida");
    return 0;
  }
  
}

// turnHoursToMinutes(movies);

let turnHoursToMinutes = movieArray => movieArray.map(elem => {
  if (checkValidArray(movieArray)){
    // console.log("Vamos a ejecutar minuteConverter con: ",elem.duration);
    result = minuteConverter(elem.duration);
    this.duration = isNaN(result) ? 0 : result;
    // console.log('El nuevo valor de duration es:', this.duration);
    return this;
  } else{
    return false;
  }
});

// Get the average of all rates with 2 decimals 
let ratesAverage = movieArray => {
  if (checkValidArray(movieArray)){
    result = parseInt(movieArray.reduce((total, elem) => ({rate: total.rate + elem.rate})).rate, 10)/movieArray.length;
    // console.log(movieArray.reduce((total, elem) => ({rate: total.rate + elem.rate})).rate);
    // return isNaN(result) ? 0 : result;
    return parseFloat(result.toFixed(2));
  } else{
    return undefined;
  }
}

// Get the average of Drama Movies
let dramaMoviesRate = movieArray => {
  if (checkValidArray(movieArray)){
    //Filter array for drama movies only
    let filterArray = movieArray.filter((element) => {
      return element.genre.filter((itm) => itm === 'Drama').length > 0;
    });
    //Calculate average rate using ratesAverage 
    return ratesAverage(filterArray);
  } else{
    return false;
  }
}

// Order the movies by duration - orderByDuration

let orderByDuration = movieArray => {
  if (checkValidArray(movieArray)){
    // Turn all durations to minutes
    turnHoursToMinutes(movieArray);
    // Sort array by duration
    return orderArray = movieArray.sort((previous,current) => {
      compareVariable = previous.duration - current.duration;
      if(compareVariable != 0){
        return compareVariable;
      } else {
        //Duration values are equal. Try sorting by name
        if(current.title > previous.title){
          return -1;
        } else {
          return 1;
        }
      }
    });
  } else{
    return false;
  }
}

// Get how many movies - howManyMovies

let howManyMovies = movieArray => {
  if (checkValidArray(movieArray)){
    let filterArray = movieArray.filter((element) => {
      return element.genre.filter((itm) => itm === 'Drama').length > 0 && element.director === 'Steven Spielberg';
    });
    // console.log("El Arreglo es", filterArray);
    // console.log (filterArray.length);
    return 'Steven Spielberg directed ' + filterArray.length + ' drama movies!';
  } else{
    return undefined;
  }
}

//Order alphabetically - orderAlphabetically

let orderAlphabetically = movieArray => {
  if (movieArray.length === 0){
    return [];
  }
  let stringArray = [];
  if (checkValidArray(movieArray)){
    stringArray = movieArray.map((itm) => itm.title);
    console.log(stringArray);
    stringArray.sort()
    // Regresar únicamente los primeros 20 elementos de stringArray
    stringArray = stringArray.slice(0,20)
    return stringArray;
    // console.log(stringArray);
  } else{
    return undefined;
  }
  return stringArray;
}

