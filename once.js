/**
  
 Write a function once that accepts a callback 
 as input and returns a function. 
 When the returned function is called the first time, 
 it should call the callback and return that output. 
 If it is called any additional times, 
 instead of calling the callback again it will simply return the 
 output value from the first time it was called.  

 */

function once (callback){
    let output=null
    function returnedFunction(num){
 if(!output){
output=callback(num)
return output;
        }
        return output;
    }
    return returnedFunction;
}
const addBy2= function (num){
    return num +2;
}
const addBy2Once=once(addBy2)
console.log(addBy2Once(2))
console.log(addBy2Once(3))
console.log(addBy2Once(4))
