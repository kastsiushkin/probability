//caseB.js
//Initialize vars E - expected value of M;
//min, max - range of uniform distribution
//n - number of simulations
var E,
		min = 0,
		max = 1,
		n = 50000;

/* Function that simulates n number of iterations
	 Each iteration continues until current RV is smaller then next RV
	 Once current RV iss bigger then next RV save number of RV created
	 Find an average of number of created RV
*/		
generate = function() {
	var i, currentVariable, nextVariable,
		sumN = 0, 
		countX = 0,
		countN = 0, 
		eOfN;
	for(i = 0; i < n; i++) {
		currentVariable = min + (max-min)*Math.random();
		nextVariable = min + (max-min)*Math.random();
		countN +=2; //Increment countN by 2 after creating first 2 variables
		while(currentVariable <= nextVariable) {
			currentVariable = nextVariable; //Save the latest variable as current
			nextVariable = min + (max-min)*Math.random(); //Create next variable
			countX++; //Incement countX
		}
		countN += countX;
		countX = 0; //reset countX
	}
	countN++; //Increment countX by one per problem statement
	eOfN = countN / n; //Find the average
return eOfN;
}

//Function to display results on the page
displayData = function(E) {
  var output = "<p><b>[2] B:</b> N = min (n+1: Xn > Xn+1)</p>" + 
							 "<p><b>E(N):</b> " + E.toFixed(4) + "</p>";
	$("#data").append(output);
}

//Execute functions
E = generate();
displayData(E);
