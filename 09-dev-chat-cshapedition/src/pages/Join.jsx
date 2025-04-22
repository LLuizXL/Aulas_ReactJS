import React, { useRef } from 'react'
import * as signalR from '@microsoft/signalr'

const Join = (props) => {
//Hooks
const usernameRef = useRef(null);

const handleSubmit = async () => {
    const username = usernameRef.current.value;


    if(!username.trim()) {
        alert("Por favor, digite um nome de usuário válido.")
        return;
    }
    
    const connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:5298/chat")
    .withAutomaticReconnect()
    .build();


    try {
      
      await connection.start();
                                             
      const connectionId = await connection.invoke("UserId");
      await connection.invoke("SetUsername", username); // método no backend

      alert("Você entrou no servidor. Access Granted");
      props.setMyId(connectionId);
      props.setSocket(connection); // passa a conexão para o Chat.jsx
      props.visibility(true);
    } catch (err) {
      console.error("Erro ao conectar ao SignalR:", err);

    }
  };



//---------------------------------------------------------------------- Customização da Landing Page --------------------------------------------------------------------
  
  return (
    <div className='text-center'>
        <h1 className='display-3 fw-bold'>Luiz's Cozy Place</h1>
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