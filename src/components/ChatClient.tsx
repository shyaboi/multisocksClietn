import React, { useState, useEffect } from "react";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonToast,
  IonButton 
} from "@ionic/react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";
const socket = socketIOClient(ENDPOINT);

function ChatClient() {
  const [numberInRoom, setNumber] = useState("");
  const [inRoom, setInRoom] = useState("");
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState("");
  const [leftChat, setLeftChat] = useState("");
  const [enterChat, setEnterChat] = useState("");

  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);

  useEffect(() => {
    socket.on("welcome", (data: any) => {
      setEnterChat(data);
      setShowToast2(true)

      // console.log(data);
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
      setLeftChat(data);
      setShowToast1(true)
    });
    socket.on("otherTyping", (data: any) => {
      setIsTyping(data.id);
      console.log(data.id);
      console.log(isTyping + "is typing");
    });
  }, []);

  const thing = () => {
    const id = socket.id;
    socket.emit("typing", { id });
    // console.log(isTyping+'is typing')
  };

  const usersInRoom = Object.values(inRoom).map((user) => (
    <IonItem>
      <IonLabel>User ID: {user}</IonLabel>
    </IonItem>
  ));
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            {" "}
            {inRoom.length} {/* {inRoom} */}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        There are currently {inRoom.length} in the chat.
        <IonList>{usersInRoom}</IonList>
        
      </IonContent>
      <IonContent>       
        <IonToast
          isOpen={showToast1}
          onDidDismiss={() => setShowToast1(false)}
          message={leftChat+' Left the chat :('}
          duration={600}
          position='middle'
        />
      </IonContent>
      <IonContent>       
        <IonToast
          isOpen={showToast2}
          onDidDismiss={() => setShowToast2(false)}
          message={enterChat+'just joined chat!'}
          duration={600}
          position='middle'
        />
      </IonContent>
      <IonItem>
        <IonLabel position="stacked">Enter chat message</IonLabel>
        <IonInput
          value={input}
          placeholder="Shout out your people!"
          onInput={thing}
          onIonChange={(e) => setInput((e.target as HTMLTextAreaElement).value)}
        />
      </IonItem>
    </IonApp>
  );
}

export default ChatClient;
