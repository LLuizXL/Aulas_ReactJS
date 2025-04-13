import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import Chat from "./pages/Chat";
import Join from "./pages/Join";
import { useState } from "react";

function App() {
  const [myId, setMyId] = useState(null)
  const [chatVisibility, setChatVisibility] = useState(false);
  const [socket, setSocket] = useState(null);

  return (
    <div className="m-0 p-0 vh-100 d-flex flex-column justify-content-center bg-dark text-light align-items-center">
      {chatVisibility ? (
        <Chat socket={socket} myId={myId} />
      ) : (
        <Join setSocket={setSocket} setMyId={setMyId} visibility={setChatVisibility} />
      )}
    </div>
  );
}

export default App;
