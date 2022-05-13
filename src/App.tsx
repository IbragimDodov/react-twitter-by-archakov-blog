import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {SignIn} from './pages/SignIn';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
