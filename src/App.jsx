//nucleo de mi proyecto
//une los componentes
import Header from "./componentes/Header"
import Formulario from "./componentes/formulario"
import ListaPaciente from "./componentes/listaPaciente"
import Pacientes from "./componentes/pacientes"

//los estilos se mente coon className en los archivos .jsx
function App() {
  return (
    <div className="mt-20">
      <Header />
      <Formulario />
      <ListaPaciente />
      <Pacientes />
    </div>
  )
}

export default App;
