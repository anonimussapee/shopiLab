import { useRoutes, BrowserRouter } from 'react-router-dom'
import {  ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import {SignIn} from '../SignIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'
import { ContextSignIn, ContextSignInProvider } from '../../Context/ContextSignIn'
import { useContext } from 'react'
import { SlideBar } from '../../Components/Navbar/Slidebar'

const AppRoutes = () => {
  const context = useContext(ContextSignIn);
  let routes = useRoutes([
    { path: '/', element:context.userLogin ? <Home /> : <SignIn />},
    { path: '/home', element: context.userLogin ? <Home /> : <SignIn /> },
    { path: '/clothes', element: context.userLogin ? <Home /> : <SignIn /> },
    { path: '/electronics', element: context.userLogin ? <Home /> : <SignIn /> },
    { path: '/furnitures', element: context.userLogin ? <Home /> : <SignIn /> },
    { path: '/shoes', element: context.userLogin ? <Home /> : <SignIn /> },
    { path: '/others', element: context.userLogin ? <Home /> : <SignIn /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {

  return (
      <ContextSignInProvider>
    <ShoppingCartProvider>
         <BrowserRouter>
        <AppRoutes />
        <Navbar />
        
          <SlideBar/>

        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
      </ContextSignInProvider>
  )
}

export default App
