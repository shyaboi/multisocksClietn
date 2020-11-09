import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonAvatar, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';





export const Profile: React.FC = () => {
  
  const [userName, setUserName] = useState("");
  const [text, setText] = useState<string>();
  
  useEffect(() => {
  
    setUserName(localStorage.getItem("UserName")||"RandomUser"+Math.floor(Math.random()*10000))
   }, []);

  const stateToStorage = ()=> {
      localStorage.setItem("UserName",userName)}

  return (
        <IonContent>
      <IonHeader>
          <IonItem>
        <IonToolbar>
          <IonTitle>Dingus Crew Profile</IonTitle>
        </IonToolbar>
          <IonAvatar>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </IonAvatar>
          </IonItem>
      </IonHeader>
        <IonList>
        <IonItem>
            <IonInput value={userName} placeholder={userName}
            onIonChange={e => setUserName(e.detail.value!)}
            onIonInput={stateToStorage}
            >  
            </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Other Options</IonLabel>
            <IonInput value={text}></IonInput>
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
