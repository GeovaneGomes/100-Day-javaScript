const btn = document.querySelector(".btn");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");



const hideError = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 5000);
}

const calculateTip = (e) => {
  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;

  if (bill === "" || rate == "") {
    //console.log("Please add a number");
    error.style.display = "block";
    hideError();
  } else if (isNaN(bill)) {
    error.innerHTML = "Please enter a number";
    error.style.display = "block";
    hideError();
  } else {
    let tipAmt = bill * rate;
    tipAmt = Math.ceil(tipAmt);
    tip.innerHTML = `Tip: $${tipAmt}`;

    let totalBill = Number(bill) + tipAmt;
    total.innerHTML = `Total Bill: $${totalBill}`;
  }
}

btn.addEventListener("click", calculateTip);