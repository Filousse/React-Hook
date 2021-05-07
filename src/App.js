import logo from './logoHook.png';
import './App.css';
import HookExemple from './HookExemple.jsx';
import ClassExemple from './ClassExemple.jsx';
import HookManyState from './HookManyState.jsx';
import UseStateForm from './UseStateForm';
import UseEffect from './UseEffect';
import Introhook from './introHook';
import Regles from './Regles';
import HookPersonnalise from './HookPersonnalise';
import AppUseContext from "./useContext/AppUseContext"


function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>

        <h1 className="title">HOOK </h1>
        <HookExemple/>
        <ClassExemple/>
        <Introhook test="test réussis : je suis une props afficher dans hook ;)"/>
        <h1 className="title">HOOK D'ETATS : useState</h1>
        <HookManyState/>
        <UseStateForm/>
        <h1 className="title">HOOK D'ETATS CYLES LIFES : useEffect</h1>
        <UseEffect/>
        <h1 className="title">     REGLES    </h1>
        <Regles/>
        <h1 className="title">   HOOK PERSONNALISE     </h1>
        <HookPersonnalise/>
        <h1 className="title">   HOOK D'ETATS : useContext     </h1>
        <h2>1) Creer mycontext </h2>
        <h2>2) Importer à app.js Ou à au parents le plus haut du groupe cmpts à modifier  </h2>
        <h2>   Et <br></br>déclarer le comonents comme parents avec en valeurs le state à passer <br></br> component : <br></br>UserContexts.Provider value=  /// this.state.user ///<br></br>///App///<br></br>/// UserContexts.Provide ///</h2>
        <h2>3) Importer userConext et l'implanter aux compnents utilisateurs de la donnée en déclarant le compnent : <br></br>///UserContext.Consumer/// <br></br>           user => /// console.log(user) /// /// <br></br>///UserContext.Consumer/// </h2>
       <h2>SI PLUSIEURS CONTEXT : utiliser dans le comopnets .Consumer => hook ;) ex:  const color = useContext(ColorContext);</h2>
        <AppUseContext/>
        <h1 className="title">   CRUD HOOK    </h1>
     </header>
    </div>
    </>
  );
}

export default App;
