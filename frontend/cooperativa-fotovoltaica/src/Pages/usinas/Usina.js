import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { setUpVariables,getVariavelSelecionada } from '../../Redux/UsinaSlice';
import{setUpVariables, getVariavelSelecionada} from '../../Redux'
import { GraficoTemporal } from '../../Components';
import { InvestidoresLista,RadioBtn } from '../../Components';
import './Usinas.scss'


function Usina() {
    const dispatch = useDispatch();
    const {variavelResposta} = useSelector((state) => state.usinaInfo)
    const { investidores} = useSelector((state) => state.investidor)

    useEffect(() => {
        dispatch(setUpVariables())
    }, [])


    const setVariavelSelecionada =(input)=>{
        dispatch(getVariavelSelecionada(input))
    }

    //TODO graph is breaking the sidebar... probably because of the responsive thing 

    

    return (
        <div className="usina">
            <div className="usinaHeader">
                <h2>Usina fotovoltaica - Souto Maior</h2>
                <div>Ave. Palmares 123, São Francisco, RS</div>
            </div>
            <div className="usinaBoby">
                <div className="usinaGraph">
                    <GraficoTemporal variavelResposta={variavelResposta} />
                    <RadioBtn setVariavelSelecionada={setVariavelSelecionada}/>
                    <p>Selecione qual variavel deseja explorar</p>
                </div>
                <InvestidoresLista investidores={investidores}/>
            </div>
        </div>
    )
}

export default Usina
