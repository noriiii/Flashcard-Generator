var inquirer = require("inquirer");

var inputString = process.argv;
var command = inputString[2];
var title = inputString[3];

inquirer.prompt([
	{
		type: "input",
		name: "question1",
		message: "The Bill of ***** is the first ten amendments to the Constitution"
	},

	{
		type: "input",
		name: "question2",
		message: "If both the President and the Vice President can no longer serve, the ***** becomes President."
	},

	{
		type: "input",
		name: "question3",
		message: "The Chief Justice of the United States now is *****"
	}

	]).then(function(answer){

		if (answer.question1 === "Rights" && answer.question2 === "Speaker of the House" && answer.question3 === "John Roberts") {
			console.log("All correct");
		} else if (answer.question1 === "Rights" && answer.question2 === "Speaker of the House" && answer.question3 !=== "John Roberts") {
			console.log("First two answers are correct");
		} else if (answer.question1 === "Rights" && answer.question2 !=== "Speaker of the House" && answer.question3 === "John Roberts") {
			console.log("All correct except your second answer");
		} else if (answer.question1 !=== "Rights" && answer.question2 === "Speaker of the House" && answer.question3 === "John Roberts") {
			console.log("Last two answers are correct");
		} else if (answer.question1 === "Rights" && answer.question2 !=== "Speaker of the House" && answer.question3 !=== "John Roberts") {
			console.log("Only first answer is correct");
		} else if (answer.question1 !=== "Rights" && answer.question2 === "Speaker of the House" && answer.question3 !=== "John Roberts") {
			console.log("Only second answer is correct");
		} else if (answer.question1 !=== "Rights" && answer.question2 !=== "Speaker of the House" && answer.question3 === "John Roberts") {
			console.log("Only third answer is correct");
		} else {
			console.log("All wrong!");
		}

	});

};

