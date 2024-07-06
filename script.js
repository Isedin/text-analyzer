document.getElementById("analyzeBtn").addEventListener("click", function () {
  const text = document.getElementById("textInput").value;
  textAnalyzer(text);
});

function textAnalyzer(text) {
  // In the textAnalyzer function, create a constant called wordsArray and set it to be equal to the value of calling convertTextToWords() with text as an argument.
  // In the textAnalyzer function, update the longestWord variable to hold the value returned from the findLongestWord function. To make the function work, you will need to pass wordsArray as an argument.
  // Write an if statement that checks if the input is not a string. Use the typeof operator to do so. If you don't know how, check the Hint section.
  if (typeof text !== "string") {
    displayResult(
      "Cannot analyze text. Provided input is not valid. Please pass a string."
    );

    // If the input passed is not a string, print an error message in the console and add a return to exit the function
    return "An error occurred";
  }
  //   Inside the textAnalyzer function, write a conditional statement to check if an empty string is passed. Use the built-in trim() method to remove any whitespaces before and after any given string input.
  if (text.trim() === "") {
    // If the input passed is an empty string (contains no chatacters), print an error message in the console and add a return to exit the function
    displayResult(
      "Cannot analyze text. Your text must include at least one character."
    );

    return "An error occurred";
  }

  let shortestWord = "";
  let longestWord = "";
  const wordsArray = convertTextToWords(text);
  longestWord = findLongestWord(wordsArray);
  shortestWord = findShortestWord(wordsArray, longestWord);
  let vowelWords = [];
  vowelWords = findVowelWords(wordsArray);

  displayResult(
    "Longest Word: " +
      longestWord +
      "<br>" +
      "Shortest Word: " +
      shortestWord +
      "<br>" +
      "Vowel Words: " +
      vowelWords.join(", ") +
      "<br>" +
      "Words List: " +
      wordsArray.join(", ") +
      "<br>" +
      "Total Words Count: " +
      wordsArray.length
  );
}

function displayResult(result) {
  document.getElementById("results").innerHTML = result;
}

// Let's continue by coding a function that breaks a sentence parameter given into an array of words. We've provided the function already into the text editor. Inside this function, we'll also use a useful built-in JavaScript function called split().
function convertTextToWords(text) {
  // As JavaScript is case-sensitive., we need to ensure that all the input we receive is lowercase.
  const lowerCaseText = text.toLowerCase();
  // write your code here.
  //   Split the lowerCaseText string provided into words by using JavaScript built-in method split(). Assign the words constant with the value from the split. Check the Hint for more information.
  return lowerCaseText.split(" ");
  // Return the words array
  //   return words;
}

function findLongestWord(words) {
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    if (currentWord.length >= longestWord.length) {
      longestWord = currentWord;
    }
  }
  return longestWord;
}

function findShortestWord(words, longestWord) {
  let shortestWord = longestWord;
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    if (currentWord.length <= shortestWord.length) {
      shortestWord = currentWord;
    }
  }
  return shortestWord;
}

function findVowelWords(words) {
  const vowels = ["a", "i", "e", "o", "u"];
  let vowelWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j < vowels.length; j++) {
      let vowel = vowels[j];
      if (word.startsWith(vowel)) {
        vowelWords.push(word);
      }
    }
  }
  return vowelWords;
}
