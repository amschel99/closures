/**
 * 
 Write a function after that takes the number of times the callback needs 
 to be called before being executed as the first parameter and the callback 
 as the second parameter. 
 * 
 */
function after(num,callback){
let i=0;
function tryExecutingTheCallBack(){
   
    if(i<num){
       
   
      console.log(`cannot yet execute the call back`)
      return i++;
    }
    if(i===num){

         callback()
         return i++;
    }
    else{
        console.log(` your callback was already executed ,sorry`)
        return i++;
    }
    
}
return tryExecutingTheCallBack;
}
function printQuote(){
    console.log(`Everywhere man blames nature and fate.Yet his fate is nothing but an echo of his character and passions. His mistakes and weaknesses!`)
}
const tryQuote=after(3,printQuote);
tryQuote()
tryQuote()
tryQuote()
tryQuote()
tryQuote()