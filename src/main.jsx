import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Landingpage from './Components/Landingpage/Landingpage';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Training from './Components/Training/Training';
import Contactbtn from './Components/Contactbtn/Contactbtn';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    children:[
      {
        path:'/',
        element:<Landingpage/>
      },
      {
        path:'/contact',
        element:<Contactbtn></Contactbtn>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'training',
        element:<Training/>
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
