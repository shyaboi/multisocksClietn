import React, { useState, useEffect } from "react";
import { IonApp, IonHeader,  IonToolbar,  IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";
const socket = socketIOClient(ENDPOINT);

function ChatClient() {
  const [numberInRoom, setNumber] = useState("");
  const [inRoom, setInRoom] = useState("");

  useEffect(() => {
    socket.on("welcome", (data: any) => {
      setNumber(data);
      // console.log(data)
    });
    socket.on("inroom", (data: any) => {
      setInRoom(data);
      // console.log(data)
    });
    
  }, []);
  const usersInRoom =Object.values(inRoom).map((user) => (
<IonItem>
        <IonLabel>{user}</IonLabel>
      </IonItem>
  ))
  return (
    <IonApp>
    <IonHeader>
      <IonToolbar>
      <IonTitle> {numberInRoom}  {/* {inRoom} */}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
Comense to chatting
    </IonContent>
    <IonContent>
    {numberInRoom}
      <IonList>
       {usersInRoom}
    </IonList>
    </IonContent>
  </IonApp>
  );
}

export default ChatClient;