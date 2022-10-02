import "./App.css";
import FormCadastroCliente from "./components/FormCadastroCliente";
import FormCadastroContato from "./components/FormCadastroContato";

function App() {
  return (
    <div className="App">
      <FormCadastroCliente></FormCadastroCliente>
      <FormCadastroContato></FormCadastroContato>
    </div>
  );
}

export default App;
