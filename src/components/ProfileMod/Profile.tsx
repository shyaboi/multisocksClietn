import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonAvatar, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';





export const Profile: React.FC = () => {
  
  const [userName, setUserName] = useState("");
  const [text, setText] = useState<string>();
  const [avatar, setAvatar] = useState('');
  
  useEffect(() => {
    setUserName(localStorage.getItem("UserName")||"RandomUser"+Math.floor(Math.random()*10000))
    setAvatar(localStorage.getItem("Avatar")||"https://placekitten.com/200/300")

   }, []);

  const stateToStorage = ()=> {
      localStorage.setItem("Avatar",avatar)
      localStorage.setItem("UserName",userName)}

  return (
        <IonContent>
      <IonHeader>
          <IonItem>
        <IonToolbar>
          <IonTitle>Dingus Crew Profile</IonTitle>
        </IonToolbar>
          <IonAvatar>
      <img src={avatar} />
    </IonAvatar>
          </IonItem>
      </IonHeader>
        <IonList>
        <IonItem>
            <IonInput value={userName} placeholder={userName}
            onIonChange={e => setUserName(e.detail.value!)}
            onIonInput={stateToStorage}
            onClick={stateToStorage}
            >  
            </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Avatar URL</IonLabel>
            <IonInput 
            onIonChange={e => setAvatar(e.detail.value!)}
            onIonInput={stateToStorage}
            onClick={stateToStorage}
            placeholder={avatar}
            value={avatar}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">A 3rd thing</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>
        </IonList>
      </IonContent>
  );
};

export default Profile;
