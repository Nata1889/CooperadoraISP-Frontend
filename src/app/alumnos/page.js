'use client';
import { data } from 'autoprefixer';
import Link from 'next/link';
import React, { useEffect, useState, Suspense} from 'react';

export default function alumnosPage(){

    const [users, setUsers] = useState([]);    //creamos el estado users
    const [userInit, setUserInit] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')      //ejecutamos fetch
        .then((respuesta) => respuesta.json())    //devuelve promesa, y retornamos .json()
        .then(({users}) => {                      //devuelve promesa y actualizamos users
            setUsers(users);
            setUserInit(users);
        })
        .catch(err => console.log(err));
    }, []);

    const searchStudents = (event) => {
        const filtro =  event.target.value;
        const usuariosFiltrados = userInit.filter((user) => user.firstName.toLowerCase().includes(filtro.toLowerCase()))
        setUsers(usuariosFiltrados);
    }

    return (
        <div className="info">
            <div className="data-control">
                <form>
                    <input onKeyUp={searchStudents} type='text' placeholder="Buscra Alumno"/>
                </form>
                    <Link href={'/alumnos/crear'}><button className="nuevoAlumno">Nuevo Alumno</button></Link>
                <table>
                    <thead>
                        <tr>
                            <td className="menu-tabla">id</td>
                            <td className="menu-tabla">Nombre</td>
                            <td className="menu-tabla">Apellido</td>
                            <td className="menu-tabla">Dirección</td>
                            <td className="menu-tabla">Edad</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.emal}</td>
                                <td>{item.age}</td>
                                <td><button className="buttonInfo">Editar</button></td>
                                <td><button className="buttonAcces">Cargar Cobro</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div> 
    )
}