import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Sidebar from './Components/Navbar/Sidebar/Sidebar';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';

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
    <div>
      <Navbar displaySidebar={showSideBar} setSidebar={setShowSideBar}/>
      <div className="AppContainer">
        <Router>
          {displaySidebar}
          Hello
        </Router>
      </div>

    </div>

  );
}

export default App;
