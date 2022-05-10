import Header from './components/Header';
import './App.css';


function App() {
const dados = {
  nome: "Antonia Geiza",
  Empresa: "Fiap",
  site:"https://www.fiap.com.br",
  className:"App-link",
  

};

  return (
    //JSX -JavaScrip Extensible
    <div className="App">
      <Header title ="Bem vindo! Bom almoço" options={dados}/>
    </div>
  );
}

export default App;
