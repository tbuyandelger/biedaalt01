//Кельвиний утгыг хадгалах хувьсагч
let kelvin = 0;
document.getElementById("btn_calc").addEventListener("click", function () {
  kelvin = document.getElementById("kelvin").value;
  document.getElementById("result1").textContent = `Кельвин ${kelvin} К`;
  //Цельсийн утгыг хадгалах хувьсагч
  let celsius;
  celsius = kelvin - 273;
  document.getElementById(
    "result2"
  ).textContent = `Цельсийн градус: ${celsius} С`;

  let fahrenheit;
  //Фаренгейтийн утгыг хадгалах хувьсагч
  fahrenheit = celsius * (9 / 5) + 32;
  document.getElementById(
    "result3"
  ).textContent = `Фаренгейтийн градус: ${Math.floor(fahrenheit)} F`;
});
