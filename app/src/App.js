
import './App.css';
import ToDoList from './Componnets/ToDoList';
import { GlobalStyle } from './Constants';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from './Pages/Homepage';
import Verifica from './Pages/Verifica';
import Adiciona from './Pages/Adicionar';



function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Router>
        <Routes>
          <Route path="/" element= {<ToDoList />} ></Route>
          <Route path="/Homepage" element= {<Homepage />} ></Route>
          <Route path="/Verifica" element= {<Verifica />} ></Route>
          <Route path="/Adicionar" element= {<Adiciona />} ></Route>
  
        </Routes>
    
      </Router>
    </div>
  );
}

export default App;
