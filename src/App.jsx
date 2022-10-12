//nucleo de mi proyecto
//une los componentes

//import ',/App.css'
import Formulario from "./componentes/formulario"
import Header from"./componentes/Header"
import ListaPaciente from "./componentes/listaPaciente"
import Pacientes from "./componentes/pacientes"
import Error from "./componentes/error"
function App() {

  return(
    <>
    <Header/>
    
    <ListaPaciente/>
    <Formulario/>
    <Error/>
    <Pacientes/>


    </>
  )
}

export default App