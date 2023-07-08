import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ContextSignIn } from '../../Context/ContextSignIn'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const SlideBar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4';
  const contextOfUser = useContext(ContextSignIn);
  const {openSlide} = useContext(ShoppingCartContext)
  const {userLogin} = useContext(ContextSignIn)
  const property = userLogin ? ( <ul className='flex flex-col justify-center  items-center gap-3'>
     
  <li className='text-black/60 '>
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
  <li className=''>
    <NavLink
      to='/my-account'
      className={({ isActive }) =>
        isActive ? activeStyle : undefined
      }>
      My Account
    </NavLink>
  </li>
  <li className=''>
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
  <li className='sm:hidden' >
    <NavLink
      to='/'
      onClick={() => context.setSearchByCategory()}
      className={({ isActive }) =>
        isActive ? activeStyle : undefined
      }>
      All
    </NavLink>
  </li>
  <li className='sm:hidden' >
    <NavLink
      to='/clothes'
      onClick={() => context.setSearchByCategory('clothes')}
      className={({ isActive }) =>
        isActive ? activeStyle : undefined
      }>
      Clothes
    </NavLink>
  </li>
  <li className='sm:hidden' >
    <NavLink
      to='/electronics'
      onClick={() => context.setSearchByCategory('electronics')}
      className={({ isActive }) =>
        isActive ? activeStyle : undefined
      }>
      Electronics
    </NavLink>
  </li>
  <li className='sm:hidden' >
    <NavLink
      to='/furnitures'
      onClick={() => context.setSearchByCategory('furniture')}
      className={({ isActive }) =>
        isActive ? activeStyle : undefined
      }>
      Furnitures
    </NavLink>
  </li>
  <li className='sm:hidden' >
    <NavLink
      to='/shoes'
      onClick={() => context.setSearchByCategory('shoes')}
      className={({ isActive }) =>
        isActive ? activeStyle : undefined
      }>
      Shoes
    </NavLink>
  </li>
  <li className='sm:hidden' >
    <NavLink
      to='/others'
      onClick={() => context.setSearchByCategory('others')}
      className={({ isActive }) =>
        isActive ? activeStyle : undefined
      }>
      Others
    </NavLink>
  </li>
</ul>) :(  <ul className='flex flex-col  justify-center  items-center gap-3'>
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
        </ul>)  
  if(openSlide){

    return (
      <div className='fixed flex items-start py-20 px-10 top-[2rem] right-0 bottom-0 w-[250px] bg-gray-100'>
        {property}
  
      </div>
    )
  }else{
    return null
  }
}
export {SlideBar}