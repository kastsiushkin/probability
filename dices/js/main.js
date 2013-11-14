//main.js
//Initialize vars 
//P - probability of winning
//E - expected value of number of tosses;
//wins - number of won games
//tosses - number of tosses per game
//n - number of simulations
var P, E,
		wins = 0,
		tosses = 0,
		n = 50000;

generate = function() {
	var i = 0;
	//Simulate the game n times
	for(i; i < n; i++) {
		var arr = {}, //Object/Associative array to keep sums after each toss
				dice1, dice2, //Results of each dice
				stop = false; //Flag to stop the game
		while(!stop) {
			var sum = 0;
			// Simulate a toss (integer from 1 to 6 inclusive)
			dice1 = 1 + Math.floor(Math.random() * (6 - 1 + 1));
			dice2 = 1 + Math.floor(Math.random() * (6 - 1 + 1));
			tosses++; //Increment tosses count
			sum = dice1 + dice2;
			//If you get double you lost
			if(dice1 == dice2) {
				stop = true;
			}
			//Check if array has entry with key=sum
			//If entry exists if()=true -> Game Won
			else if(arr[sum]) {
				wins++;
				stop = true;
			}
			//Create an associative array with key=sum
			arr[sum] = 1;
		}//End of while()
	}//End of simulations
	P = wins / n; //Calculate probability
	E = tosses / n; //Calculate expected number of tosses
}

//Function to display results on the page
displayData = function() {
  var output = "<p><b>Number of simulations:</b> " + n + "</p>" + 
							 "<p><b>Probability of winning:</b> " + P.toFixed(4) + "</p>" + 
							 "<p><b>Expected number of tosses per game:</b> " + E.toFixed(4) + "</p>";
	$("#data").append(output);
}

//Execute functions
generate();
displayData();