import { useEffect, useState } from 'react';

const useLocaleStorage = (name ,initialValue) =>{

  const [data, Setdata] = useState(initialValue);

  const localData = localStorage.getItem(name);
  useEffect(()=>{
    setTimeout(() => {
      try {
      const jsonData = JSON.parse(localData) || initialValue;
      Setdata(jsonData);

      } catch (error) {
        console.log('error obteniendo datos de locale storage');
      }
    }, 0);
    
  },[]);

  const save = (newData) =>{

    Setdata(newData);
    localStorage.setItem(name, JSON.stringify(newData)); 

  }

  return {data,save };
};

export {useLocaleStorage};