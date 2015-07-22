// Exercise: Write a basic HTML / JavaScript program that does the following

// - In HTML, have a single text input field
// - In HTML , have a button
// - In JavaScript, 
	//have a function divides a number by 10
function divideByTen(num) {
	return (num / 10);
}
// - In JavaScript, 
	//have a function that multiplies a number by 5
function multiplyByFive(num) {
	return (num * 5);
}

// var button = document.getElementById("submitButton");
// var inputEl = document.getElementById("userNum");
// var result = document.getElementById("result");

var $button = $("#submitButton");
var $inputEl = $("#userNum");
var $result = $("#result");

$inputEl.keyup(function(){
	if(isNaN($inputEl.val())) {
		$inputEl.css("backgroundColor", "yellow");
		$("#warning").html("<p>Please enter numbers only</p>");
	} else {
		$inputEl.css("backgroundColor", "white");
		$("#warning").html("");
	}
})

// - When the button is clicked, 
// 	call a JavaScript function that checks 
// 	if the user has entered in a value in the input field
$button.click(function () {
	var html = "<h1>";
	console.log("input value: " + $inputEl.val());
	if ($inputEl.val() === "") {
		alert("Youn need to enter a value in the input field");
	} else if (parseInt($inputEl.val()) > 10000) {
		html += "Your number divided by 10 is: ";
		html += divideByTen(parseInt($inputEl.val()));
	} else {
		html += "Your number multiplied by 5 is: ";
		html += multiplyByFive(parseInt($inputEl.val()));
	}
	html += "</h1>";
	$result.html(html);
	$inputEl.val('');
});


// - If there is no value, 
// 	put an appropriate message in an alert box telling the user to enter something

// - If there is a value, 
// 	and its numeric value is greater than 10000, 
// 	call a function that passes in the user-entered value as an argument, 
// 	and the name of the function that divides by 10.

// -If there is a value, and its numeric value is less than 10000, 
// 	call a function that passes in the user-entered value as an argument, 
// 	and the name of the function that multiplies by 5. 
// 	Write the result of the calculation into the HTML document. (edited)




