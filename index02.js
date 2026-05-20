const resultBox = document.getElementById("result-box");

// function showCake() {
//   resultBox.innerHTML =
//     "🍬 Таны чихрийн захиалга\nхүлээн авлаа!";
// }

// function showCandy() {
//   resultBox.innerHTML =
//     "🎂 Таны бялууны захиалга\nхүлээн авлаа!";
// }

// function showIceCream() {
//   resultBox.innerHTML =
//     "🍦 Таны зайрмагийн захиалга\nхүлээн авлаа!";
// }

function showMessage(sms) {
  resultBox.innerHTML = `🤗 ${sms}`;
}
