import { useState, useEffect } from 'react';
import Error from './error'; //importo la funcion


function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
    const [mascota, setMascota] = useState(' ');
    const [propietario, setPropietario] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [alta, setAlta] = useState(' ');
    const [sintomas, setSintomas] = useState(' ');
    const [error, setError] = useState('false');

    const generarId = () => {
        const random = Math.random().toString(36)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const validarFormulario = (e) => {
        e.preventDefault()
        if ([mascota, propietario, email, alta, sintomas].includes('')) {
            console.log('Hay al menos un campo vacio')
            setError(true)
            return
        };
        setError(false)
        const objetoPaciente = { mascota, propietario, email, alta, sintomas }
        if (pacientes.Id) {

        } else {
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])
        }

        //-----------limpiando nuestro input
        setMascota('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
    };
    return (
        <div className="md:w-1/2 mx-5 lg-w-2/5">
            <h2 className="text-center font-black text-3xl mb-5">Seguimento Pacientes</h2>
            <p className="text-center mt5 text-lg mb-10">Añade Paciente <span className="text-indigo-500"> Adiministrarlos</span></p>

            <form className=" bg-red-100 py-10 px-8     shadow-md" onSubmit={validarFormulario}>
                {
                    error && <Error><p>Todos los campos son obligatorios</p></Error>
                }


                <div>
                    <label className="block text-gray-700 uppercase font-bold">NOMBRE MASCOTA</label>
                    <br />

                    <input className='p-2 rounded-md w-full mt-2 placeholder-gray-500'
                        type="text"
                        placeholder="Nombre de la Mascota"
                        value={mascota}
                        onChange={(e) => setMascota(e.target.value)
                        }
                    />
                </div>
                <div>
                    <label className="block text-gray-700 uppercase font-bold mt-2">NOMBRE PROPIETARIO</label><br />
                    <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                        type="text"
                        placeholder="Nombre Propietario"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)
                        }
                    />
                </div>
                <div>
                    <label className="block text-gray-700 uppercase font-bold mt-2">EMAIL</label><br />
                    <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)
                        }
                    />
                </div>
                <div>
                    <label className="block text-gray-700 uppercase font-bold mt-2">ALTA</label><br />
                    <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                        type="date"
                        placeholder="Alta"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)
                        }
                    />
                </div>
                <div>
                    <label className="block text-gray-700 uppercase font-bold mt-2">SINTOMAS</label><br />
                    <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                        type="text"
                        placeholder="Sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)
                        }
                    />
                </div>
                <input type="submit" className='bg-indigo-700 text-white uppercase w-full p-3 mt-5 rounded-md hover:bg-indigo-500 cursor-pointer transition-colors font-bold'
                    value={'agregar Paciente'} />

            </form>
        </div>
    );
}
export default Formulario