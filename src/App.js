//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
import Login from './Components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Trainer from './Components/Trainer';
// import Home from './Components/Home';
import AddTrainer from './Components/AddTrainer';
import EditTrainers from './Components/EditTrainers';
import Dashh from './Components/Dashh';
import BarChartt from './Components/BarChartt';
import PieOne from './Components/PieOne';
import Timet from './Components/Timet';
function App() {
  const [show,showlogin]=useState(true);
  return (
      <BrowserRouter>
       <Routes> 
       <Route path='/login'  element={<Login/>} ></Route>
       <Route path='/' element={<Dashboard/>} >
   
          <Route path='' index element={<Trainer/>}></Route>
          <Route path='/dashh/:namee' element={<Dashh/>}></Route>
          <Route path='/create' element={<AddTrainer/>}></Route> 
          <Route path='/trainerEdit/:namee' element={<EditTrainers/>}></Route>
          <Route path='/BarChartt' element={<BarChartt />}></Route>
          <Route path='/PieOne' element={<PieOne />}></Route>
          
       </Route>
       </Routes>
      </BrowserRouter>
         // <Timet></Timet>
      );
}

export default App;
