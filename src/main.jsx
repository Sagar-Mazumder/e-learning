import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Main from './components/Layout/Main.jsx';
import Teachers from './components/Teachers/Teachers.jsx';
import Courses from './components/Courses/Courses.jsx';
import Pages from './components/Pages/Pages.jsx';
import News from './components/News/News.jsx';
import Contact from './components/Contact/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
      ,
      {
        path: 'teachers',
        element: <Teachers></Teachers>
      }
      ,
      {
        path: 'courses',
        element: <Courses></Courses>
      }
      ,
      {
        path: 'pages',
        element: <Pages></Pages>
      }
      ,
      {
        path: 'news',
        element: <News></News>
      }
      ,
      {
        path: 'contact',
        element: <Contact></Contact>
      }
      ,
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
