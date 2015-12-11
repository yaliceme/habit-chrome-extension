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


// chrome.storage.sync.set({'habit': habit, 'consecutiveDays': consecutiveDays, 'lastCheckin': lastCheckin});


// var habit = document.getElementById("habit").value;
// var consecutiveDays = document.getElementById("consecutiveDays").value;
// var lastCheckin = document.getElementById("lastCheckin").value;
