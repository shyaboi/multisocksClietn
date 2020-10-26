import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:3000";

function ChatClient() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("hello", (hi: any) => {
      setResponse(hi);
    });
  }, []);

  return (
    <p>
      Something shoulkd be here {response}
    </p>
  );
}

export default ChatClient;