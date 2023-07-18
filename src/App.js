import './App.css';
import Input from './components/input/Input'; //o componentsi kullanmak için yapıyoruz bunu
import { Button, LoginButton } from './components/button/Button';
import Form from './components/form/Form';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Login from './components/Login'
import Registration from './components/Registration'
import axios from 'axios';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={< Registration />} />
          <Route path='/login' element={< Login />} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;