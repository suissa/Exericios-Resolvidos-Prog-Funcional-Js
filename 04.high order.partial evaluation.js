// 01. Vários problemas em 1. 
//
// Problema 1. Em um sistema de e-commerce temos em mão um
// carrinho de compras na variável 'basket'. Cada produto 
// possui um tipo (type - F: Food, H: Home), o número de
// unidades (units) e o preço por unidade (price). Definir
// as funções [food] e [home] que devolvam a coleção de 
// artigos de tipo F e H respectivamente, [any] que devolve 
// a coleção inteira sem filtrá-la por tipo, [costF] que calcula
// o custo total de alimentos, [costH] o custo total de
// produtos home e [cost] o custo total de todo o carrinho.
//
// Problema 2. Temos em mão uma coleção de dados de usuários 
// na variável users. De cada usuario se conhece seu gênero 
// (gender - M: Male F: Female) e sua idade (age). Calcular a
// função [male] e [female] para filtrar por homens e mulheres
// respectivamente, [both] para devolver a coleção inteira sem 
// filtrar, [meanM] que devolve a idade média dos homens, [meanF]
// que faz o mesmo para o conjunto dos homens e [mean] que 
// calcula a média de idade para ambos os gêneros.

// Problema 3. Além das funções solicitadas no enunciado,
// você criou funções a mais para resolver o conjunto de problemas?
// são distintas? Em caso afirmativo, refatorar para resolver ambos
// os problemas com a mesma função genérica.

(function (/* 01. zip */){
    
    var reduce = function ( v, fn, b ) {
        return ( function reduceAux ( v, fn, p, ac ) {
            return p > v.length - 1
                ? ac 
                : reduceAux (v, fn, p+1, fn (ac, v[p], p, v));
        })( v, fn, 0, b );
    };
    var filter = function ( v, pn ) {
        return reduce (v, function ( ac, e, i, v ) {
            return pn ( e, i, v ) ? ac.concat ( e ) : ac;
        }, []);
    };
    
    var zip = function ( pn, rn, b ) {
        return function ( v ) {
            return reduce ( filter ( v, pn ), rn, b );
        };
    };
    
    var basket = [
        { type: 'F', units: 3, price: 500 },
        { type: 'F', units: 2, price: 750 },
        { type: 'H', units: 1, price: 250 },
        { type: 'F', units: 1, price: 320 },
        { type: 'H', units: 1, price: 100 },
    ];
    var withType = function ( type ) {
        return function ( e ) { return type ? e.type === type : true; };
    };
    var food  = withType ( 'F' );
    var home  = withType ( 'H' );
    var any   = withType ();
    var add   = function ( ac, e ) { return ac + e.units * e.price; };
    var costF = zip ( food, add, 0 );
    var costH = zip ( home, add, 0 );
    var cost  = zip ( any, add, 0 );
    
    var users = [
        { gender: 'F', age: 32},
        { gender: 'F', age: 26},
        { gender: 'M', age: 28},
        { gender: 'F', age: 16},
        { gender: 'M', age: 46},
    ];
    var withGender = function ( gender ) {
        return function ( e ) { return gender ? e.gender === gender : true; };
    };
    var male   = withGender ( 'M' );
    var female = withGender ( 'F' );
    var both   = withGender ();
    var aggr   = function ( ac, e, i ) {
        return { 
            age: Math.trunc ( ( ac.total + e.age ) / ( i+1 ) ), 
            total: ac.total + e.age
        };
    };
    var meanM = zip ( male, aggr, { age: 0, total: 0 } );
    var meanF = zip ( female, aggr, { age: 0, total: 0 } );
    var mean  = zip ( both, aggr, { age: 0, total: 0 } );
    
    console.log (
        food ( basket[0] ),   // true 
        food ( basket[2] ),   // false 
        home ( basket[0] ),   // false
        home ( basket[2] ),   // true 
        costF ( basket ),     // 3320 
        costH ( basket ),     // 350 
        cost ( basket )       // 3670
    );
    console.log (
        meanM ( users ),      // { age: 37, total: 74 } 
        meanF ( users ),      // { age: 24, total: 74 } 
        mean ( users )        // { age: 29, total: 148 }
    );
    
})();


// 02. Dado um objeto, defina uma função [get] que, avaliada parcialmente,
// receba um objeto 'o' e depois uma chave 'k', e retorne o valor de 'k'
// dentro de 'o'. Depois, defina a função [pluck], que também em avaliação
// parcial, receba primero um vetor de objetos 'v' e depois uma chave 'k'. [Pluck] 
// deve devolver a coleção de valores em cada uma das chaves 'k' que aparecem
// dentro de todos os objetos de 'v'. 

