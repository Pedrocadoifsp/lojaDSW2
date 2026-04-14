import './App.css'
import Capa from './Components/Capa'
import Topo from './Components/Topo'
import Produtos from "./Components/Produtos";


function App() {

  return (
    <div>
      <header>
        <Topo />
      </header>

      <main>
        <Capa />
        <Produtos />
      </main>
      </div>
  )
}

export default App

