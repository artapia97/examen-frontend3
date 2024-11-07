import React, { useState } from 'react';
import Card from './Card';
import styles from '../styles/Form.module.css'

const Form = () => {
    const [datos, setDatos] = useState({
        nombre: "",
        pasaporte: "",
        fecha: "",
    });
    const [mostrar, setMostrar] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const fechaActual = new Date();
        const fechaMinima = new Date(fechaActual);
        fechaMinima.setDate(fechaActual.getDate() + 3); //Se debe ingresar una fecha mayor a tres dias despues del dia actual

        const fechaIngresada = new Date(datos.fecha);
        
        if (
            datos.nombre.length >= 3 &&
            !datos.nombre.startsWith(" ") &&
            datos.pasaporte.length >= 6 &&
            datos.fecha &&
            fechaIngresada >= fechaMinima
        ) {
            console.log(datos.fecha >= fechaMinima);
            setMostrar(true);
            setError(false);
        } else {
            setError(true);
        }
    };

    return (
        <div>
            {mostrar ? (
                <Card datos={datos} />
            ) : (
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <input
                        type="text"
                        placeholder="Ingresa tu nombre"
                        className={styles.inputField}
                        onChange={(event) =>
                            setDatos({ ...datos, nombre: event.target.value })
                        }
                    /><br />

                    <input
                        type="text"
                        placeholder="Ingresa tu pasaporte"
                        className={styles.inputField}
                        onChange={(event) =>
                            setDatos({ ...datos, pasaporte: event.target.value })
                        }
                    /><br />

                    <label>Ingresa la fecha de tu vuelo</label>
                    <input 
                        type='date'
                        className='styles.inputField'
                        onChange={(event) => 
                            setDatos({ ...datos, fecha: event.target.value })
                        }
                    /><br />
                    
                    <button className={styles.button}>
                        ENVIAR
                    </button>

                    {error && (
                        <h4 className={styles.error}>
                            Por favor chequea que la información sea correcta.
                        </h4>
                    )}
                </form>
            )}
        </div>
    );
};

export default Form;
