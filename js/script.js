// declare a function
function formatName(firstName,lastName){
console.log(firstName);
console.log(lastName);
console.log(lastName + ' ' + firstName );// save to server

var formattedName = lastName + ' ' + firstName ;

if(!localStorage.getItem('userFullName')){

}else{
    localStorage.setItem('userFullName',formattedName);
}

// localStorage.setItem('userFullName',formattedName);//save to local storage


return formattedName;



};

var userFirstName='Pravallika';
var userLastName='Ammineni';

formatName(userFirstName,userLastName);

//parameters
//arguments

console.log (formatName(userFirstName,userLastName));



// function expression

var createUserObj=function(firstName,lastName){
    var userObj={
        name:formatName(userFirstName,userLastName),
        age:null

    };
    return userObj;

}(userFirstName,userLastName);//add last set of paranthesis to evaluate function immediately

// console.log (createUserObj);

//function constructor

var concatinate = new Function('x','y','return x+y');
// console.log(concatinate('Pravallika','Ammineni'));