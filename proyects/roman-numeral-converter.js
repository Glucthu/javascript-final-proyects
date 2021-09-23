function convertToRoman(num) {
  let romanNums = {
    M:  1000,
    CM: 900,
    D:  500,
    CD: 400,
    C:  100,

    XC: 90,
    L:  50,
    XL: 40,
    X:  10,

    IX: 9,
    V:  5,
    IV: 4,
    I:  1
  }

  let romanNum = "";
    
  for (let i in romanNums) {
    while ( num >= romanNums[i] ) {
      romanNum += i;
      num -= romanNums[i];
    }
  }

  return romanNum;
}

function callRoman() {
	if(document.getElementById("roman").value.length != 0)
		document.getElementById("roman-out").innerHTML = convertToRoman(document.getElementById("roman").value)
}
