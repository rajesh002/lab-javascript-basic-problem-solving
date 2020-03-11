// Important Note - No Built-in functions to be used

// Progression 1: Names and Input
// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var proGrad1 = "VenkataRajesh";
console.log("The driver name is " + proGrad1);
var proGrad2 = "SiVanesan ";
console.log("The navigator name is " + proGrad2);

// Progression 2: Control Statements - 1

// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

var proGrad1NameSize = proGrad1.length;
var proGrad2NameSize = proGrad2.length;
if (proGrad1NameSize > proGrad2NameSize) {
  console.log("The longest name of Driver and Navigator is");
  console.log(proGrad1);
} else if (proGrad1NameSize < proGrad1NameSize) {
  console.log("The longest name of Driver and Navigator is");
  console.log(proGrad2);
} else {
  console.log("The both names of Driver and Navigator has equal");
  console.log(proGrad1 + " and " + proGrad2);
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels

console.log("Checking vowels present in names are not,vowels are a e i o u \n");
console.log("The vowels characters of driver is ");
var flag = 0,
  count = 0;
for (var index = 0; index < proGrad1.length; index++) {
  var temp = proGrad1[index];
  if (temp == "a" || temp == "e" || temp == "i" || temp == "o" || temp == "u") {
    console.log(temp);
    flag = 1;
    count += 1;
  }
}
if (flag == 1) console.log("The number of vowels in driver is " + count);

console.log("The vowels characters of navigator is ");
var flag = 0,
  count = 0;
for (var index = 0; index < proGrad2.length; index++) {
  var temp = proGrad2[index];
  if (temp == "a" || temp == "e" || temp == "i" || temp == "o" || temp == "u") {
    console.log(temp);
    flag = 1;
    count += 1;
  }
}
if (flag == 1) console.log("The number of vowels in navigator is " + count);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

function isUpper(str) {
  var arr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  for (var index = 0; index < arr.length; index++) {
    if (str == arr[index]) return true;
  }
  return false;
}

function isLower(str) {
  var arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  for (var index = 0; index < arr.length; index++) {
    if (str == arr[index]) return true;
  }
  return false;
}
console.log("The upperCase characters of driver is ");
for (var index = 0; index < proGrad1.length; index++) {
  var temp = proGrad1[index];
  if (isUpper(temp)) console.log(temp);
}

console.log("The lowerCase characters of driver is ");
for (var index = 0; index < proGrad1.length; index++) {
  var temp = proGrad1[index];
  if (isLower(temp)) console.log(temp);
}

console.log("The upperCase characters of navigator is ");
for (var index = 0; index < proGrad2.length; index++) {
  var temp = proGrad2[index];
  if (isUpper(temp)) console.log(temp);
}

console.log("The lowerCase characters of driver is ");
for (var index = 0; index < proGrad2.length; index++) {
  var temp = proGrad2[index];
  if (isLower(temp)) console.log(temp);
}

// Progression 3: Control Statements - 2

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
console.log("All the characters of the driver's name separated by space");
var charWithNames = proGrad1.split("");
var str = "";
for (var index = 0; index < charWithNames.length; index++) {
  str += charWithNames[index];
  str += " ";
}
console.log(str);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
console.log("All the characters of the navigator's name separated by space");
var charWithNames = proGrad2.split("");
var str = "";
for (var index = 0; index < charWithNames.length; index++) {
  str += charWithNames[index];
  str += " ";
}
console.log(str);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

console.log("The drivers and navigators names in reverse order");
var newStr = proGrad1 + " " + proGrad2;
var temp = "";
var res = newStr.split(" ");
for (var start = res.length - 1; start >= 0; start--) temp += res[start] + " ";
console.log(temp);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - No, the navigator goes first definitely.
// - What?! You both have the same name?

if (proGrad1[0] < proGrad2[0]) console.log(proGrad1);
else console.log(proGrad2);

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

var text1 =
  "Lorem Ipsum is simply latin text of the printing and typesetting industry." +
  "Contrary to popular belief, Lorem Ipsum is not simply random latin";
var text2 =
  "It has roots in a piece of classical Latin literature from 45 BC, latin it over 2000 years old.";
var text3 =
  "he standard chunk of Lorem latin used since the 1500s is reproduced below for latin interested.";
var text = text1 + text2 + text3;
var newText = text.split(" ");
var count = 0;
var latinCount = 0;
for (var index = 0; index < newText.length; index++) {
  count += 1;
  if (newText[index] == "latin") latinCount += 1;
}
console.log("Number of words in the string is ");
console.log(count);
console.log("Number of times latin occured is");
console.log(latinCount);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this
// variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array
//methods (such as join(), reverse(), etc.).
// However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop,
//if-else statements with some break and continue... Just sayin'

var data = "a man, a plan, a canal,panama";
var temp = "";
var temp1 = "";
for (var index = 0; index < data.length; index++) {
  if (data[index] == "," || data[index] == " ") continue;
  else temp += data[index];
}

console.log(temp);
for (var index = temp.length - 1; index >= 0; index--) {
  temp1 += temp[index];
}

console.log(temp1);
if (temp == temp1) console.log("It is a palindrome");
else console.log("Not a palindrome");
