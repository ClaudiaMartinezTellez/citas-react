//nucleo de mi proyecto
//une los componentes
import Header from "./componentes/Header"
import ListadoPaciente from "./componentes/listaPaciente"
import Formulario from "./componentes/formulario"
import {useState} from "react";
//los estilos se mente coon className en los archivos .jsx
function App() {
  const[pacientes, setPacientes]=useState([])
  const[paciente, setPaciente]=useState({})
  const eliminarPaciente=id=>{const pacientesAct=pacientes.filter(paciente=>paciente.id!==id)
    setPacientes(pacientesAct)
  }
  
  return (
    <div className="mt-20 container mx-auto ">

      <Header
      />
      <div className="md:flex mt-12">
      <Formulario
      pacientes={pacientes} 
      setPacientes={setPacientes}
      paciente={paciente}
      setPaciente={setPaciente}

      
      />
      <ListadoPaciente
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminarPaciente={eliminarPaciente}
      />
      </div>
    </div>
  )
}

export default App;
