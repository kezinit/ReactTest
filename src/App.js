import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMayName';
import Pessoa from './components/Pessoa';


function App() {
  const nome = "kevin"
  return (
    <div className="App">
      <h1>Aprendendo REACT e JSX</h1>
      <p>Olá, <b>{nome}</b></p>
      <img src="https://via.placeholder.com/150"/>
      <p></p>

      <h1>Usando Componentes</h1>
        <HelloWorld />
        <SayMyName nome="Kevin" />
        <Pessoa nome="Kevin" idade="17" profissao="Estudante" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
