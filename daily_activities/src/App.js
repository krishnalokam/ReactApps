import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import moment from 'moment';

function App() {
  return (
   
    <div className="App">
       <Header />      
       <form  className="form-inline">
         <input type="text" size="8" placeholder="time" className="form-control"></input>
         <input type="text" size="30" placeholder="Activity" className="form-control"></input>
         <button className="btn btn-info">Save</button>
       </form>
       <hr />
    </div>
  );
}

export default App;

/* References: https://github.com/AndrewChristianto/DailyActivity-react-js*/