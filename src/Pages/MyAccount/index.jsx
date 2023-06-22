import { useContext, useState } from 'react';
import Layout from '../../Components/Layout'
import { ContextSignIn } from '../../Context/ContextSignIn';
import { Link} from 'react-router-dom';

function MyAccount() {

  const context = useContext(ContextSignIn);

  const [dataLogin,setdataLogin] = useState({userName:context.userData.data.userName ,userEmail:context.userData.data.userEmail  ,userPass: context.userData.data.userPass , orders : context.userData.data.orders}); 


  return (
    <Layout>
      My Account
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
        <Link  to='/sign-in' onClick={(e)=>{
          if(dataLogin.userName.length>2 && dataLogin.userEmail.length>5 && dataLogin.userPass.length>2){
            if(dataLogin.userName.length>3 && dataLogin.userEmail.length>5 && dataLogin.userPass.length>3 ){
              let newDataLogin = {...dataLogin};
            newDataLogin.state = false;
            context.userData.save(newDataLogin);
            context.setUserLogin(false);
            }else{
              e.preventDefault();
            }
          }else{
          e.preventDefault();
        }
          }} >
           <button type='submit' className='bg-black w-60 mt-4 rounded-md font-semibold h-auto p-2 text-white' >Edit</button>
        </Link>
       
      </form>
    </Layout>
  );
}

export default MyAccount