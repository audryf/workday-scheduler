// Variables
var task8 = document.getElementById("8am");
var task9 = document.getElementById("9am");
var task10 = document.getElementById("10am");
var task11 = document.getElementById("11am");
var task12 = document.getElementById("12pm");
var task13 = document.getElementById("1pm");
var task14 = document.getElementById("2pm");
var task15 = document.getElementById("3pm");
var task16 = document.getElementById("4pm");
var task17 = document.getElementById("5pm");

// Save the strigified objects in localStorage
// 8 AM
document.getElementById("save8").addEventListener("click", function() {
	var savedTasks = localStorage.setItem("8 AM", JSON.stringify(task8.value));
	console.log(savedTasks);
})

// 9 AM
document.getElementById("save9").addEventListener("click", function() {
	var savedTasks = localStorage.setItem("9 AM", JSON.stringify(task9.value));
	console.log(savedTasks);
})

// 10 AM
document.getElementById("save10").addEventListener("click", function() {
	var savedTasks = localStorage.setItem("10 AM", JSON.stringify(task10.value));
	console.log(savedTasks);
})

// 11 AM
document.getElementById("save11").addEventListener("click", function() {
	var savedTasks = localStorage.setItem("11 AM", JSON.stringify(task11.value));
	console.log(savedTasks);
})

// 12 PM
document.getElementById("save12").addEventListener("click", function() {
	var savedTasks = localStorage.setItem("12 PM", JSON.stringify(task12.value));
	console.log(savedTasks);
})

// 1 PM
document.getElementById("save13").addEventListener("click", function() {
	var savedTasks = localStorage.setItem("1 PM", JSON.stringify(task13.value));
	console.log(savedTasks);
})

// 2 PM
document.getElementById("save14").addEventListener("click", function() {
	var savedTasks = localStorage.setItem("2 PM", JSON.stringify(task14.value));
	console.log(savedTasks);
})

// 3 PM
document.getElementById("save15").addEventListener("click", function() {
	var savedTasks = localStorage.setItem("3 PM", JSON.stringify(task15.value));
	console.log(savedTasks);
})

// 4 PM
document.getElementById("save16").addEventListener("click", function() {
	var savedTasks = localStorage.setItem("4 PM", JSON.stringify(task16.value));
	console.log(savedTasks);
})

// 5 PM
document.getElementById("save17").addEventListener("click", function() {
	var savedTasks = localStorage.setItem("5 PM", JSON.stringify(task17.value));
	console.log(savedTasks);
})

// Display current day on page
$("#currentDay").text(moment().format("dddd, MMM Do, YYYY"));



// Parse saved strings back to objects and load saved values onto page on refresh

// Get current number of hours (Recheck every 60 seconds)
var now = moment().hour();
console.log(now);

// check each hour to see if it is past
// for (var i = 0; workdayTasks.length; i++) {
// 	if (workdayTasks.hour[i] > now) {
// 		document.querySelector(".input group").classList("past");
// 	}
// }

        // if yes, add color code for past 

    // check each hour to see if it is present

        // if yes, add color code for present

		// check each hour to see if it is future

				// if yes, add color code for future



// Reset on new day