import React, { useState, useEffect, useRef } from "react";
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
  IonFab, 
  IonFabButton, 
  IonIcon,
  IonModal, 
  IonButton,
  IonAvatar,
} from "@ionic/react";
import {  arrowBackCircle, peopleCircleOutline } from 'ionicons/icons';
import TopMenu from '../TopMenu/TopMenu'

import socketIOClient from "socket.io-client";
const ENDPOINT = "https://dinguschatserver.herokuapp.com/";
const socket = socketIOClient(ENDPOINT);

function ChatClient() {
  const [numberInRoom, setNumber] = useState("");
  const [inRoom, setInRoom] = useState("");
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState("");
  const [leftChat, setLeftChat] = useState("");
  const [enterChat, setEnterChat] = useState("");
  const [chatArr, setChatArr] = useState('');
  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const bottomRef:any = useRef();
  
  const scrollToBottom = () => {
      bottomRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      });
  };


  useEffect(() => {

    scrollToBottom()

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
      // console.log(data.id);
      console.log(isTyping + "is typing");
    });
    socket.on("msg", (data: any) => {
          // console.log(data)
          setChatArr(data)
          scrollToBottom()
        });
      }, []);
      
      const thing = () => {
        const id = socket.id;
        socket.emit("typing", { id });
        // console.log(isTyping+'is typing')
      };
      const chatting = (e:any) => {
        e.preventDefault();
        console.log(chatArr)
    const id = socket.id
    socket.emit('message', {id:id , msg:input})
    setInput('')
    scrollToBottom()
    console.log('cahtttt')
  }

  const usersInRoom = Object.values(inRoom).map((user) => (
    <IonItem>
    
      <IonLabel key={user}>User ID: {user}</IonLabel>
    </IonItem>
  ));
  let chatLogArr = Object.values(chatArr) as any
  const chat = chatLogArr.map((msg:any ) => (
    <IonItem>

      <IonLabel >
        <h4>ID: {msg.id}</h4>
<br></br>
      <p >Message: {msg.msg}</p>
      </IonLabel>
      </IonItem>

  ));
  return (
    <IonApp>
  <IonHeader id='inRoom' >
  <IonItem>
      <IonAvatar slot="start">
        <img src="https://i.ibb.co/k6yNxLh/ha.png" />
      </IonAvatar>
      <IonLabel>Dingus Chat</IonLabel>

        <p > Currently {inRoom.length} in the chat.</p>
    </IonItem>
      </IonHeader>
        {/* <IonList>{usersInRoom}</IonList> */}
        
        <IonToast
          isOpen={showToast1}
          onDidDismiss={() => setShowToast1(false)}
          message={leftChat+' Left the chat :('}
          duration={1200}
          position='middle'
          />
        <IonToast
          isOpen={showToast2}
          onDidDismiss={() => setShowToast2(false)}
          message={enterChat+'just joined chat!'}
          duration={1200}
          position='middle'
          />
         
      <IonContent>
      <IonList id='chatList'>
        {chat}
        <br></br>

        <br></br>
        <br></br>
        <div ref={bottomRef} className="list-bottom">Bottom of the chat</div>

      </IonList>
      <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={peopleCircleOutline} onClick={() => setShowModal(true)} />{inRoom.length}
          </IonFabButton>
        </IonFab>
      <IonModal isOpen={showModal} cssClass='my-custom-class'>
        <IonList>
          {usersInRoom}
        </IonList>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      </IonContent>
      <IonItem>
        <IonLabel position="stacked">Enter chat message</IonLabel>
        <form onSubmit={chatting} >
        <IonInput
        ion-input='submit'
          value={input}
          placeholder="Shout out your people!"
          onInput={thing}
          onIonChange={(e) => setInput((e.target as HTMLTextAreaElement).value)}
        />
        
        </form>
      </IonItem>
      
    </IonApp>
  );
}

export default ChatClient;