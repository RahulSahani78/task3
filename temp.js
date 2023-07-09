const btn = document.getElementById('btn');
const num = document.getElementById('num');
const type = document.getElementById('type');
const result = document.getElementById('result');
btn.addEventListener('click',()=> {
const temp = parseFloat(num.value);
const selectedType = type.value;
let convertedTemp;

if (selectedType === 'fahrenheit') {
  convertedTemp = (temp * 9/5) + 32;
  result.value = convertedTemp.toFixed(2) +"F";
} else if (selectedType === 'kelvin') {
  convertedTemp = temp + 273.15;
  result.value = convertedTemp.toFixed(2)+ "K";
}
});