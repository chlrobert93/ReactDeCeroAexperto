import React, { createContext,useState } from 'react';


/* DataProvider  ----------> Sirve como intermediario para que los demas componentes puedan encontrarlo*/
export const DataContext = createContext();


const dataFixed = {
    nombre: 'Eder',
    edad: 35
  }
  

  
export const DataProvider = ({ children }) => {

    const [data, setData] = useState(dataFixed);
    
    /*value es un objecto */
    return(
        <DataContext.Provider value={{
            data,
            setData,
        }}>
            { children }
        </DataContext.Provider>
    )
}