const removeExtraSpaces = (string) => {
  return string.replace(/ {2,}/g, ' ')

}

// takes a string and an array of characters that need to be removed from the string
// returns the string without those characters
const removeCharsAndSpaces = (string, disallowedChars) => {
  let result = string;
  for (let badChar of disallowedChars) {
    // TODO if character is + or * or other special regex character, breaks function
    let regex = new RegExp(`${badChar}`, 'g');
    result = result.replace(regex, '');
  }
  result = removeExtraSpaces(result);
  return result;

};

module.exports = removeCharsAndSpaces;