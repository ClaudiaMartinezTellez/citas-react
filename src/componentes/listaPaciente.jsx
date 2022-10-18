

function ListaPaciente() {
    
    return (
        <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll md:h-screen box-sizzing:border-box">
            <h2 className="font-black text-3x1 text-center">Lista Pacientes</h2>
            <p className="text-x1 mb-10 mt-5 text-center ">
                Administra tus <span className=" text-indigo-600 font-bold"> Pacientes/Citas</span>{" "}
            </p>
            <div className="mt-3 py-10 rounded-xl bg-red-100 py-10 px-8 shadow-md px-5">
                <p className="font-bold md-3 text-gray-700">Nombre: <span className="font-normal normal-case">Vulcano</span></p>
                <p className="font-bold md-3 text-gray-700">Propietario: <span className="font-normal normal-case">Claudia Martinez</span></p>
                <p className="font-bold md-3 text-gray-700">Email: <span className="font-normal normal-case">claudia_martinez@yahoo.com.mx</span></p>
                <p className="font-bold md-3 text-gray-700">Alta: <span className="font-normal normal-case">20-Oct-2022</span></p>
                <p className="font-bold md-3 text-gray-700">Sintomas: <span className="font-normal normal">Dolor de pata</span></p>
            </div>
            
            
           
        </div>
    );
}

export default ListaPaciente