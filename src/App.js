import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashbord from './Pages/Dashbord';
import { Footer, Header } from 'antd/es/layout/layout';
import MainDash from '../src/Pages/Dashbord';
import AppleView from './ViewData/AppleView';
import IqooView from './ViewData/IqooView';
import Motoview from './ViewData/MotoView';
import NotingView from './ViewData/NotingView';
import OnePluseView from './ViewData/OnePluseView';
import PixelView from './ViewData/PixelView';
import RealmeView from './ViewData/RealmeData';
import SamsungView from './ViewData/SamsungView';
import VivoView from './ViewData/VivoView';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Modules/Cart';
import Slice from './ViewData/SliceView/Slice';
import PageNotFound from './Pages/PageNotFound';



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='ReactMobiles' element={<Login/>} />
          <Route path='/signup'element={<Signup/>}/>
          <Route path = '/dashboard' element= {<Dashbord/>}/>
          <Route path = '/maindash' element = {<MainDash/>}/>
          <Route path='/details' element={<ProductDetails/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path="*" element={<PageNotFound />} />
          
          <Route path='/apple' element= {<AppleView/>}/>
          <Route path='/apple/:id' element= {<ProductDetails/>}/>

          <Route path='/iqoo' element = {<IqooView/>}/>
          <Route path='/iqoo/:id' element={<ProductDetails/>} />

          <Route path='/moto' element = {<Motoview/>}/>
          <Route path='/moto/:id' element = {<ProductDetails/>}/>

          <Route path='/nothing' element ={<NotingView/>}/>
          <Route path='/nothing/:id' element={<ProductDetails/>}/>

          <Route path='/onepluse' element={<OnePluseView/>}/>
          <Route path='/onepluse/:id' element={<ProductDetails/>}/>

          <Route path='/pixel' element={<PixelView/>}/>
          <Route path='/pixel/:id' element={<ProductDetails/>}/>

          <Route path='/realme' element ={<RealmeView/>}/>
          <Route path='/realme/:id' element ={<ProductDetails/>}/>

          <Route path='/samsung' element={<SamsungView/>}/>
          <Route path='/samsung/:id' element={<ProductDetails/>}/>

          <Route path='/vivo' element={<VivoView/>}/>
          <Route path='/vivo/:id' element={<ProductDetails/>}/>
          
          
        </Routes>
      </Router>
    </div>
  )
}

export default App
