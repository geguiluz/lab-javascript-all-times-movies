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

// turnHoursToMinutes (movies);


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
