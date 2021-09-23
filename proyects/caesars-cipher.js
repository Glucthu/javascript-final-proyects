function rot13(str) {
  let rot = 13; //letters are shifted by n places
  let newStr = "";

  for(let i = 0; i < str.length; i++)
  {
    if(/\w/.test(str[i]))
      str.charCodeAt(i) + rot > 90 ? //90 : Z
      newStr += String.fromCharCode(str.charCodeAt(i) - rot) : 
      newStr += String.fromCharCode(str.charCodeAt(i) + rot)
    else
      newStr += str[i];
  }

  return newStr;
}

function callCasears() {
	if(document.getElementById("caesars").value.length != 0)
		document.getElementById("caesars-out").innerHTML = rot13(document.getElementById("caesars").value.toUpperCase())
}
