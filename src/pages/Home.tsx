import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { createHash } from 'crypto';
import React from 'react';
import ChatClient from '../components/ChatClient';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DingusChat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
     <ChatClient />
      </IonContent>
    </IonPage>
  );
};

export default Home;
