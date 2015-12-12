// Initialize
var data = {};
var habit = '';
var consecutiveDays = '';
var lastCheckin = '';

chrome.storage.sync.get(null, function(response){
  data = response;
  habit = data.habit;
  consecutiveDays = data.consecutiveDays;
  lastCheckin = data.lastCheckin;

  if (habit === undefined) {
    habit = "Do one pushup";
  }
  if (consecutiveDays === undefined) {
    consecutiveDays = '0';
  }
  if (lastCheckin === undefined) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    lastCheckin = String(mm) + "/" + String(dd) + "/" + String(yyyy);
  }
  document.getElementById("habit").value = habit;
  document.getElementById("consecutiveDays").value = consecutiveDays;
  document.getElementById("lastCheckin").value = lastCheckin;
});

// event handlers for input changes
var saveHabit = function(event){
  console.log(event);
  chrome.storage.sync.set({"habit": event.target.value});
};

var saveConsecutiveDays = function(event){
  console.log(event);
  chrome.storage.sync.set({"consecutiveDays": event.target.value});
};

var saveLastCheckin = function(event){
  console.log(event);
  chrome.storage.sync.set({"lastCheckin": event.target.value});
};

// event listeners for when the "value" properties of the form inputs change
document.getElementById("habit").addEventListener("change", saveHabit); 
document.getElementById("consecutiveDays").addEventListener("change", saveConsecutiveDays); 
document.getElementById("lastCheckin").addEventListener("change", saveLastCheckin);