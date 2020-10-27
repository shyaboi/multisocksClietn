import { IonContent, IonHeader, IonPage,  IonToolbar, IonTitle, IonChip,IonLabel } from '@ionic/react';
import React from 'react';
import ChatClient from '../components/ChatClient/ChatClient';

import './Home.css';

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
