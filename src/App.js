import { Routes, Route } from "react-router-dom";
import MainPage from './page/MainPage.js'
import RegisterPage from "./page/RegisterPage.js";
import LoginPage from './page/LoginPage.js';
import ErrorPage from './page/ErrorPage.js';

function App(){
  return <Routes>
    <Route path="/" element={<MainPage/>}></Route>
    <Route path='/register' element={<RegisterPage/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>
    <Route path='*' element={<ErrorPage/>}></Route>
  </Routes>
}

export default App;

