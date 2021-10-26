import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUpVariables } from '../../Redux/UsinaSlice';
import { GraficoTemporal } from '../../Components';
import { InvestidoresLista } from '../../Components';


import './Usinas.scss'

const displayOptions = () => {
    const selectOptions = [{ value: 'tensao_V', option: 'Tensão' },
    { value: 'corrente_A', option: 'Corrente' },
    { value: 'potencia_kW', option: 'Potência' },
    { value: 'temperatura_C', option: 'Temperatura' }]
    let options = []

    selectOptions.map((option) => {
        options.push( 
              <label className="timeTable-grid-container">
              <input type="radio" value={option.value} name="selectTime" />
              <span className="timeTable-grid-checkmark">{option.option}</span>
              </label>)
        
        
        
       // <label><input type="radio" value={option.value} name="options" /> <span>{option.option}</span></label>
    })
    return options

}

function Usina() {
    const [variavelResposta, setVariavelResposta] = useState('tensao_V')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUpVariables())
    }, [])

    const handleRadioChange = (event) => {
        setVariavelResposta(event.target.value)
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
                    <div className="usinaRadioBtn" onChange={handleRadioChange}>
                        {displayOptions()}
                    </div>
                    <GraficoTemporal variavelResposta={variavelResposta} />
                </div>
                <InvestidoresLista/>
            </div>
        </div>
    )
}

export default Usina
