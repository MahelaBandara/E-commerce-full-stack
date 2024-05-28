import React from 'react';
import { Routes , Route} from 'react-router-dom';
import HomePage from '../customer/pages/HomePage/HomePage';
import Cart from '../customer/components/Cart/Cart';
import Navigation from '../customer/components/Navigation/navigation';
import Footer from '../customer/components/Footer/Footer';
import Product from '../customer/components/Product/Product';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';
import Checkout from '../customer/components/Checkout/Checkout';
import Order from '../customer/components/Order/Order';
import OrderDetails from '../customer/components/Order/OrderDetails';
import PaymentSuccess from '../customer/components/Payment/PaymentSuccess';


const CustomerRouters = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>

        <Routes>
            <Route path='/login' element={<HomePage/>}></Route>
            <Route path='/register' element={<HomePage/>}></Route>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/acount/order' element={<Order/>}></Route>
            <Route path='/acount/order/:orderID' element={<OrderDetails/>}></Route>
            <Route path='/payment/:orderID' element={<PaymentSuccess/>}></Route>

        </Routes>

        <div>
            <Footer/>
        </div>

    </div>
  )
}

export default CustomerRouters