import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Setting from './pages/Setting';
import Navbar from './component/Navbar';
import { Provider } from 'react-redux';
import store from './App/store';
import PrivateRoutes from '../src/component/PrivateRoutes'

const App = () => {
  return(
    <Provider store={store}>
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route element={<PrivateRoutes/>}>
               
              <Route path="/home" element={<Home/>}/>
              <Route path="/setting" element={<Setting/>}/>   
              </Route>  
              </Routes>
        
      </BrowserRouter>
    </Provider>

  );
};

export default App;
