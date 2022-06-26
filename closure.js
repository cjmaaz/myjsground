/* 
///!    A closure is the combination of a function bundled together (enclosed) -
///!    with references to its surrounding state (the lexical environment).

///!    In JavaScript, a closure is a function that references variables in the outer scope from its inner scope.
///!    The closure preserves the outer scope inside its inner scope.
*/

// Example 1:


function greeting() {
    let message = 'Hi';

    function sayHi() {
        return message;
    }

    return sayHi();
}

export { greeting }