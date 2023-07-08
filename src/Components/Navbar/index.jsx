import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Bars3Icon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { ContextSignIn } from '../../Context/ContextSignIn'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4';
  const contextOfUser = useContext(ContextSignIn);

  if(contextOfUser.userLogin === true ){
    return (
      <nav className='flex px-1 items-center justify-center fixed z-10 top-0 w-full h-[3rem]  text-sm font-light bg-white '>
        <ul className='flex justify-end w-full h-3rem items-center gap-5'>
          <li className='font-semibold text-lg pt-4'>
            <NavLink to='/'>
              Shopi
            </NavLink>
          </li>
          <li className='smMax:hidden smMax:w-0 sm:h-0'>
            <NavLink
              to='/'
              onClick={() => context.setSearchByCategory()}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              All
            </NavLink>
          </li>
          <li className='smMax:hidden smMax:w-0 sm:h-0'>
            <NavLink
              to='/clothes'
              onClick={() => context.setSearchByCategory('clothes')}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Clothes
            </NavLink>
          </li>
          <li className='smMax:hidden smMax:w-0 sm:h-0'>
            <NavLink
              to='/electronics'
              onClick={() => context.setSearchByCategory('electronics')}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Electronics
            </NavLink>
          </li>
          <li className='smMax:hidden smMax:w-0 sm:h-0'>
            <NavLink
              to='/furnitures'
              onClick={() => context.setSearchByCategory('furniture')}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Furnitures
            </NavLink>
          </li>
          <li className='smMax:hidden smMax:w-0 sm:h-0'>
            <NavLink
              to='/shoes'
              onClick={() => context.setSearchByCategory('shoes')}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Shoes
            </NavLink>
          </li>
          <li className='smMax:hidden smMax:w-0 sm:h-0'>
            <NavLink
              to='/others'
              onClick={() => context.setSearchByCategory('others')}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Others
            </NavLink>
          </li>
          <li>
            <Bars3Icon className='w-10 h-10' onClick={()=>{
              context.closeCheckoutSideMenu()
              context.closeProductDetail()
              context.setOpenSlide(!context.openSlide)
            }}/>
          </li>
        </ul>
       
      </nav>
    )
  }else{
    return (
      <nav className='flex  px-1 justify-between items-center fixed z-10 top-0 w-full h-[3rem]  xs:px-8 text-sm font-light bg-white '>
        <ul className=' flex justify-end w-full text-center items-center gap-3'>
          <li className='font-semibold text-lg'>
            <NavLink >
              Shopi
            </NavLink>
          </li>
         
          <li>
            <Bars3Icon className='w-10 h-10' onClick={()=>{
              context.closeCheckoutSideMenu()
              context.closeProductDetail()
              context.setOpenSlide(!context.openSlide)
            }}/>
          </li>
        </ul>
      
      </nav>
    )
  }

  
}

export default Navbar