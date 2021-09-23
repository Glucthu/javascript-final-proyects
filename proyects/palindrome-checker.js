function palindrome(str) {
  let reg = /\W|\s|-|_/g;
  
  return str.replace(reg, "")
            .split('')
            .reverse()
            .join('')
            .toLowerCase()
            ===
         str.replace(reg, "")
            .toLowerCase();
}

function callPalindrome() {
	if(document.getElementById("palindrome").value.length != 0)
		document.getElementById("palindrome-out").innerHTML = palindrome(document.getElementById("palindrome").value)
}
