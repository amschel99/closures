
/** Create a function censor that accepts no arguments. 
 * censor will return a function that will accept either two strings,
 *  or one string. When two strings are given, the returned function 
 * will hold onto the two strings as a pair, for future use.
 *  When one string is given, the returned function will return the same string, 
 * except all instances of first strings (of saved pairs) will be replaced with 
 * their corresponding second strings (of those saved pairs).  */

function censor(){
    let pairs=[]
    function returnedFunc(){
        let output=arguments[0]
       if(arguments.length===2){
        //save the pairs
        let pair=[arguments[0],arguments[1]]
     
return pairs.push(pair)

       }
       if(arguments.length===1){
       
        pairs.map((pair)=>{
if(output.includes(pair[0])){
output=output.replace(pair[0],pair[1])

    
}

        })
      
            return output
    
        
       }
    }
    return returnedFunc;
}
const changeScene = censor();
changeScene('dogs', 'cats');
 changeScene('quick', 'slow');
 changeScene('boy','girl')
 changeScene("trousers","dresses")
 console.log(changeScene("I'm a boy, I love wearing trousers"));
 console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'
