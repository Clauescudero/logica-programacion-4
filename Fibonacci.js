
function Opefibonacci(num) {
    var Fibo = [0, 1];
  
    for (let i = 2; i < num; i++) {
      Fibo[i] = Fibo[i - 1] + Fibo[i - 2];
    }
  
    return Fibo;
  }
  
  function verificarNum(ingresado) {
    return !isNaN(parseFloat(ingresado)) && isFinite(ingresado);
  }
  
  function iniciar() {
    let num;
  
    do {
      let input = prompt("Ingrese un número: ");
      if (verificarNum(input)) {
        num = parseFloat(input);
      } else {
        alert("Número no válido. ¡Ingrese otro número!");
      }
    } while (!verificarNum(num));
  
    const fibonacci = Opefibonacci(num);
  
    const resultadoElement = document.createElement("p");
    resultadoElement.textContent = `La secuencia Fibonacci de ${num} es: ${fibonacci}`;
    document.body.appendChild(resultadoElement);
  }
  
  iniciar();