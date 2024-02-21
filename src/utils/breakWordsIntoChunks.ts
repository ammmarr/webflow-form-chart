export default function breakWordsIntoChunks(arr, maxChunkLength) {
	const result = [];

	// Iterate over each string in the array
	for (const str of arr) {
		const words = str.split(" "); // Split the string into words

		const nestedArray = []; // Initialize the nested array for the current string

		// Find the length of the longest word in the array
		const maxLength = Math.max(...words.map((word) => word.length));

		// Iterate over each word in the array of words
		for (const word of words) {
			// Pad the word with 'S's to match the length of the longest word
			const paddedWord =
				word.length < maxLength
					? word + " ".repeat(maxLength - word.length)
					: word;
			nestedArray.push(paddedWord);
		}

		// Push the nested array for the current string to the result array
		result.push(nestedArray);
	}

	return result;
}
