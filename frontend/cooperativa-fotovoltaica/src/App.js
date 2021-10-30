import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Usina } from './Pages';
import { Navbar } from './Components';
import { Sidebar } from './Components';
import {
  GerenciarInvestidores,
  InvestidoresMaisInfo,
  EditarInvestidores,
  CadastrarInvestidor,
  Rendimentos
} from './Pages';
import './App.scss';


function App() {
  const { investidorSelecionado } = useSelector((state) => state.investidor)
  const [showSideBar, setShowSideBar] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 650px)' })

  let displaySidebar = null

  useEffect(() => {
    if (!isMobile) {
      setShowSideBar(false);
    }
  }, [isMobile])

  if (isMobile && showSideBar) {
    displaySidebar = <Sidebar />
  }
  else if (!isMobile) {
    displaySidebar = <Sidebar />
  }



  return (
    <div className="App">
      <Router>
        <Navbar displaySidebar={showSideBar} setSidebar={setShowSideBar} />
        <div className="AppContainer">

          {displaySidebar}
          <div className="AppScreens">
            <Switch>
              <Route exact path='/' component={Usina} />
              <Route exact path='/rendimentos' component={Rendimentos} />
              <Route exact path='/gerenciarInvestidores' component={GerenciarInvestidores} />
              {investidorSelecionado &&
                 // Os routes abaixo so vai existir se um investidor estiver selecionado
                <div>
                  <Route exact path='/investidorInformacao' component={InvestidoresMaisInfo} />
                  <Route exact path='/editarInvestidores' component={EditarInvestidores} />
                  <Route exact path='/cadastrarInvestidor' component={CadastrarInvestidor} />

                </div>
              }
              <Route component={Usina} />
            </Switch>
          </div>

        </div>
      </Router>
    </div>

  );
}

export default App;
