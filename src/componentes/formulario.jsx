import {useState, useEffect } from 'react';
import Error from './error'; //importo la funcion

function Formulario() {
    const [mascota, setMascota] = useState(' ');
    const [propietario, setPropietario] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [alta, setAlta] = useState(' ');
    const [sintomas, setSintomas] = useState(' ');
    const [error, setError] = useState('false');
    const validarFormulario = (e) => {
        e.preventDefault()
        if ([mascota, propietario, email, alta, sintomas].includes('')) {
            console.log('Hay el menos un campo vacio')
           // setError(true)
            return
        };
        //-----------limpiando nuestro input
        setError(false)
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
                <div>
                    {
                        error&&<Error><p>Todos los campos son obligatorios</p></Error>
                    }
                            <div>
                                <label htmlFor="">NOMBRE MASCOTA</label><br />
                                <input
                                    type="text"
                                    placeholder="Nombre de la Mascota"
                                    value={mascota}
                                    onChange={(e) => setMascota(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="">NOMBRE PROPIETARIO</label><br />
                                <input
                                    type="text"
                                    placeholder="Nombre Propietario"
                                    value={propietario}
                                    onChange={(e) => setPropietario(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="">EMAIL</label><br />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="">ALTA</label><br />
                                <input
                                    type="text"
                                    placeholder="Alta"
                                    value={alta}
                                    onChange={(e) => setAlta(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="">SINTOMAS</label><br />
                                <input
                                    type="text"
                                    placeholder="Sintomas"
                                    value={sintomas}
                                    onChange={(e) => setSintomas(e.target.value)
                                    }
                                />
                            </div>
                            <input type="submit" className='bg-indigo-700 text-white uppercase w-full p-3 mt-5 rounded-md hover:bg-indigo-500 cursor-pointer transition-colors font-bold' />
                        </div>
            </form>
        </div>
    );
}
export default Formulario