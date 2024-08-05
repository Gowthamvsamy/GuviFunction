/* Write a function called "isEven". "isEven" Should return whether it is even or not. Return -1 for invalid input. */

let value

function isEven(num) {
	///Your code Starts here 
	let value;
	if (Number(num) % 2 == 0) {
		value = true;
	} else if (typeof num != "number") {
		value = -1;
	} else if (Number(num) % 2 != 0) {
		value = false;
	}
	return value;
	///Your code Ends here
}
/*
Lines For TestCase
isEven(12);
isEven(0);
isEven(11);
isEven("11h");
*/