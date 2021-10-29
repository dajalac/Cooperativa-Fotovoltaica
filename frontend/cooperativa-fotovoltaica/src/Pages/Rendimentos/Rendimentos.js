import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch,} from 'react-redux';
import { calcularEnergia,setUpVariables} from '../../Redux';

import { InvestidoresPercentual, GraficoRendimentos,GraficoTempoXRendimento } from '../../Components';

import './Rendimentos.scss'

function Rendimentos() {
    const dispatch = useDispatch();
    const { investidores} = useSelector((state) => state.investidor)
    const {rendimentos,receitaTotal,rendimentosPorhora} = useSelector((state) => state.usinaInfo)

    
    useEffect(() => {
        dispatch(setUpVariables()) //formata as variaveis para o estado inicial 
        dispatch(calcularEnergia(investidores))
    }, [])

    return (
        <div className="rendimentos">
           <div  className="rendimentosHeader">
           <h3>Rendimento total gerado no dia 25 de Abril de 2021 foi de: R${receitaTotal}</h3>
            </div> 
            <div className="rendimentosBody">
                <div className="rendimentosInvestidores">
                    <InvestidoresPercentual investidores={investidores} />
                </div>
                <div className="rendimentosGraficos">
                    <GraficoRendimentos data={rendimentos}/>
                    <GraficoTempoXRendimento data={rendimentosPorhora}/>
                </div>

            </div>

        </div>
    )
}

export default Rendimentos
