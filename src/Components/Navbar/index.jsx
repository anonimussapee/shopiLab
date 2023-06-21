import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { ContextSignIn } from '../../Context/ContextSignIn'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4';
  const contextOfUser = useContext(ContextSignIn);

  if(contextOfUser.userLogin === true ){
    return (
      <nav className='flex ss:flex-col md:flex-row ss:px-1 xs:justify-between items-center fixed z-10 top-0 w-full py-5 xs:px-8 text-sm font-light bg-white '>
        <ul className='ss:grid ss:grid-cols-3 ss:gap-1 xs:flex xs:justify-center  items-center xs:gap-3'>
          <li className='font-semibold text-lg'>
            <NavLink to='/'>
              Shopi
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              onClick={() => context.setSearchByCategory()}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/clothes'
              onClick={() => context.setSearchByCategory('nuevo')}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/electronics'
              onClick={() => context.setSearchByCategory('electronics')}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/furnitures'
              onClick={() => context.setSearchByCategory('furniture')}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/shoes'
              onClick={() => context.setSearchByCategory('shoes')}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Shoes
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/others'
              onClick={() => context.setSearchByCategory('others')}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Others
            </NavLink>
          </li>
        </ul>
        <ul className='ss:grid ss:grid-cols-3 ss:gap-1 xs:flex xs:justify-center  items-center xs:gap-3'>
          <li className='text-black/60'>
            {contextOfUser.userData.data.userEmail}
          </li>
          <li>
            <NavLink
             
              to='/my-orders'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/my-account'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/sign-in'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              } onClick={()=>{
                let newState = {...contextOfUser.userData.data};
                newState.state = false;
                contextOfUser.userData.save(newState)
                contextOfUser.setUserLogin(false)
              }}>
              Sign out
            </NavLink>
          </li>
          <li className='flex items-center'>
            <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
            <div>{context.cartProducts.length}</div>
          </li>
        </ul>
      </nav>
    )
  }else{
    return (
      <nav className='flex ss:flex-col md:flex-row ss:px-1 xs:justify-between items-center fixed z-10 top-0 w-full py-5 xs:px-8 text-sm font-light bg-white '>
        <ul className='ss:grid ss:grid-cols-3 ss:gap-0 xs:flex xs:justify-center  text-center items-center xs:gap-3'>
          <li className='font-semibold text-lg'>
            <NavLink >
              Shopi
            </NavLink>
          </li>
          <li>
            <NavLink >
              All
            </NavLink>
          </li>
          <li>
            <NavLink  >
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink >
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink  >
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink >
              Shoes
            </NavLink>
          </li>
          <li>
            <NavLink >
              Others
            </NavLink>
          </li>
        </ul>
        <ul className='flex justify-center  items-center gap-3'>
        
          <li>
            <NavLink
              to='/sign-in'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Sign In
            </NavLink>
          </li>
          <li className='flex items-center'>
            <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
            <div>{context.cartProducts.length}</div>
          </li>
        </ul>
      </nav>
    )
  }

  
}

export default Navbar