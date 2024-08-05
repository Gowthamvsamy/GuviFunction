/* Given an array, "getLastElement" returns the last element of the given array. If the given array has a length of 0, it should return '-1'. */

function getLastElement(array) {
	///Your code Starts here 
	let output;
	for (let index = 0; index < array.length; index++) {
		output = array.length;
	}
	if (output == undefined) {
		return -1;
	} else {
		return output;
	}
	///Your code Ends here
}
/*
Lines For TestCase
getLastElement([1, 2, 3, 4]);
getLastElement([1, 2, 3, 4,5,6,7]);
getLastElement([]);
*/