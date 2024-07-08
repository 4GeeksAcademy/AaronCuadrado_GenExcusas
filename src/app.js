window.onload = function () {
  console.log("iniciando");
  document.getElementById("genExcusa").addEventListener("click", () => {
    console.log("click");
    document.getElementById("excusa").innerHTML = generadorexcusas();
  });
};

const quien = ["Mi gato diabético", "Mi ex que todavia me acosa", "El vecino que no me cae bien", "El señor de 95 años"];
const accion = ["se comió", "vomitó sobre", "se cayó encima de", "destruyó"];
const que = ["mis deberes", "mis llaves del coche", "mi cena", "mi ordenador"];
const cuando = ["justo antes de salir de casa", "mientras hacía una videollamada importante", "cuando estaba a punto de dormir", "durante el funeral de mi pez"];

function generadorexcusas() {
  let randomquien = quien[Math.floor(Math.random() * quien.length)];
  let randomaccion = accion[Math.floor(Math.random() * accion.length)];
  let randomque = que[Math.floor(Math.random() * que.length)];
  let randomcuando = cuando[Math.floor(Math.random() * cuando.length)];
  const excusadiferente = `${randomquien} ${randomaccion} ${randomque} ${randomcuando}`;
  return excusadiferente;
}
