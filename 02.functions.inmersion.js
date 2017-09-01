// 01. Defina uma função recursiva [mirror] para determinar
// se um número inteiro 'n' é simétrico a outro número inteiro 
// m. Construir a partir daqui a função [palindrome] que 
// indica se um número é simétrico a respeito de si mesmo.

(function (/* 01. mirror (n, m) */) {
    
    var reverse = function( n ) {
        return reverseAux(n, 0);
    };
    var reverseAux = function( n, a ) {
        return n === 0
            ? a
            : reverseAux( 0 | n/10, a*10 + n%10 );
    }
    var mirror = function ( n, m ) {
        return reverse( n ) === m;
    };
    var palindrome = function ( n ) {
        return reverse( n ) === n;
    };
    
    console.log (
        reverse(125)            // 521
        mirror (1, 7),          // false
        mirror (0, 0),          // true
        mirror (123, 321),      // true
        mirror (123, 123),      // false
        mirror (123, 132),      // false
        palindrome (123),       // false
        palindrome (12321),     // true
        palindrome (1221)       // true
    );  
})();


// 02. Defina uma função recursiva [addV] que dado um 
// vetor v calcule a soma de todos os seus elementos.
// Por exemplo, addV([1,2,3]) = 1 + 2 + 3 = 6.

(function (/* 02. addV (v) */) {
    
    var addVA = function ( v ) {
        return (function addVAFrom( v, p ) {
            return p > v.length - 1
                ? 0
                : addVAFrom( v, p+1 ) + v[ p ];
        })( v, 0 );
    };
    var addVB = function ( v ) {
        return (function addVBUp( v, p ) {
            return p === 0
                ? v[ p ]
                : addVBUp( v, p-1 ) + v[ p ];
        })( v, v.length - 1 );
    };
    
    console.log (
        addVA ([1,2,3,4,5]), // 15
        addVB ([1,2,3,4,5])  // 15
    );
})();


// 03. Defina uma função recursiva [hasV] para determinar  
// se um elemento 'e' está contido dentro de um vetor 'v'.
// Não utilize funções auxiliares disponíveis no 
// protótipo Array.

(function (/* 03. hasV (v, e) */) {
    
    var hasV = function ( v, e ) {
        return hasVFrom( v, e, 0 );
    };
    var hasVFrom = function( v, e, p ) {
        return p > v.length - 1
            ? false
            : v[ p ] === e || hasVFrom( v, e, p+1 );
    };
  
    console.log (
        hasV ([1,2,3,4,5], 4), // true
        hasV ([1,2,3,4,5], 6)  // false
    );
})();


// 04. Defina uma função recursiva [repeatV] para 
// determinar se dentro de um vetor 'v' se encontram
// pelo menos um elemento repetido. Não utilize funções 
// auxiliares disponíveis no protótipo Array.

(function (/* 04. repeatV (v) */) {
    
    var hasV = function ( v, e ) {
        return hasVFrom( v, e, 0 );
    };
    var hasVFrom = function( v, e, p ) {
        return p > v.length - 1
            ? false
            : v[ p ] === e || hasVFrom( v, e, p+1 );
    };
    var repeatV = function ( v ) {
        return repeatVAux( v, 0 );
    };
    var repeatVAux = function( v, p ) {
        return p > v.length - 1
            ? false
            : hasVFrom( v, v[p], p+1 ) || repeatVAux( v, v[ p ], p+1 );
    }
    
    console.log (
        repeatV ([1,2,3,4,5]),   // false
        repeatV ([1,2,3,4,5,3])  // true
    );
})();


// 05. Defina uma função recursiva [mirrorV] que determine se
// dois vetores são simétricos entre si.
// Por exemplo, [1,2,3] é simétrico a [3,2,1]. Não utilize 
// funções auxiliares disponíveis no protótipo Array.

(function (/* 05. mirrorV (v, w) */) {
    
    var reverseV = function( v ) {
        return reverseVAux( v, 0, [] );
    };
    var reverseVAux = function( v, p, a ) {
        return p > v.length - 1
            ? a
            : reverseVAux( v, p+1, [v[p]].concat( a ) );
    };
    var mirrorV = function( v, w ) {
        return equals( v, reverseV( w ), 0 );
    };
    var equals = function( v, w, p) {
        return p > v.length - 1
            ? true
            : v[p] === w[p] && equals( v, w, p+1 );
    };
    
    console.log (
        mirrorV ([2, 4, 6], []),            // false
        mirrorV ([2, 4, 6], [2, 4, 6]),     // false
        mirrorV ([2, 4, 6], [6, 4]),        // false
        mirrorV ([2, 4, 6], [6, 4, 2]),     // true
        mirrorV ([2, 4, 6], [6, 4, 2, 7])   // false
    );
})();


// 06. Defina uma função recursiva [sortV] que ordene um vetor v.
// Pode utilizar-se da técnica de ordenação por inserção. Primeiro
// resolva o problema de inserir um elemento em ordem dentro de um
// array que se assume previamente ordenado. Para tal defina a função
// [insertV]. Depois, utilizando essa função, resolva o problema da
// ordenação.

(function (/* 06. sortV (v) */) {
    
    var insertV = function (v, e) {

    };

    var sortV = function (v) {

    };
    
    console.log (
        sortV ([1, 3, 2, 4, 8, 1]), // [ 1, 1, 2, 3, 4, 8 ]
        sortV ([2, 4, 6, 8, 3, 0]), // [ 0, 2, 3, 4, 6, 8 ]
        sortV ([1, 2, 3, 4, 5, 6]), // [ 1, 2, 3, 4, 5, 6 ] 
        sortV ([6, 5, 4, 3, 2, 1])  // [ 1, 2, 3, 4, 5, 6 ]
    );
})();


// Bonus 01. Defina uma função recursiva [containsV] que determine
// se um vetor 'w' está contido dentro de outro vetor maior 'v'.
// Não utilize funções auxiliares disponíveis no protótipo Array.

(function (/* Bonus 01. containsV (v, w) */) {
    
    var containsV = function (v, w) {

    };

    
    console.log (
        containsV ([],        []),
        containsV ([],        [1]),
        containsV ([],        [1,2]),
        containsV ([1],       [1]),
        containsV ([1],       [2]),
        containsV ([1,2],     []),
        containsV ([1,2],     [1]),
        containsV ([1,2],     [2]),
        containsV ([1,2],     [3]),
        containsV ([1,2],     [1,2]),
        containsV ([1,2],     [2,3]),
        containsV ([1,2],     [1,2,3]),
        containsV ([1,2,3],   [1,2]),
        containsV ([1,2,3],   [2,3]),
        containsV ([1,2,3,4], [1,2]),
        containsV ([1,2,3,4], [2,3]),
        containsV ([1,2,3,4], [3,4]),
        containsV ([1,2,3,4], [1,3])
    ); // T F F T F T T T F T F F T T T T T F
})();


// Bonus 02. Defina uma função recursiva [parts] que calcule as partes de
// um conjunto. As 'Parts' de um conjunto S se definem como o conjunto
// de todos os subconjuntos de S. Por exemplo, parts de [1,2,3] = [
// [], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]. Como mostrado no exemplo
// deve utilizar-se Arrays de Arrays para representar o resultado. A orden
// em que os elementos aparecem dentro do array externo e internos não é rele-
// vante. Ou seja, assumimos por contrato que [1,2] e [2,1] representam o 
// mesmo subconjunto.

(function (/* Bonus 02. parts (v) */) {
    
    var parts = function (v) {

    };

    console.log (
        parts ([1, 2, 3]) // [ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 3 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]
    );
})();