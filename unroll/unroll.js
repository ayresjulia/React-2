function unroll (squareArray) {
	const finalArr = [];

	do {
		let upperRow = squareArray.shift();
		if (upperRow.length === 1) finalArr.push(upperRow); // NOTE: needed for odd row & col length: 3x3, 5x5 etc

		let rightCol = squareArray.map((arr) => arr.pop());
		if (rightCol.length === 0) continue; // NOTE: needed for odd row & col length: 3x3, 5x5 etc

		let bottomRow = squareArray.pop().reverse();
		let leftCol = squareArray.map((arr) => arr.shift()).reverse();

		let hollowSquare = upperRow.concat(rightCol, bottomRow, leftCol);
		let values = Object.values(hollowSquare);

		finalArr.push(values);
	} while (squareArray.flat().length > 0);

	let result = Object.values(finalArr.flat());
	return result;
}

module.exports = unroll;
