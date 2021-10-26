import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { Usina } from './Pages';
import { Navbar } from './Components';
import { Sidebar } from './Components';
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
      <Navbar displaySidebar={showSideBar} setSidebar={setShowSideBar}/>
      <div className="AppContainer">
        <Router>
          {displaySidebar}
          <div className="AppScreens"> 
          <Switch>
          <Route exact path ='/' component={Usina}/>
          
          <Route component = {Usina}/>
          </Switch>
          </div>
        </Router>
      </div>

    </div>

  );
}

export default App;