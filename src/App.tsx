import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import LugaresList from './pages/lugares/LugaresList';
import LugaresEdit from './pages/lugares/lugaresEdit';
import HuecasList from './pages/huecas/HuecasList';
import HuecasEdit from './pages/huecas/HuecasEdit';
import IglesiasList from './pages/Iglesias/IlglesiasList';
import IglesiasEdit from './pages/Iglesias/IglesiasEdit';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/lugares" />
            </Route>
            
            
            <Route path="/page/lugares" exact={true}>
              <LugaresList></LugaresList>
            </Route>

            <Route path="/page/lugares/:id" exact={true}>
              <LugaresEdit></LugaresEdit>
            </Route>

            <Route path="/page/huecas" exact={true}>
              <HuecasList></HuecasList>
            </Route>

            <Route path="/page/huecas/:id" exact={true}>
              <HuecasEdit></HuecasEdit>
            </Route>

            <Route path="/page/iglesias" exact={true}>
              <IglesiasList></IglesiasList>
            </Route>

            <Route path="/page/iglesias/:id" exact={true}>
              <IglesiasEdit></IglesiasEdit>
            </Route>


          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
