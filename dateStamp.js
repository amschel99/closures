/**
 * 
 * 
 Create a function dateStamp that accepts a function and returns a function. 
 The returned function will accept however many arguments the passed-in function
  accepts, and return an object with a date key that contains a timestamp
   with the time of invocation, and an output key that contains the result
    from invoking the passed-in function. HINT: 
    You may need to research how to access information on Date objects.

 * 
 */
const months={
    0:"January",
    1:"February",
    2:"March",
    3:"April",
    4:"May",
    5:"June",
    6:"July",
    7:"August",
    8:"September",
    9:"October",
    10:"November",
    11:"December"
}
function dateStamp(func){
    let returnedObject={}
function returnedFunction(args){
returnedObject['date']=months[new Date().getMonth()]+" "+ new Date().getDate()+ " "+new Date().getHours()+ ":"+new Date().getMinutes()+ " "+new Date().getSeconds()+" seconds"+ " "+new Date().getMilliseconds()+" milliseconds";
returnedObject["output"]=func(args)
return returnedObject;
}
return returnedFunction;
}
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
 console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