(function (/* 02. get & pluck */){
    
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
        }, []);
    };
    
    var get = function ( k ) {
        return function ( e ) {
            return e[ k ];
        };
    };
    var pluck = function ( k ) {
        return function ( v ) {
            return map ( v, get( k ) );
        };
    };
    var basket = [
        { type: 'F', units: 3, price: 500 },
        { type: 'F', units: 2, price: 750 },
        { type: 'H', units: 1, price: 250 },
        { type: 'F', units: 1, price: 320 },
        { type: 'H', units: 1, price: 100 },
    ];
    var types = pluck ( 'type' );
    var units = pluck ( 'units' );
    var prices = pluck ( 'price' );
    
    console.log (
        types ( basket ),     // [ 'F', 'F', 'H', 'F', 'H' ] 
        units ( basket ),     // [ 3, 2, 1, 1, 1 ] 
        prices ( basket )     // [ 500, 750, 250, 320, 100 ]
    );
})();


// 03. Defina as funções [first] e [last] que recebem uma função 'fn' como
// primeiro parâmetro e um conjunto indefinido de outros 'n' parâmetros. [First] 
// deve devolver outra função resultado de avaliar 'fn' em seus 'n' primeiros parâmetros.
// [Last] faz o mesmo porém a função devolvida é o resultado de avaliar 'fn' em seus 
// 'n' últimos parâmetros. 

(function (/* 03. first & last */){
    
    var first = function () {
        var fn = arguments[ 0 ];
        var params = [].slice.call ( arguments, 1 );
        return function () {
            var args = [].slice.call ( arguments );
            return fn.apply ( null, params.concat ( args ) );
        };
    };
    
    var last = function () {
        var fn = arguments[ 0 ];
        var params = [].slice.call ( arguments, 1 );
        return function () {
            var args = [].slice.call ( arguments );
            return fn.apply ( null, args.concat ( params ) );
        };
    };
    
    var ip = function ( a, b, c, d ) { return [ a, b, c, d ]; };
    var ipLocal = first ( ip, 192, 168 );
    var ipGate  = last ( ip, 1, 1 );
    
    console.log (
        ipLocal ( 12, 45 ),   // [ 192, 168, 12, 45 ]
        ipLocal ( 23, 76 ),   // [ 192, 168, 23, 76 ]
        ipGate ( 15, 29 )     // [ 15, 29, 1, 1 ]
    );
    
})();

// 04. Defina a função [partial] que recebe uma função 'fn' e um número inteiro 'n'
// como parâmetros. O resultado de avaliar [partial] gera uma nova função que
// invoca a função 'fn' passando a ela somente seus 'n' primeiros parâmetros.

(function (/* 04. partial */){
    
    var reduce = function ( v, fn, b ) {
        return (function reduceAux ( v, fn, p, ac ) {
            return p > v.length - 1
                ? ac
                : reduceAux ( v, fn, p+1, fn ( ac, v[ p ], p, v ) );
        })( v, fn, 0, b );
    };
    var map = function ( v, fn ) {
        return reduce ( v, function ( ac, e, i, v ) {
            return ac.concat ( fn ( e, i, v ) );
        }, []);
    };
    
    var partial = function ( fn, n ) {
        return function () {
            var args = [].slice.call ( arguments, 0, n );
            return fn.apply ( null, args );
        };
    }; 
    
    console.log (
        map ( [ '1', '2', '3', '4' ], parseInt ),
        map ( [ '1', '2', '3', '4' ], function ( e ) { return parseInt ( e ) } ),
        map ( [ '1', '2', '3', '4' ], partial ( parseInt, 1 ) )
    ); // [ 1, NaN, NaN, NaN ] [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]
    
})();

// 05. Defina a função [curry] que recebe uma função 'fn' e a transforme
// em outra função que é avaliável parcialmente. O número de parâmetros 
// que podem ser passados em cada invocação não deve estar de modo algum
// limitado.

(function (/* 05. curry */){
    
    var curry = function ( fn ) {
        return function aux () { 
            var argsA = [].slice.call ( arguments );
            return ( argsA.length >= fn.length )
                ? fn.apply ( null, argsA )
                : function () { 
                    var argsB = [].slice.call ( arguments );
                    return aux.apply ( null, argsA.concat( argsB ) ); };
        };
    };
    
    var add = function ( x, y ) { return x + y; };
    var mul = function ( x, y ) { return x * y; };
    var cadd = curry ( add );
    var cmul = curry ( mul );
    var inc    = cadd ( 1 );
    var dec    = cadd ( -1 );
    var double = cmul ( 2 );
    var triple = cmul ( 3 );
    
    console.log (
        inc ( 3 ),        // 4
        dec ( 4 ),        // 3
        double ( 5 ),     // 10
        triple ( 6 )      // 18
    );
})();