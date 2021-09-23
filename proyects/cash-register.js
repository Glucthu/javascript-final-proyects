function checkCashRegister(price, cash, cid) {
  const values = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  var change = [];
  var status;
  var toPay = cash - price;

  var payable = 0;
  for(let i in cid) 
    if(values[i] <= toPay) payable += cid[i][1];

  if(payable < toPay) status = "INSUFFICIENT_FUNDS";
    else if(payable == toPay) {
    status = "CLOSED"
    change = cid;
    } else {
      status = "OPEN"
      for(let i = cid.length; i >= 0; i--) {
        if(values[i] <= toPay) {
          if(cid[i][1] > toPay) {
            let ammount = Math.trunc((toPay) / values[i]).toFixed(2);
            change.push([cid[i][0], ammount*values[i]])
            toPay -= ammount*values[i]
          } else {
            change.push(cid[i]);
            toPay -= cid[i][1];
          }
          toPay = toPay.toFixed(2);
        }
      }
    }
  return {status, change};
}

function callCashRegister() {
	if(document.getElementById("").value.length != 0)
		document.getElementById("cash-register-out").innerHTML = telephoneCheck(document.getElementById("").value)
}