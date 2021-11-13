import React from 'react';
import todoicon from './images/todo-icon.png';
import moment from 'moment';
// import {Img } from "react-images"
const Header = () => {
    return <div> 
        <img src={todoicon}  height="150px" alt="Todo"/> 
        <h3>Daily Activity</h3>
        <p>{moment().format('LLLL')}</p>
       {/* <p> {moment().format('dddd') }, { moment().format('MMMM Do YYYY, h:mm:ss a')} </p>  
       <p>{moment().format('L')}</p>
       <p>{moment().format('LL')}</p>
       <p>{moment().format('LLL')}</p>
       <p>{moment().format('LLLL')}</p>
       <p>{moment().format('LLLLL')}</p>    
       <p>{moment().format('LLLLLL')}</p>     */}
        </div> 
}



export default Header;