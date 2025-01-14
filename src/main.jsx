import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router';
import App from './App.jsx'
import Home from './components/Home.jsx';
import BrowseBook from './components/BrowseBook.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import BookDetails from './components/BookDetails.jsx';
import Category from './components/Category.jsx';
const routes = createBrowserRouter([
  {
    path:'',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/browse+book+page',
        element:<BrowseBook/>
      },
      {
        path:'/books/:id',
        element:<BookDetails />
      },
      {
       path:'/browse+book+page/books/:id',
       element:<BookDetails />
      },
      {
       path:'/category/:name',
       element:<Category/>
      },{
        path:'/category/',
        element:<BookDetails />
      }
      
    ],
    errorElement:<ErrorPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
