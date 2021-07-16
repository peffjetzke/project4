import { isValidURL } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

/*remove once event handlers are in*/
//console.log(checkForName);

// alert("I EXIST")
// console.log("CHANGE!!");
/*remove once event handlers are in*/

//need a event listener for submit calling handleSubmit
document.querySelector("form").addEventListener("submit", handleSubmit);

//do I need exports of the imports to keep passing them along?
export {handleSubmit, isValidURL
}
