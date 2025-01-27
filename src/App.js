import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const novoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrar={colaborador => novoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
