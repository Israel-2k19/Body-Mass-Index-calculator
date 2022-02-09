//This is a function that coverts input from the user and converts the input into results telling the user about their Body Mass Index. It converts input from the user about their weight (in Kilogram) and height (in meter square) and tells them their Body Mass Index (BMI), and what category their BMI is either; underweight, normal, overweight or obese.The formula to the equation is given as shown below:

//Body Mass Index formula = weight / height^2

//code goes here:

function BMI (weight, height) {
	var name = prompt("What is your name?");
	var weight = prompt("What is your current weight in kilogram?");

	var height = prompt("What is your current height in meters?");

	var BMIheight = height * height;

	BMI = Math.round(weight / BMIheight);



	if (BMI >= 18.5 && BMI <= 25){
		alert("Hello, " + name + "!" + " Your Body Mass Index (BMI) is " + BMI + ". Your BMI is within normal range.")
	} else if (BMI < 18.5){
	alert("Hello, " + name + "!" + " Your Body Mass Index (BMI) is " + BMI + ". You are underweight." )
	} else if (BMI > 25 && BMI === 30){
		alert("Hello, " + name + "!" + " Your Body Mass Index (BMI) is " + BMI + ". You are overweight.")
	} else {
		alert("Hello, " + name + "!" + " Your Body Mass Index (BMI) is " + BMI + ". Your weight is obese")
	}
	}

	BMI();