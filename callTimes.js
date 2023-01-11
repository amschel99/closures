/**Write a function, callTimes, that returns a new function. 
 * The new function should return the number of times it’s been called.  */
function callTimes(){
    let i=0
    function returnedFunc(){
      i++;
        
console.log(`called ${i} times`)
    }
    return returnedFunc;
}
const test=callTimes()
test()
test()
test()
test()