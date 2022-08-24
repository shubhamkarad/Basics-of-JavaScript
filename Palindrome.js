// ------------------------*************Palindrome Number**************--------------------
function validatePalindrome(yourInput) {
  var len = yourInput.length;

  for (var i = 0; i < len / 2; i++) {
    if (yourInput[i] !== yourInput[len - 1 - i]) {
      alert("Not a palindrome number");
    } else {
      alert("Palindrome Number");
    }
  }
}
var yourInput = prompt("Enter your value");

const value = validatePalindrome(yourInput);

console.log(value);
// ----------------------End of Palidrome number--------------------------
