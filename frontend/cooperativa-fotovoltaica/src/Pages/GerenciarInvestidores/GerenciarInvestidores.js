import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {removerInvestidor} from '../../Redux';
import { InvestidoresCard, SearchInvestidores } from '../../Components';
import './GerenciarInvestidores.scss'

// /cadastrarInvestidor

function GerenciarInvestidores() {
    const dispatch = useDispatch();
    const {investidores} = useSelector((state) => state.investidor)

    let history = useHistory()

    const handleNovoInvestidor=()=>{
        history.push('/cadastrarInvestidor');
    }

    const handleDeletarInvestidor=(investidor)=>{
        dispatch(removerInvestidor(investidor))
    }

    return (
        <div className="gerenciarInvestidores">
            <SearchInvestidores />
            <div className="gerenciarInvestidoresNovoInvest" onClick={handleNovoInvestidor}>
              <p> Adicionar investidor</p>
            </div>
            <div className="gerenciarInvestidoresCard">
                {investidores.map((item)=>
                    <InvestidoresCard investidor={item} aoDeletarInvestidor={handleDeletarInvestidor}/>
                )}
               
            </div>


        </div>
    )
}

export default GerenciarInvestidores
