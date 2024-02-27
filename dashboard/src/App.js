//import logo from './logo.svg';
import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import F1 from './Form/F1.js';
import Color from './pages/Color.js'
import Side from './Header/Side.js';
import Dashboard from './pages/Dashboard.js';
import Typography from './pages/Typography.js';
import Chart from './pages/Chart.js';
import Docs from './pages/Docs.js';
import Widget from './pages/Widget.js';
import Notification from './pages/Notification.js';
import Page from './pages/Page.js';
import Base from './pages/Base.js';
import Buttons from './pages/Buttons.js';
import Formy from './pages/Formy.js';
import Icons from './pages/Icons.js';
import Cls from './pages/Cls.js';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/side' element={<Side />}>
            <Route path='dashboard' element={<Dashboard />}></Route>
            <Route path='home' element={<Dashboard />}> </Route>
            <Route path='color' element={<Color />}></Route>
            <Route path='typo' element={<Typography />}></Route>
            <Route path='chart' element={<Chart />}></Route>
            <Route path='docs' element={<Docs />}></Route>
            <Route path='widget' element={<Widget />}></Route>
            <Route path='Noti' element={<Notification />}></Route>
            <Route path='page' element={<Page />}></Route>
            <Route path='base' element={<Base />}></Route>
            <Route path='btn' element={<Buttons />}></Route>
            <Route path='formm' element={<Formy />}></Route>
            <Route path='icon' element={<Icons />}></Route>
            <Route path='state' element={<Cls />}></Route>
          </Route>
          <Route path='/dash1' element={<Side />}>
            <Route path='dashboard' element={<Dashboard />}></Route>
            <Route path='home' element={<Dashboard />}> </Route>
            <Route path='color' element={<Color />}></Route>
            <Route path='typo' element={<Typography />}></Route>
            <Route path='chart' element={<Chart />}></Route>
            <Route path='docs' element={<Docs />}></Route>
            <Route path='widget' element={<Widget />}></Route>
            <Route path='Noti' element={<Notification />}></Route>
            <Route path='page' element={<Page />}></Route>
            <Route path='base' element={<Base />}></Route>
            <Route path='btn' element={<Buttons />}></Route>
            <Route path='formm' element={<Formy />}></Route>
            <Route path='icon' element={<Icons />}></Route>
          </Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
