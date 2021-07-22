// Variables
var task8 = document.getElementById("8");
var task9 = document.getElementById("9");
var task10 = document.getElementById("10");
var task11 = document.getElementById("11");
var task12 = document.getElementById("12");
var task13 = document.getElementById("13");
var task14 = document.getElementById("14");
var task15 = document.getElementById("15");
var task16 = document.getElementById("16");
var task17 = document.getElementById("17");



// Save the strigified objects in localStorage
// 8 AM
document.getElementById("save8").addEventListener("click", function () {
	var savedTasks = localStorage.setItem("8 AM", JSON.stringify(task8.value));
	console.log(savedTasks);
})


// 9 AM
document.getElementById("save9").addEventListener("click", function () {
	var savedTasks = localStorage.setItem("9 AM", JSON.stringify(task9.value));
	console.log(savedTasks);
})

// 10 AM
document.getElementById("save10").addEventListener("click", function () {
	var savedTasks = localStorage.setItem("10 AM", JSON.stringify(task10.value));
	console.log(savedTasks);
})

// 11 AM
document.getElementById("save11").addEventListener("click", function () {
	var savedTasks = localStorage.setItem("11 AM", JSON.stringify(task11.value));
	console.log(savedTasks);
})

// 12 PM
document.getElementById("save12").addEventListener("click", function () {
	var savedTasks = localStorage.setItem("12 PM", JSON.stringify(task12.value));
	console.log(savedTasks);
})

// 1 PM
document.getElementById("save13").addEventListener("click", function () {
	var savedTasks = localStorage.setItem("1 PM", JSON.stringify(task13.value));
	console.log(savedTasks);
})

// 2 PM
document.getElementById("save14").addEventListener("click", function () {
	var savedTasks = localStorage.setItem("2 PM", JSON.stringify(task14.value));
	console.log(savedTasks);
})

// 3 PM
document.getElementById("save15").addEventListener("click", function () {
	var savedTasks = localStorage.setItem("3 PM", JSON.stringify(task15.value));
	console.log(savedTasks);
})

// 4 PM
document.getElementById("save16").addEventListener("click", function () {
	var savedTasks = localStorage.setItem("4 PM", JSON.stringify(task16.value));
	console.log(savedTasks);
})

// 5 PM
document.getElementById("save17").addEventListener("click", function () {
	var savedTasks = localStorage.setItem("5 PM", JSON.stringify(task17.value));
	console.log(savedTasks);
})

// Display current day on page
$("#currentDay").text(moment().format("dddd, MMM Do, YYYY"));

// Get current number of hours (Recheck every 60 seconds)
var now = moment().hour();
var inputEl = document.getElementsByTagName("input");
console.log(inputEl);
console.log(now);

// Parse saved strings back to objects and load saved values onto page on refresh
var loadTasks = function() {
	console.log("load tasks function")
	for (var i = 8; i < 17; i++) {
		if (i < 12) {
			var task = JSON.parse(localStorage.getItem(i + " AM"))
			if (task) {
				document.getElementById(i).value = task;
			}
			console.log(task);	
		}
		else {
			var task = JSON.parse(localStorage.getItem(i + " PM"))
			console.log(task)
			if (task) {
				document.getElementById(i).value = task;
			}
		} 
		
	}
}

loadTasks();


// check each hour to see if it is past
for (var i = 0; inputEl.length - 1; i++) {
	console.log(i);
	if (inputEl[i].id > now) {
		inputEl[i].classList = "future form-control description";
	}
	else if (inputEl[i].id < now) {
		inputEl[i].classList = "past form-control description"
	}
	else {
		inputEl[i].classList = "present form-control description"
	}
}

// Reset on new day
if (now > 18) {
	localStorage.clear();
	loadTasks();
}