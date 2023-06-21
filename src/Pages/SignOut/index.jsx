import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout';
import { useContext } from 'react';
import { ContextSignIn } from '../../Context/ContextSignIn';

const SignOut = () =>{
  
  const context = useContext(ContextSignIn);

  return (
    <Layout>
      <h1>Sign Out</h1>
      <div className='flex flex-wrap w-[320px] my-5  mx-auto justify-center gap-2'>
        <h2 className='w-full text-center'>Tus datos</h2>
        <p className='font-bold w-[45%]'>Tu usuario:</p><p className='w-[45%]'>{context.userData.data.userName}</p>
        <p className='font-bold w-[45%]'>Tu Email:</p><p className='w-[45%]'>{context.userData.data.userEmail}</p>
        <p className='font-bold w-[45%]'>Tu Contraseña:</p><p className='w-[45%]'>{`*`.repeat(context.userData.data.userPass.length)}</p>
        <Link to='/home'>
          <button type='submit' className='bg-black w-60 mt-4 rounded-md font-semibold h-auto p-2 text-white' >Login</button>
      </Link>
      </div>
      <Link to='/sign-out'>
          <button type='submit' className='bg-black w-60 mt-4 rounded-md font-semibold h-auto p-2 text-white' >Sign in</button>
      </Link>
       
    </Layout>
  );
} 

export {SignOut};