import './App.css';
import HelloWorld from './components/HelloWorld';


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
    </div>
  );
}

export default App;
