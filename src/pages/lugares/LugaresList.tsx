import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { removeLugar, saveLugar, searchLugar } from './lugaresApi';


const LugaresList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [lugares, setLugares] = useState<any>([]);/*inicializacion a un array vacio*/
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

  const pruebaLocalStorage = () => {
    const datosDeEjemplo = 
        {
            id: '1',
            nombre: 'Montañita',
            ubicacion: 'entre tal y tal',
            servicios: 'Entretenimiento, piscina, etc',
            costo: '12.35',
            horarios: 'todo el dia :v',
            telefono: '1234567'
        }
    saveLugar(datosDeEjemplo);
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
            {lugares.map((lugar:any) =>
                <IonRow>
                    <IonCol>{lugar.nombre}</IonCol>
                    <IonCol>{lugar.ubicacion}</IonCol>
                    <IonCol>{lugar.servicios}</IonCol>
                    <IonCol>{lugar.costo}</IonCol>
                    <IonCol>{lugar.horarios}</IonCol>
                    <IonCol>{lugar.telefono}</IonCol>
                    <IonCol>
                        <IonButton onClick={() => editLugar(lugar.id)} color="primary" fill="clear">
                            <IonIcon icon={pencil} slot="icon-only"/>
                        </IonButton>
                        <IonButton color="danger" fill="clear"
                        onClick={()=> remove(lugar.id)}>
                            <IonIcon icon={close} slot="icon-only"/>
                        </IonButton>
                    </IonCol>
                </IonRow>            
            )}
            
        </IonGrid>
        </IonCard>

        <IonButton onClick={pruebaLocalStorage} color='danger' fill='clear'>
            prueba Local Storage
        </IonButton>
    </IonContent>





        
      </IonContent>
    </IonPage>
  );
};

export default LugaresList;
