function Formulario() {
    return (
        <div className="md:w-1/2 mx-5 lg-w-2/5">
            <h2 className="text-center font-black text-3xl mb-5">Seguimento Pacientes</h2>
            <p className="text-center mt5 text-lg mb-10">Añade Paciente <span className="text-indigo-500"> Adiministrarlos</span></p>

            <form className=" bg-red-100 py-10 px-8 shadow-md">
                <div>
                    <label htmlFor="">NOMBRE MASCOTA</label><br />
                    <input 
                    type="text"
                    placeholder="Nombre de la Mascota"
                     />
                </div>
                <div>
                    <label htmlFor="">NOMBRE PROPIETARIO</label><br />
                    <input 
                    type="text"
                    placeholder="Nombre Propietario"
                     />
                </div>
                <div>
                    <label htmlFor="">EMAIL</label><br />
                    <input 
                    type="text"
                    placeholder="Email"
                     />
                </div>
                <div>
                    <label htmlFor="">ALTA</label><br />
                    <input 
                    type="text"
                    placeholder="Alta"
                     />
                </div>
                <div>
                    <label htmlFor="">SINTOMAS</label><br />
                    <input 
                    type="text"
                    placeholder="Sintomas"
                     />
                </div>
            </form>
        </div>
    );
}
export default Formulario