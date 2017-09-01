// 01. Defina uma função recursiva [reduce] que calcule um
// único valor, resultante ao operar sobre todos os elementos
// de um dado vetor 'v'. A função recebe o vetor, 
// uma operação binária que opera sobre os elementos de 'v'
// um a um e uma base como origem da operação.
// Por exemplo, reduce ([1,2,3], function (x+y){ return x+y; }, 0)
// devolve 0 + 1 + 2 + 3 = 6. 

( function (/* 01. reduce (v, fn, b) */) {
    
    var reduce = function ( v, fn, b ) {
        return ( function reduceAux ( v, fn, p, ac ) {
            return p > v.length - 1
                ? ac 
                : reduceAux ( v, fn, p+1, fn ( ac, v[ p ], p, v ) );
        })( v, fn, 0, b );
    };

    //ES6 -> const reduce = ( v, fn, b ) => ( reduceAux = ( v, fn, p, ac ) => p > v.length - 1 ? ac : reduceAux ( v, fn, p+1, fn ( ac, v[ p ], p, v ) ) )( v, fn, 0, b );
    
    var add = function ( x, y ) { return x + y; };
    var mul = function ( x, y ) { return x * y; };
    var odd = function ( x, y ) { return !y; };
    var cnt = function ( x, y ) { return y+1; };
    console.log (
        reduce ( [ 1,2,3,4,5 ], add, 0 ),       // 15
        reduce ( [ 1,2,3,4,5 ], mul, 1 ),       // 120
        reduce ( [ 1,2,3,4,5 ], odd, true ),    // false
        reduce ( [ 1,2,3,4,5 ], cnt, 0 )        // 6
    );
    
})();

// 02. Defina uma função recursiva [map] que aplique uma operação
// unária a todos os elementos de um vetor de entrada 'v' e o 
// devolva como resultado. Não utilize funções auxiliares 
// disponíveis no protótipo Array.

(function (/* 02. map (v, fn) */){
    
    var reduce = function ( v, fn, b ) {
        return ( function reduceAux ( v, fn, p, ac ) {
            return p > v.length - 1
                ? ac 
                : reduceAux ( v, fn, p+1, fn ( ac, v[ p ], p, v ) );
        })( v, fn, 0, b );
    };
    
    var map = function ( v, fn ) {
        return reduce ( v, function ( ac, e, i, v ) {
            return ac.concat ( fn ( e, i, v ) );
        }, [] );
    };

    // ES6 -> const map = ( v, fn ) => reduce ( v, ( ac, e, i, v ) => ac.concat ( ( fn ( e, i, v ) ) ) , [] )
    
    console.log (
        map ( [ 1,2,3,4,5 ], function ( x ){ return -x; } ),  // [ -1, -2, -3, -4, -5 ]
        map ( [ 1,2,3,4,5 ], function ( x ){ return x*x; } )  // [ 1, 4, 9, 16, 25 ]
    );
    
})();


// 03. Defina uma função recursiva [filter] que aplique um predicado 
// lógico unário a todos os elementos de um vetor de entrada 'v' e 
// devolva outro somente com aqueles elementos que cumpram com o dito
// predicado (quando retornar 'true'). Não utilize funções auxiliares 
// disponíveis no protótipo Array.

(function (/* 03. filter (v, fn) */){
    
    var reduce = function ( v, fn, b ) {
        return ( function reduceAux ( v, fn, p, ac ) {
            return p > v.length - 1
                ? ac 
                : reduceAux ( v, fn, p+1, fn ( ac, v[ p ], p, v ) );
        })( v, fn, 0, b );
    };
    
    var filter = function ( v, pn ) {
        return reduce ( v, function ( ac, e, i, v ) {
            return pn ( e, i, v ) ? ac.concat ( e ) : ac;
        }, [] );
    };

    //ES6 -> const filter = ( v, pn ) => reduce ( v, ( ac, e, i, v ) => pn ( e, i, v ) ? ac.concat ( e ) : ac , [] );
    
    console.log (
        filter ( [ 1,2,3,4,5 ], function ( x ){ return x % 2 === 0; } ), // [ 2, 4 ]
        filter ( [ 1,2,3,4,5 ], function ( x ){ return x % 2 !== 0; } )  // [ 1, 3, 5 ]
    );
    
})();


// 04. Defina uma função recursiva [every] que aplique um predicado
// lógico unário a todos os elementos de um vetor de entrada 'v' e 
// determine se 'todos' eles o satisfazem. Não utilize funções auxiliares 
// disponíveis no protótipo Array.

(function (/* 04. every (v, fn) */){
    
    var reduce = function ( v, fn, b ) {
        return ( function reduceAux ( v, fn, p, ac ) {
            return p > v.length - 1
                ? ac 
                : reduceAux ( v, fn, p+1, fn ( ac, v[ p ], p, v ) );
        })( v, fn, 0, b );
    };
    
    var every = function ( v, pn ) {
        return reduce ( v, function ( ac, e, i, v ) {
            return ac && pn ( e, i, v );
        }, true );
    };

    // ES6 -> const every = ( v, pn ) => reduce ( v, ( ac, e, i, v ) => ac && pn ( e, i, v ), true );
    
    console.log (
        every ( [ 1,2,3,4,5 ], function ( x ){ return x % 2 === 0; } ),   // false
        every ( [ 1,2,3,4,5 ], function ( x ){ return x < 6; } )          // true
    );

})();


// 05. Desenhe uma função recursiva [some] que aplique um predicado
// lógico unário a todos os elementos de um vetor de entrada 'v' e 
// determine se 'algum' deles o satisfazem. Não utilize funções
// auxiliares disponíveis no protótipo Array.

(function (/* 05. some (v, fn) */){
    
    var reduce = function ( v, fn, b ) {
        return ( function reduceAux ( v, fn, p, ac ) {
            return p > v.length - 1
                ? ac 
                : reduceAux ( v, fn, p+1, fn ( ac, v[ p ], p, v ) );
        })( v, fn, 0, b );
    };
    
    var some = function ( v, pn ) {
        return reduce ( v, function ( ac, e, i, v ) {
            return ac || pn ( e, i, v );
        }, false );
    };
    
    //ES6 -> const some = ( v, pn ) => reduce (v, ( ac, e, i, v ) => ac || pn ( e, i, v ) , false )

    console.log (
        some ( [ 1,2,3,4,5 ], function ( x ){ return x % 2 === 0; } ),    // true
        some ( [ 1,2,3,4,5 ], function ( x ){ return x > 6; } )           // false
    );
    
})();


// 06. Defina uma função recursiva [forEach] que aplique uma 
// função unária a todos os elementos de um vetor de entrada 'v'. 
// Não utilize funções auxiliares disponíveis no protótipo Array.

(function (/* 06. forEach (v, fn) */){
    
    var reduce = function ( v, fn, b ) {
        return ( function reduceAux ( v, fn, p, ac ) {
            return p > v.length - 1
                ? ac 
                : reduceAux ( v, fn, p+1, fn ( ac, v[ p ], p, v ) );
        })( v, fn, 0, b );
    };
    
    var forEach = function (v, fn) {
        return reduce (v, function (ac, e, i, v) {
            fn (e, i, v);
        });
    };
    
    // ES6 -> const forEach = ( v, fn ) => reduce ( v, ( ac, e, i, v ) => fn (e, i, v));

    forEach ( [ 1,2,3,4,5 ], console.log );
    forEach ( [ 1,2,3,4,5 ], function ( e, i ) { console.log ( 'v[%d] = %d', i, e ); } );
    
})();