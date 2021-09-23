function telephoneCheck(str) {
  return (/^(1(\s?|-?))?(\d{3}|\(\d{3}\))(\s*|-*)(\d{3})(\s*|-*)(\d{4})$/).test(str);
}

function callTelephone() {
	if(document.getElementById("telephone").value.length != 0)
		document.getElementById("telephone-out").innerHTML = telephoneCheck(document.getElementById("telephone").value)
}
