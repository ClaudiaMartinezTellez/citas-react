import Paciente from "./pacientes";

function ListadoPaciente({ pacientes, setPaciente }) {
    //console.log (paciente)
    return (
        <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll md:h-screen box-sizzing:border-box">
            <h2 className="font-black text-3x1 text-center">Listado Paciente</h2>
            <p className="text-x1 mb-10 mt-5 text-center ">
                Administra tus <span className=" text-indigo-600 font-bold"> Pacientes/Citas</span>{" "}
            </p>
            {pacientes.map((paciente) => (
                <Paciente
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente} />
            ))}
            <>
                <h2 className="font-black text-3x1 text-center">No hay pacientes </h2> 
    <p> Comienza agregar pacientes 
        <span> Y aparceran en este lugar</span></p>
            </>
        </div>
    );
}

export default ListadoPaciente