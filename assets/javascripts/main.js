// Initialize
var data = {}
var habit = ''
var consecutiveDays = ''
var lastCheckin = ''

chrome.storage.sync.get(null, function(response){
  data = response
  habit = data.habit;
  consecutiveDays = data.consecutiveDays;
  lastCheckin = data.lastCheckin;

  // Set the value of the inputs to the data from storage
  document.getElementById("habit").value = habit;
});

// set event listeners
// When the "value" property of habit changes


// Event handler for habit changes
var saveHabit = function(response){
  alert(response);
}

var updateAndSaveData = function(){
  // Update the values of our data models to the new value
  habit = document.getElementById("habit").value;
  consecutiveDays = document.getElementById("consecutiveDays").value;
  lastCheckin = document.getElementById("lastCheckin").value;


  // Save the data to storage
  chrome.storage.sync.set({'habit': habit, 'consecutiveDays': consecutiveDays, 'lastCheckin': lastCheckin});
}
