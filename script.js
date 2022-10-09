function Ex01() {
  var numMoney = parseFloat(document.getElementById("numMoney").value);
  var numDay = parseFloat(document.getElementById("numDay").value);
  var numSalary = numMoney * numDay;

  //   document.getElementById("xuatTien").innerHTML = payment;
  document.getElementById("numSalary").value = "" + numSalary + " vnd/tháng";
}

function Ex02() {
  var numAverage =
    (parseFloat(document.getElementById("numA").value) +
      parseFloat(document.getElementById("numB").value) +
      parseFloat(document.getElementById("numC").value) +
      parseFloat(document.getElementById("numD").value) +
      parseFloat(document.getElementById("numE").value)) /
    5;
  //   document.getElementById("xuatTien").innerHTML = payment;
  document.getElementById("numOut").value = "" + numAverage;
}

function Ex03() {
  var numUSD = parseFloat(document.getElementById("numUSD").value) * 23500;
  //   document.getElementById("xuatTien").innerHTML = payment;
  document.getElementById("numOut").value = "" + numUSD + " vnd";
}

function Ex04() {
  var numAv =
    parseFloat(document.getElementById("numW").value) *
    parseFloat(document.getElementById("numH").value);
  //   document.getElementById("xuatTien").innerHTML = payment;
  document.getElementById("numOut").value = "" + numAv + " cm^2";
}

function Ex05() {
  var numAfter =
    (parseFloat(document.getElementById("numBefore").value) % 10) +
    Math.floor(parseFloat(document.getElementById("numBefore").value) / 10);

  //   document.getElementById("xuatTien").innerHTML = payment;
  document.getElementById("numOut").value = "" + numAfter;
}
