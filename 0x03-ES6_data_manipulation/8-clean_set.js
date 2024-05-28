export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  // Initialize an array to hold the processed strings
  const result = [];

  // Iterate over each value in the set
  for (const value of set) {
    // Check if the value starts with startString
    if (value.startsWith(startString)) {
      // Append the rest of the string (excluding startString) to the result array
      result.push(value.slice(startString.length));
    }
  }

  // Join the result array with '-' and return the result string
  return result.join('-');
}
