import { createContext, useState} from 'react';
import { useLocaleStorage } from './useLocaleStorage';

const ContextSignIn = createContext();

const ContextSignInProvider = ({children}) =>{
  


  const [userLogin, setUserLogin] = useState(false);


  const userData = useLocaleStorage('userData',{});

  const itsSignIn = () => {
     if(userData.data.state === true){
    setUserLogin(true);
    console.log('is registred');
  }else{
    setUserLogin(false);
    console.log('is not registred');
  }
  }

  setTimeout(() => {
  itsSignIn();
  }, 50);
  
 

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