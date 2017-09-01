// 01. Defina uma função recursiva que calcule 'n!'
// 'n!' é o produto de todos os inteiros positivos 
// menores ou iguais a 'n'.

(function (/* 01. fatorial (n) */) {

  var factA = function( n ) {
    return n === 0 
      ? 1 
      : factA( n-1 ) * n;
  };
  var factB = function( n ) {
    var r = 1;
    for( var i = 1; i <= n; i++ )
      r = r * i;
    return r;
  };
  
  console.log (
    factA( 5 ), // 120
    factB( 5 )  // 120
  );
});


// 02. Defina uma  função recursiva que calcule o 
// n-esimo término da sucessão de Fibonacci. Dito 
// término se obtem com a soma dos dois terminos 
// anteriores da sucessão.

(function (/* 02. fibonacci (n) */) {

  var fibA = function( n ) {
    return n <= 2 
      ? 1 
      : fibA( n-1 ) + fibA( n-2 );
  };
  var fibB = function( n ) {
    var a = 1;
    var b = 1;
    for( var i = 2; i < n; i++ ) {
      b = a + b;
      a = b - a;
    }
    return b;
  };
  
  console.log (
    fibA( 10 ), // 55
    fibB( 10 )  // 55
  );
});


// 03. Defina uma função recursiva para calcular a 
// potência de um número 'b' elevado ao expoente 'e'.
// O cálculo de 'b' elevado a 'e' se obtem com o
// produto de 'b' com sigo mesmo 'e' vezes.

(function (/* 03. pow (b, e) */) {
	
  var pow = function( b, e ) {
    return b === 1
      ? 1
      : pow( b, e - 1 ) * b;
  };

  console.log (
    pow( 2, 6 ), // 64
    pow( 3, 6 )  // 729
  );    
});


// 04. Defina dois predicados lógicos '[even]' e '[odd]' que
// indiquem se um número 'n' passado como argumento é 
// par ou ímpar respectivamente. Não é permitido o uso do   
// operador '%' (resto da divisão).

(function (/* 04. even (n) & odd (n) */) {
	
  var even = function( n ) {
    return n === 0
      ? true
      : odd( n-1 );
  };
  var odd = function( n ) {
    return n === 0
      ? false
      : even( n-1 );
  };
  
  console.log (
    even( 5 ), even (6), // false true
    odd( 5 ),  odd  (6)  // true false
  );  
});


// 05. Defina uma função recursiva [addUp] que retorne 
// a soma dos 'n' primeros números naturais. Por ejemplo
// addUp (3) = 1 + 2 + 3 = 6.

(function (/* 05. addUp (n) */) {

  var addUp = function ( n ) {
    return n === 1
      ? 1
      : addUp( n-1 ) + n;
  };

  console.log (
    addUp( 5 ) // 15
  );
});


// 06. Defina a função recursiva '[digits]' que some os dígitos
// de um 'n' algarismo passado por parametro. Por exemplo,
// digits (125) = 1 + 2 + 5 = 8.

(function (/* 06. digits (n) */) {

  var digits = function ( n ) {
    return n <= 9
      ? n
      : digits( n / 10 | 0 ) + n % 10;
  };

  console.log (
    digits (5),  // 5
    digits (25), // 7
    digits (125) // 8
  );
});