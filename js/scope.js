//global scope

var globalVar= 'Hello World!';

function sayHello(){
    console.log(globalVar);
    //local function scope
    var funcVar='I\'m  scoped inside function';
    console.log(funcVar);
}
sayHello();
console.log(globalVar);
//block scope
if (true){
    var blockVar='I\'m  scoped inside block';
    // let blockVar='I\'m  scoped inside block';allows for reassignment
    // const blockVar='I\'m  scoped inside block';cannot be reassigned
    console.log(blockVar);

}

console.log(blockVar);

function secondFunction(){
    var funcVar='I\'m  scoped inside function';
    console.log(funcVar);
    
}
secondFunction();



function outerFunction(){
    const outer = 'I\'m defined in outerFunction';
    console.log (outer);

    function innerFunction(){
        const inner = 'I\'m defined in innerFunction';
    console.log (inner);
    }
    innerFunction();
    // console.log(inner);
    return innerFunction();
}
outerFunction();
    console.log(outerFunction);

     //innerFunction(); //it is nested so cannot access outside
    