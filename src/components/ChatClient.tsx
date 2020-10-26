import React, { useState, useEffect } from "react";
import { IonApp, IonHeader,  IonToolbar,  IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput } from '@ionic/react';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";
const socket = socketIOClient(ENDPOINT);

function ChatClient() {
  const [numberInRoom, setNumber] = useState("");
  const [inRoom, setInRoom] = useState("");
  const [input, setInput] = useState("");
  const [ name, setName ] = useState('');

  useEffect(() => {
    socket.on("welcome", (data: any) => {
      setNumber(data);
      // console.log(data)
    });
    socket.on("inroom", (data: any) => {
      setInRoom(data);
      // console.log(data)
    });
    socket.on("hello", (data: any) => {
      setNumber(data);
      // console.log(data)
    });
    socket.on("bye", (data: any) => {
      setNumber(data);
      console.log(data)
    });
  }, []);

  const thing = ()=> {
    const id = socket.id
    socket.emit('typing', {id})
    console.log(socket.id+'is typing')
  }

  const usersInRoom =Object.values(inRoom).map((user) => (
<IonItem>
        <IonLabel>User ID: {user}</IonLabel>
      </IonItem>
  ))
  return (
    <IonApp>
    <IonHeader>
      <IonToolbar>
      <IonTitle> {inRoom.length}  {/* {inRoom} */}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
    There are currently {inRoom.length} in the chat.
      <IonList>
       {usersInRoom}
    </IonList>
    </IonContent>
    <IonItem>
            <IonLabel position="stacked">Enter chat message</IonLabel>
            <IonInput value={input} placeholder="Shout out your people!" onInput={thing} onIonChange={(e) => setInput((e.target as HTMLTextAreaElement).value)} />
          </IonItem>
  </IonApp>
  );
}

export default ChatClient;