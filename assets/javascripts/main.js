var data = {}
var habit = ''
var consecutiveDays = ''
var lastCheckin = ''

chrome.storage.sync.get(null, function(response){
  data = response
  habit = data.habit;
  consecutiveDays = data.consecutiveDays;
  lastCheckin = data.lastCheckin;
});

// When the "value" property of an input changes

  // Update the value of "data"
  habit = document.getElementById("habit").value;
  consecutiveDays = document.getElementById("consecutiveDays").value;
  lastCheckin = document.getElementById("lastCheckin").value;


  // Save "data" to storage
  chrome.storage.sync.set({'habit': habit, 'consecutiveDays': consecutiveDays, 'lastCheckin': lastCheckin});
