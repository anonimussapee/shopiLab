import { createContext, useState} from 'react';
import { useLocaleStorage } from './useLocaleStorage';

const ContextSignIn = createContext();

const ContextSignInProvider = ({children}) =>{
  
  const userData = useLocaleStorage('userData',{state:false});


  const [userLogin, setUserLogin] = useState(userData.data.state);

  console.log(userLogin);
  const itsSignIn = () => {
     if(userData.data.state !== false){
    setUserLogin(true);
    console.log('is registred');
  }else{
    setUserLogin(false);
    console.log('is not registred');
  }
  }
 

  return (
      <ContextSignIn.Provider value={{
        userLogin,
        setUserLogin,
        userData,
        // itsSignIn,
      }}>

        {children}
      </ContextSignIn.Provider>
  );
};

export {ContextSignIn, ContextSignInProvider};