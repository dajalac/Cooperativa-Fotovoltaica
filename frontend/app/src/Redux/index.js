import store from './store';
import {addInvestidor,
        removerInvestidor,
        setInvestidor,
        updateInvestidor,
        filtrarInvestidores,
        limparFiltro,
        limparInvestidorSelecionado} from './InvestidorSlice'; 

import{setUpVariables,
        getVariavelSelecionada,
        calcularEnergia} from './UsinaSlice';


export {store,
        addInvestidor,
        removerInvestidor,
        setInvestidor,
        updateInvestidor,
        filtrarInvestidores,
        limparFiltro,
        setUpVariables,
        getVariavelSelecionada,
        calcularEnergia,
        limparInvestidorSelecionado
      }

