function Paciente({ paciente,setPaciente, eliminarPaciente }) {
    const { mascota, propietario, email, alta, sintomas } = paciente
    const eliminarFormulario = () => {
        const respueta = confirm("confirmar eliminar paciente")
        if (respueta) {
            eliminarPaciente(id)
        }
    }
    return (
        <div className="bg-stale-300 shadow-md px-5 mx-5">
            <p className="font-bold  text-gray-700">nombre-Mascota: <span className="font-normal normal-case">{mascota} </span> </p>

            <p className="font-bold text-gray-700">Propietario: <span className="font-normal normal-case">{propietario} </span> </p>

            <p className="font-bold text-gray-700">Email: <span className="font-normal normal-case">{email} </span> </p>

            <p className="font-bold text-gray-700">Alta: <span className="font-normal normal-case">{alta} </span> </p>


            <p className="font-bold text-gray-700">Sintomas: <span className="font-normal normal-case">{sintomas} </span> </p>
            <div
                className="flex justify-between mt-10">
                <button
                    type="button"
                    className="bg-red-600 hover:bg-red-700 text-white px-10 uppercase rounded-lg" onClick={eliminarFormulario}> Eliminar </button>

                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 uppercase rounded-lg"  onClick={()=>setPaciente(paciente)}
                    > 
                   
                    Editar</button>

            </div>

        </div>
    )
}

export default Paciente