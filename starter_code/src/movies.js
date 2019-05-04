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
  // console.log("Raw duration:", durationString);
  // console.log("String W/O spaces",durationString.replace(/ /g,''));
  // console.log("String separated",durationString.split(" ", 3));
  timeArray = durationString.split(" ", 3);
  // console.log(timeArray);
  hours = timeArray[0].replace('h','');
  minutes = timeArray[1].replace('min','');
  totalTime = hours * 60 + parseInt(minutes);
  console.log(totalTime);
  return totalTime;
}

let turnHoursToMinutes = movieArray => movieArray.map(elem => {
  // checkValidArray(movieArray);
  minuteConverter(elem.duration);
});


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
