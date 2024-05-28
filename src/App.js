
import './App.css';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer'
import Navigation from './customer/components/Navigation/navigation';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element = {<CustomerRouters/>}></Route>
      </Routes>
      
    <div>
      {/* <Checkout/> */}
      {/* <Order/> */}
      {/* <OrderDetails/> */}
    </div>
      
    </div>
  );
}

export default App;
