//caseA.js
//Initialize vars E - expected value of M;
//min, max - range of uniform distribution
//n - number of simulations
var E,
		min = 0,
		max = 1,
		n = 50000;

/* Function that simulates n number of iterations
	 Each iteration continues until sum of created RV less then 1
	 Once sum is bigger then 1 add number of created RV to countM
	 Find an average of countM
*/
generate = function() {
	var i, x, 
		sumX = 0, 
		countX = 0,
		countM = 0,
		eOfM;
	for(i = 0; i < n; i++) {
		//continue a simulation until the sum of RV less then or equal to 1
		while(sumX < 1) {
			x = min + (max-min)*Math.random(); //generate U(0,1)
			sumX += x; //run the sum of generated RV
			countX++; //increment the count of number of RV generated
		}
		countM += countX; //add countX to a total countM
		sumX = 0; //reset sumX
		countX = 0; //reser countX
	}
	eOfM = countM / n; //Find the average of countM
return eOfM;
}

//Function to display results on the page
displayData = function(E) {
  var output = "<p><b>Number of simulations:</b> " + n + "</p>" + 
							 "<p><b>[1] A:</b> M = min (n: X1 + X2 + ... + Xn > 1)</p>" + 
							 "<p><b>E(M):</b> " + E.toFixed(4) + "</p>";
	$("#data").append(output);
}

//Execute functions
E = generate();
displayData(E);