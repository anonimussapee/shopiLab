import { useContext, useState } from 'react'
import Layout from '../../Components/Layout'
import { ContextSignIn } from '../../Context/ContextSignIn';
import { Link } from 'react-router-dom';
import {TrashIcon} from '@heroicons/react/24/solid';

function SignIn() {

  // this will control the user data from input
  const [dataLogin,setdataLogin] = useState({userName:'',userEmail:'',userPass:'', orders : ''}); 

  const [openSignIn, setOpenSignIn] = useState(false);
  let btnActive = 'bg-black';
  let btnInactive = 'bg-gray-500';
  const context = useContext(ContextSignIn);
 
    if(context.userData.data.state === false && context.userData.data.userEmail.length>0 && context.userData.data.userName.length>0){

      return (
        <Layout>
          <h1 className='font-semibold'>Welcome</h1>
          <div className='flex flex-col w-[320px] my-5  mx-auto items-center gap-2'>
            <div className='grid-session gap-2'>
            <p className='font-bold '>Tu Email:</p><p className='text-right'>{context.userData.data?.userEmail}</p>
            <p className='font-bold '>Tu Contraseña:</p><p className=' text-right'>{`*`.repeat(context.userData.data?.userPass.length)}</p>
            <TrashIcon className='trash w-10 h-10' onClick={()=>{
              window.localStorage.clear();
              context.userData.save({});

            }}/>
            </div>
            
            <Link to='/home' onClick={(e)=>{
              let changeState = {...context.userData.data} ;
              changeState.state = true;
              context.userData.save(changeState);
              context.setUserLogin(true);
            }}>
              <button type='submit' className={`${btnActive} w-60 mt-4 rounded-md font-semibold h-auto p-2 text-white `}>Login</button>
          </Link>
          </div>
          <p className='underline underline-offset-2 '>Olvide mi contraseña</p>
          <button type='submit' className={`${btnInactive}  w-60 mt-4 rounded-md font-semibold h-auto p-2 text-white`} >Sign in</button>
           
        </Layout>
      );
    }else if(context.userLogin === false && openSignIn === true){
      return (
        <Layout>
          SignIn
          <form onSubmit={e => e.preventDefault()} className='mt-4 flex flex-col justify-center items-center w-[90%] text-center mx-auto h-auto gap-3'>
            <label htmlFor="userName" className='flex flex-col gap-3 '>
              <span>Ingresa tu Nombre de Usuario</span>
              <input className='border-[2px] border-black rounded-lg p-1'  type="text" id='userName' required placeholder='Nombre ' value={dataLogin.userName} onChange={(e)=>{
    
                let newDataLogin = {...dataLogin};
                 
                newDataLogin.userName= e.target.value;
    
                setdataLogin(newDataLogin)
              }} />
            </label>
            <label htmlFor="userEmail" className='flex flex-col gap-3'>
              <span>Ingresa tu correo</span>
              <input className='border-[2px] border-black rounded-lg p-1'  type="text" id='userEmail' placeholder='unknow@gmail.com' required value={dataLogin.userEmail} onChange={(e)=>{
    
                let newDataLogin = {...dataLogin};
                 
                newDataLogin.userEmail= e.target.value;
    
                setdataLogin(newDataLogin)
              }} />
            </label>
            <label htmlFor="userPass" className='flex flex-col gap-3'>
              <span>Ingresa una contraseña</span>
              <input className='border-[2px] border-black rounded-lg p-1'  type="password" id='userPass' placeholder='·······'  required value={dataLogin.userPass} onChange={(e)=>{
    
                let newDataLogin = {...dataLogin};
                 
                newDataLogin.userPass= e.target.value;
    
                setdataLogin(newDataLogin)
              }} />
            </label>
            <Link to='/home' onClick={(e)=>{
              if(dataLogin.userName.length>2 && dataLogin.userEmail.length>5 && dataLogin.userPass.length>2){
                if(dataLogin.userName.length>3 && dataLogin.userEmail.length>5 && dataLogin.userPass.length>3 ){
                  let newDataLogin = {...dataLogin};
                newDataLogin.state = true;
                context.userData.save(newDataLogin);
                context.setUserLogin(true);
                }else{
                  e.preventDefault();
                }
              }else{
              e.preventDefault();
            }
              }} >
               <button type='submit' className='bg-black w-60 mt-4 rounded-md font-semibold h-auto p-2 text-white' >Login</button>
            </Link>
           
          </form>
        </Layout>
      )
    }else if(context.userLogin === false && Object.keys(context.userData.data).length === 0){

      return (
        <Layout>
          <h1 className='font-semibold'>Welcome</h1>
          <div className='flex flex-col w-[320px] my-5  mx-auto items-center gap-2'>
            <div className='grid grid-cols-2  gap-2'>
            <p className='font-bold '>Tu Email:</p><p className='text-right'> </p>
            <p className='font-bold '>Tu Contraseña:</p><p className=' text-right'></p>
            </div>
            
            
              <button type='submit' className={`${btnInactive} w-60 mt-4 rounded-md font-semibold h-auto p-2 text-white `}>Login</button>
          </div>
          <p className='underline underline-offset-2 '>Olvide mi contraseña</p>
          <button type='submit' className={`${btnActive}  w-60 mt-4 rounded-md font-semibold h-auto p-2 text-white`} onClick={()=>{
            setOpenSignIn(true);
          }} >Sign in</button>
           
        </Layout>
      );
    }
 
  
}

export {SignIn}