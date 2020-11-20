// Libraries
var readlineSync = require('readline-sync');
var chalk = require('chalk');
// -------------------------------------------------

score = 0

function playQuiz(questions, answers) {
	console.log(chalk.cyan.bold(questions));
	userAnswer = readlineSync.question(chalk.yellow.bold("Answer: ")).toLowerCase();

	if (userAnswer === answers.toLowerCase()) {
		score++;
		console.log(chalk.green.bold("Right Ans!"));
		console.log(chalk.cyan.bold("Score: ", score));
	}

	else {
		console.log(chalk.red.bold("Wrong Answer!"));
		console.log(chalk.red.bold("Correct Answer: "), chalk.green.bold(answers));
	}
}


var inst = ["INSTRUCTIONS", "---------------------------------", "Yes -> To Start The Game", "No -> To Close The Game"];
for(var i = 0; i<inst.length; i++) {
	console.log(chalk.cyan.bold(inst[i]));
}

userChoice = readlineSync.question("Choose: ").toLowerCase();

if(userChoice === "yes")
{
	console.log("Level 1 Starts");
	console.log("---------------------------------");
	playQuiz("Full Form Of OS? ", "operating system");
	playQuiz("Full Form Of RAM? ", "random access memory");
	playQuiz("Full Form Of IP? ", "internet protocol");
	playQuiz("Full Form Of IT? ", "information technology");
	playQuiz("Full Form Of ROM? ", "read only memory");
	console.log("---------------------------------");
	if(score >= 5) {
		console.log("---------------------------------");
		console.log("Congrats! you won level 1");
		console.log("Level 2 Starts");
		console.log("---------------------------------")
		playQuiz("Full Form Of TCP ", "transmission control protocol");
		playQuiz("Jumbeled Word: RPTOS ", "ports");
		playQuiz("MySQL is a ", "database management system");
		playQuiz("Who Developed JavaScript? ", "brendan eich");
		playQuiz("Who was world's first programmer? ", "ada lovelace");

		if (score >= 10) {
			console.log("---------------------------------");
			console.log(chalk.green("Congrats! you won the game"));
			console.log(chalk.green("Final Score: " ,score));
			console.log("---------------------------------")
		}
		else {
			console.log(chalk.cyan("---------------------------------"))
			console.log(chalk.red.bold("You Can't Score 10"));
			console.log(chalk.red.bold("Final Score: " ,score));
			console.log(chalk.red.bold("You Lose!"));
			console.log(chalk.cyan("---------------------------------"))
		} 
	}
	else {
		console.log(chalk.red.bold("You Lose!"));
	}
} 
else if (userChoice === "no")
{
	console.log(chalk.green.bold("Thank You!"))
}

else {
	console.log("Cannot understand your command. Please re run the program");
}
