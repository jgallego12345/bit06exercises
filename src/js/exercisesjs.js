'use strict';


/* Ejercicio #1 SUMA de dos numeros */
const $ejercicio1 = document.getElementById('ejercicio1');
const $sumar = document.getElementById('ejercicio1')


$ejercicio1.addEventListener('submit', (addEventListener)=>{
    event.preventDefault();
    
    const ejerc1num1 = parseInt($ejercicio1.ejerc1num1.value)
    const ejerc1num2 = parseInt($ejercicio1.ejerc1num2.value)

    resultado1.placeholder = ejerc1num1 + ejerc1num2;
});


/* Ejercicio #2 RESTA de dos numeros */
const $ejercicio2 = document.getElementById('ejercicio2');
const $restar = document.getElementById('ejercicio2')

$ejercicio2.addEventListener('submit', (addEventListener)=>{
    event.preventDefault();

    const ejerc2num1 = $ejercicio2.ejerc2num1.value;
    const ejerc2num2 = $ejercicio2.ejerc2num2.value;
    
    resultado2.placeholder = ejerc2num1 - ejerc2num2;

});


/* Ejercicio #3 MULTIPLICACIÓN de dos numeros */
const $ejercicio3 = document.getElementById('ejercicio3');
const $multiplicacion = document.getElementById('ejercicio3')

$ejercicio3.addEventListener('submit', (addEventListener)=>{
    event.preventDefault();

    const ejerc3num1 = $ejercicio3.ejerc3num1.value
    const ejerc3num2 = $ejercicio3.ejerc3num2.value
    
    resultado3.placeholder = ejerc3num1 * ejerc3num2;
    
  });

/* Ejercicio #4 DIVISIÓN de dos numeros */
const $ejercicio4 = document.getElementById('ejercicio4');
const $division = document.getElementById('ejercicio4')

$ejercicio4.addEventListener('submit', (addEventListener)=>{
    event.preventDefault();
    const ejerc4num1 = $ejercicio4.ejerc4num1.value
    const ejerc4num2 = $ejercicio4.ejerc4num2.value
    resultado4.placeholder = ejerc4num1 / ejerc4num2;
  });

/* Ejercicio #5 Pedir un número y mostrar los números pares desde 1 hasta n. */
const $ejercicio5 = document.getElementById('ejercicio5');
const $multiplosDeDos = document.getElementById('ejercicio5')

$ejercicio5.addEventListener('submit', (addEventListener)=>{
    event.preventDefault();


    const ejerc5num1 = $ejercicio5.ejerc5num1.value
    let pares = '';
    for (let i = 1; i <= ejerc5num1; i++) {
      if (i % 2 === 0) {
        pares += i + ', ';
      }
    }
    resultado5.placeholder = `N=${ejerc5num1}, pares:${pares}`;
  })
  //multiplosDeDos();

  // Pedir un número, mostrar el doble de n.
  function elDoble() {
    const numero = parseInt(prompt('Ingrese un número:'));
    const resultado = numero * 2;
    alert('El doble de ' + numero + ' es: ' + resultado);
  }
  //elDoble();
  
  // Pedir un número, mostrar el triple de n.
  function elTriple() {
    const numero = parseInt(prompt('Ingrese un número:'));
    const resultado = numero * 3;
    alert(`El triple de ${numero} es: ${resultado}`);
  }
  //elTriple();
  
  // Pedir un número, mostrar la mitad de n.
  function laMitad() {
    const numero = parseInt(prompt('Ingrese un número:'));
    const resultado = numero / 2;
    alert('La mitad de ' + numero + ' es: ' + resultado);
  }
  //laMitad();
  
  // Pedir un número, mostrar la tercera parte de n.
  function terceraParte() {
    const numero = parseInt(prompt('Ingrese un número:'));
    const resultado = numero / 3;
    alert('La tercera parte de ' + numero + ' es: ' + resultado);
  }
  //terceraParte();
  
  // Pedir un número, mostrar el cuadrado de n.
  function elCuadrado() {
    const numero = parseInt(prompt('Ingrese un número:'));
    alert(`El cuadrado de ${numero} es: ${numero * numero}`);
  }
  //elCuadrado();
  
  // Pedir un número, mostrar n reducido en 5.
  function reducidoEn5() {
    const numero = parseInt(prompt('Ingrese un número:'));
    alert(`El número ${numero} reducido en 5 es: ${numero - 5}`);
  }
  //reducidoEn5();
  
  // Pedir un número, mostrar el doble de n más 4.
  function elDobleMas4() {
    const numero = parseInt(prompt('Ingrese un número:'));
    const resultado = numero * 2 + 4;
    alert(`El doble de ${numero} más 4 es: ${resultado}`);
  }
  //elDobleMas4();
  
  // Pedir un número, mostrar si es positivo, negativo o si es cero.
  function ceroNegativoPositivo() {
    const numero = parseInt(prompt('Ingrese un número:'));
    if (numero === 0) {
      alert('Ingresó el número cero.');
    } else if (numero < 0) {
      alert('Ingresó un número negativo.');
    } else {
      alert('Ingresó un número positivo.');
    }
  }