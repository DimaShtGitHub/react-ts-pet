import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,
  RouterProvider, } from 'react-router-dom'

import App from './App';
import MainPage from './components/pages/MainPage/MainPage';
import RegPage from './components/pages/RegPage/RegPage';

import { Provider } from 'react-redux';
import {store} from './redux/store'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        // {
        //   path: 'form',
        //   // element: <Form />
        // },
        {
          path: 'main',
          element: <MainPage />
        },
        {
          path: 'reg',
          element: <RegPage />
        }
      ]
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <BrowserRouter >
      <App />
    </BrowserRouter> */}
    <RouterProvider router={router} />
  </Provider>
  
);

