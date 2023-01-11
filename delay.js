/**Write a function delay that accepts a callback as the first parameter
 *  and the wait in milliseconds before allowing the callback to be invoked 
 * as the second parameter. Any additional arguments after wait are provided 
 * to callBack when it is invoked.
 *  HINT: research setTimeout();  */
function delay(callback,wait){
    function returnedFunc(){
        setTimeout(()=>{callback()},wait)
    }
    return returnedFunc;

}
function sayHi(){
    console.log(`hi, how are you! sorry for making you wait for 5 seconds`)
}
const sayHiAfter5secs=delay(sayHi,5000)
sayHiAfter5secs()