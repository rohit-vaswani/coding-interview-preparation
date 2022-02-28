/*

    Source: https://lodash.com/docs/4.17.11#pullAll
    TODO_TAKEAWAY: 
        1. Always think about the input and output first.
        2. then, how to divide them as pure functions.
        3. Them implement them.
        4. Well-defined composable functions (Functional programming - Tech topics)        

*/

const isEqual = ( val , valueObj , identiry ) => true;/* To implement a comparator */
const doesIncludes = (valObj , values , identity) => !!values.find( (val , index) => isEqual(val , valObj , identity) );
const pullAllBy = (array , values , identity) => array.filter( val  => !doesIncludes( val , values , identity ) );