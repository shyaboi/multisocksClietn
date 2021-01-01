import { IonContent,  IonPage, } from '@ionic/react';
import React from 'react';
import ChatClient from '../components/ChatClient/ChatClient';

import './Chat.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      
      <IonContent fullscreen>
     <ChatClient />
      </IonContent>
    </IonPage>
  );
};

export default Home;
