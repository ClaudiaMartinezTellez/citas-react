//nucleo de mi proyecto
//une los componentes
import Formulario from "./componentes/formulario"
import Header from "./componentes/Header"
import ListaPaciente from "./componentes/listaPaciente"
import Pacientes from "./componentes/pacientes"
import Error from "./componentes/error"
//los estilos se mente coon className en los archivos .jsx
function App() {
  return (
    <div className="mt-20">
      <Header />
      <Formulario />
      <ListaPaciente />
      <Error />
      <Pacientes />
    </div>
  )
}

export default App;
