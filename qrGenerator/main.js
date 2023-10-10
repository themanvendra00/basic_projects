const wrapper = document.querySelector(".wrapper");
const qrInput = document.querySelector(".form input");
const generateBtn = document.querySelector(".form button");
const qrImg = document.querySelector("#qrImage");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return; // return if the qrValue is empty
  generateBtn.innerText = "Generating...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;

  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate";
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    wrapper.classList.remove("active");
  }
});
