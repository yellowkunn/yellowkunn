// regex pertama
let regexInputahsan = document.querySelector("#regexInputahsan");
let validationTextahsan = document.querySelector("#validation-text-ahsan");

const REGULAR_EXPRESSION = /^(http|https):\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;

regexInputahsan.addEventListener("input", function() {
    validationTextahsan.innerHTML = REGULAR_EXPRESSION.test(regexInputahsan.value) 
    ? "Valid" : "Invalid, hanya untuk validasi URL dengan format HTTP atau HTTPS";
});

// regex kedua
let regexInputahsan2 = document.querySelector("#regexInputahsan2");
let validationTextahsan2 = document.querySelector("#validation-text-ahsan2");

const REGULAR_EXPRESSION_2 = /(\d{2})\/(\d{2})\/(\d{4})/;

regexInputahsan2.addEventListener("input", function() {
    validationTextahsan2.innerHTML = REGULAR_EXPRESSION_2.test(regexInputahsan2.value) 
    ? "Valid" : "Invalid, mengestrak tanggal hanya dengan format DD/MM/YYYY";
});

// regex ketiga
let regexInputahsan3 = document.querySelector("#regexInputahsan3");
let validationTextahsan3 = document.querySelector("#validation-text-ahsan3");

const REGULAR_EXPRESSION_3 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

regexInputahsan3.addEventListener("input", function() {
    validationTextahsan3.textContent = REGULAR_EXPRESSION_3.test(regexInputahsan3.value) 
    ? "Valid" : "Invalid, minimal dari empat angka yang dipisahkan oleh titik";
});

// regex keempat
let regexInputahsan4 = document.querySelector("#regexInputahsan4");
let validationTextahsan4 = document.querySelector("#validation-text-ahsan4");

const REGULAR_EXPRESSION_4 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).{12,}$/;

regexInputahsan4.addEventListener("input", function() {
    validationTextahsan4.textContent = REGULAR_EXPRESSION_4.test(regexInputahsan4.value) 
    ? "Valid" : "Invalid, minimum 12 characters with at least one uppercase letter, one lowercase letter, one number, one special character.";
});

// regex kelima
let regexInputahsan5 = document.querySelector("#regexInputahsan5");
let validationTextahsan5 = document.querySelector("#validation-text-ahsan5");

const REGULAR_EXPRESSION_5 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

regexInputahsan5.addEventListener("input", function() {
    validationTextahsan5.textContent = REGULAR_EXPRESSION_5.test(regexInputahsan5.value) 
    ? "Valid" : "Invalid, hanya dengan format spt user@example.com.";
});
