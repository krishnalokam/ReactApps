import react from 'react';
import ReactDOM from 'react-dom';

const myArray = ['Apple','Banana','Orange'];
const myList = myArray.map((item) => <p>{item}</p>);

ReactDOM.render(myList,document.getElementsById('root'));