import React,{ useContext} from 'react';
import { DataContext } from './context/DataContext';


const data = {
    nombre: 'Pedro',
    edad: 30
}

export const BotonCambiarData = () => {

    const { setData  } = useContext(DataContext);
        return(
        <div>
            <button 
            className="btn btn-primary"
            onClick={ () => setData(data) }
            >
                Cambiar Data
            </button>
        </div>
    )
}