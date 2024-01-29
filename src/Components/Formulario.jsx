import { useState } from "react"

export default function Formulario(){
    let [nombre,setNombre] = useState(null)
    let [apellido,setApellido] = useState(null)
    let [dni,setDni] = useState(null)
    let [email,setEmail] = useState(null)

    return(
        <form className="flex flex-col justify-center items-center border border-black rounded-md p-5" onSubmit={(e)=>{
            e.preventDefault()

            if(!nombre && !apellido && !dni && !email) alert('Completar datos')
            
            alert('Datos enviados')
            
        }}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre"  onChange={(e)=>setNombre(e.currentTarget.value)} className="border border-black"/>
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido"  onChange={(e)=>setApellido(e.currentTarget.value)} className="border border-black"/>
            <label htmlFor="dni">Dni</label>
            <input type="text" id="dni"  onChange={(e)=>setDni(e.currentTarget.value)} className="border border-black"/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"  onChange={(e)=>setEmail(e.currentTarget.value)} className="border border-black"/>
            <input type="submit" className=" bg-red-500 w-full mt-5 text-white"/>
        </form>
    )
}