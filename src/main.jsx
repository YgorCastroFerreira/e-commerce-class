import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './views/Login/Login.jsx';
import Home from './views/Home/Home.jsx';
import Products from './views/Products/Products.jsx';
import Payment from './views/Payment/Payment.jsx';
import { PRODUCTS_MOCK } from "./mock/products.mock";


const router = createBrowserRouter([
  {
    path: "/",
    element:  <Login />,
  },
  {
    path: "/home",
    element:  <Home data={PRODUCTS_MOCK}/>,
  },
  {
    path: "/products/:productId",
    element:  <Products data={PRODUCTS_MOCK}/>,
  },
  {
    path: "/payment/:payId",
    element:  <Payment data={PRODUCTS_MOCK}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
