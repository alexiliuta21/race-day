let raceNumber = Math.floor(Math.random() * 1000);

var registeredEarly = false;
var runnerAge = 18;

if (registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
};

if (runnerAge > 18 && registeredEarly) {
  console.log(`The race number ${raceNumber} will start at 9:30 am.`);
} else {
  if (runnerAge >18 && !registeredEarly) {
    console.log(`The race number ${raceNumber} will start at 11:00 am.`);
  } else {
    if (runnerAge < 18 ) {
         console.log(`The race number ${raceNumber} will start at 12:30 pm.`); 
        } else {
          if (runnerAge = 18) {
          console.log('Please see the registration desk!');
          }
        }
  }
}  
