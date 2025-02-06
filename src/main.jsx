import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Signin from './components/pages/Signin.jsx'
import Signup from './components/pages/Signup.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './components/pages/Home.jsx'
import 'remixicon/fonts/remixicon.css'
import Soil from './components/Soil.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Soil />,
      },
      {
        path: '/signin',
        element: (
            <Signin />
        )
      },
      {
        path: "/signup",
        element: (
                <Signup />
        ),
      },



    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
