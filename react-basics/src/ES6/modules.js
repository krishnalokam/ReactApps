
//Name exports , Default Exports
/*********************************************** person.js **********************************/
// Named exports 
export const name="jesse";
export const age=40;

//All at one at the bottom
/*********************************************** person.js **********************************/
const name = "jesse";
const age = 40;
 export {name, age};

 /*********************************************** message.js **********************************/
 //default exports
  const message = () => {
      const name = "jesse",
      const age = 40,
      return name +'is '+ age +' years old'
  }

  export default message;

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  import {name, age} from './person.js';
  import message from './message.js';