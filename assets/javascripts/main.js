var habit = document.getElementById("habit").value;
var consecutiveDays = document.getElementById("consecutiveDays").value;
var lastCheckin = document.getElementById("lastCheckin").value;


chrome.storage.sync.set({'habit': habit, 'consecutiveDays': consecutiveDays, 'lastCheckin': lastCheckin});