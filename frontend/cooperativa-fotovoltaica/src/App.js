import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Usina } from './Pages';
import { Navbar } from './Components';
import { Sidebar } from './Components';
import {GerenciarInvestidores,
        InvestidoresMaisInfo,
        EditarInvestidores, 
        CadastrarInvestidor,
        Rendimentos} from './Pages';
import './App.scss';


function App() {
const[showSideBar, setShowSideBar ] = useState(false); 
const isMobile = useMediaQuery({ query: '(max-width: 650px)' })

let displaySidebar = null

useEffect(()=>{
   if (!isMobile){
    setShowSideBar(false);
  }
},[isMobile])

if (isMobile && showSideBar){
  displaySidebar =<Sidebar />
}
else if (!isMobile){
  displaySidebar =<Sidebar /> 
}
 


  return (
    <div className="App">
      <Router>
      <Navbar displaySidebar={showSideBar} setSidebar={setShowSideBar}/>
      <div className="AppContainer">
        
          {displaySidebar}
          <div className="AppScreens"> 
          <Switch>
          <Route exact path ='/' component={Usina}/>
          <Route exact path ='/gerenciarInvestidores' component={GerenciarInvestidores}/>
          <Route exact path ='/investidorInformacao' component={InvestidoresMaisInfo}/>
          <Route exact path ='/editarInvestidores' component={EditarInvestidores}/>
          <Route exact path ='/cadastrarInvestidor' component={CadastrarInvestidor}/>
          <Route exact path ='/rendimentos' component={Rendimentos}/>
          <Route component = {Usina}/>
          </Switch>
          </div>
        
      </div>
      </Router>
    </div>

  );
}

export default App;
