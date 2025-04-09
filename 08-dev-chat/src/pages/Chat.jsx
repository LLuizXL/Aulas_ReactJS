import { useEffect, useRef, useState } from "react"



const Chat = (props) => {
const [messageList, setMessageList] = useState([])
const messageRef = useRef()
const bottomRef = useRef()




useEffect(() => {
   props.socket.on("receive_message", (data) =>{
        setMessageList((current) => [...current, data])
    });

    return () => props.socket.off("receive_message");
},[props.socket]);

useEffect(() =>{
   bottomRef.current.scrollIntoView({behavior: "smooth"})
},[messageList])

    const handleSubmit = () => {

// if (
//     messageList.map(
//         (message) => message.userName == "undefined" && window.location.reload()
//     )
// )

        <props className="soasd"></props>
        const message = messageRef.current.value;
        if (!message.trim()) return;

props.socket.emit("message", message)

        messageRef.current.value = "";
        messageRef.current.focus();

    };

  return (

    <div id="chat-container"
     className="m-5 py-3 px-4 bg-secondary rounded-3 d-flex flex-column" style={{width: '400px', height: '600px'}}>

    <div id="chat-body"
     className="d-flex flex-column gap-3 overflow-y-hidden h-100">

    {messageList.map((message, index) => (
        <div 
        className={` ${message.authorId===props.socket.id ? "align-self-end ms-5 bg-dark bg-gradient" : "align-self-start me-5 bg-success bg-gradient"}  p-2 rounded-3`} 
        key={index}> 

        <div id="message-author" className="fw-bold">{message.author}</div>
        <div id="message-text" className="">{message.text}</div>
       
        </div>
    ))}

    <div ref={bottomRef} />  {/*Delimita a parte de baixo das mensagens*/}
    </div>
        
        <div id="chat-footer" 
        className="input-group">
            <input ref={messageRef} id="msgUser" name="msgUser" type="text"
            autoFocus
             className="form-control" placeholder="digite sua mensagem..."
             onKeyDown={(e) => {e.key == "Enter" && handleSubmit()}} />
            <button
             className="btn m-0 btn-light" type="button" id="basic-addon1"
             onClick={() => handleSubmit()}>
            <i
            className="bi bi-send-fill fs-5"></i>
            </button>
        </div>
</div>
  )
}

export default Chat