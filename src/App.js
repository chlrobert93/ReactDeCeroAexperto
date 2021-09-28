import React  from 'react';
import { BotonCambiarData } from './components/BotonCambiarData';
import { Pagina1 } from './components/Pagina1';
import { Pagina2 } from './components/Pagina2';
import {DataProvider} from './components/context/DataContext';


function App(){



  return (
    <DataProvider>
      <div className="container">
        <Pagina1 />
        <Pagina2 />
        <BotonCambiarData />
      </div>
    </DataProvider>
  );
}


export default App;