import React, { useRef } from 'react'
import { io, Socket } from 'socket.io-client'

const Join = (props) => {
//Hooks
const usernameRef = useRef(null);

const handleSubmit = async () => {
    const username = usernameRef.current.value;


    if(!username.trim()) {
        alert("Por favor, digite um nome de usuário válido.")
        return;
    }
    
    const servidorSocket = await io.connect("http://192.168.10.123:3001")
    servidorSocket.emit("set_username",username);

console.log(`${username} acabou de entrar no chat!`)

props.visibility(true);
props.setSocket(servidorSocket);

};

// Criando a conexão com servidor  socket



  return (
    <div className='text-center'>
        <h1>devChat</h1>
        <div className='container bg-secondary rounded-4 py-4 px-5 shadow d-flex flex-column justify-content-center align-items-center gap-3 text-light mt-4'>
                <h4>Bem-vindo ao DevChat!</h4>
        <input ref={usernameRef} type='text'  className=' w-100 text-center bg-light rounded-3 border-0 border-bottom border-light text-dark my-4' placeholder='Digite seu usuário...'
        onKeyDown={(e) => {e.key == "Enter" && handleSubmit()}}/>
        <button className='btn btn-light w-100' onClick={() => handleSubmit()}>Entrar</button>
        </div>
    </div>
  )
}

export default Join