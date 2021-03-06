import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Lugar from './Lugar';
import { removeLugar, saveLugar, searchLugar } from './lugaresApi';


const LugaresList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [lugares, setLugares] = useState<Lugar[]>([]);/*inicializacion a un array vacio*/
  const history = useHistory();

  useEffect(() =>{
    search();
  }, [history.location.pathname]); /* los [] son componentes como clientes que si reciben modificacion se ejecutan o una sola vez cuando se cargue por 1ra vez */


  const search = () => {
    let result = searchLugar();
    setLugares(result);
  }

  const remove = (id:String) => {
    removeLugar(id);
    search();
  }

  const addLugar = () =>{
    history.push('/page/lugares/new');
  }
  const editLugar = (id: string) =>{
    history.push('/page/lugares/' + id);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
            
          </IonToolbar>
        </IonHeader>

    <IonContent>
        <IonCard>
            <IonTitle> Gestión de lugares turísticos</IonTitle>
            <IonItem>
                <IonButton onClick={addLugar} color="primary" fill="solid" slot='end' size="default">
                    <IonIcon icon={add} />
                    Agregar nuevo sitio
                </IonButton>
            </IonItem>
        <IonGrid className='table'>
            <IonRow>
                <IonCol>Nombre</IonCol>
                <IonCol>Ubicación</IonCol>
                <IonCol>Servicios</IonCol>
                <IonCol>Costo de entrada</IonCol>
                <IonCol>Horarios</IonCol>
                <IonCol>Telefono</IonCol>
                <IonCol>Acciones</IonCol>
            </IonRow>
            {lugares.map((lugar: Lugar) =>
                <IonRow>
                    <IonCol>{lugar.nombre}</IonCol>
                    <IonCol>{lugar.ubicacion}</IonCol>
                    <IonCol>{lugar.servicios}</IonCol>
                    <IonCol>{lugar.costo}</IonCol>
                    <IonCol>{lugar.horarios}</IonCol>
                    <IonCol>{lugar.telefono}</IonCol>
                    <IonCol>
                        <IonButton onClick={() => editLugar(String(lugar.id))} color="primary" fill="clear">
                            <IonIcon icon={pencil} slot="icon-only"/>
                        </IonButton>
                        <IonButton color="danger" fill="clear"
                        onClick={()=> remove(String(lugar.id))}>
                            <IonIcon icon={close} slot="icon-only"/>
                        </IonButton>
                    </IonCol>
                </IonRow>            
            )}
            
        </IonGrid>
        </IonCard>

    </IonContent>





        
      </IonContent>
    </IonPage>
  );
};

export default LugaresList;
