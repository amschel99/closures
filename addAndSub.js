

/**
 * 
 Create a function defineFirstArg that accepts a 
 function and an argument. 
 Also, the function being passed in will accept at least one argument. 
 defineFirstArg will return a new function that invokes the passed-in function 
 with the passed-in argument as the passed-in function's first argument. 
 Additional arguments needed by the passed-in 
 function will need to be passed into the returned function. 
 * 
 * 
 * 
 */
//SOLUTION BELOW

function defineFirstArg(func, arg) {
    function returnedFunc (...params){
   return func(arg,...params) ;
      
   }
     return returnedFunc;
   
   }
   
  
    function subtract() {
    let diff=arguments[0]
   
      for(let i=1; i<arguments.length;i++){
        diff-=arguments[i]
      }
      return diff;
    };

    function add() {
      let sum=0;
     
        for(let i=0; i<arguments.length;i++){
          sum+=arguments[i]
        }
        return sum;
      };
    const subFrom20 = defineFirstArg(subtract, 20);

    console.log(subFrom20(5)); // => should log 15
    const addTo5=defineFirstArg(add,5)
  console.log( addTo5(5,2))//should log 12