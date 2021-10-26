import React from 'react';
import './RadioBtn.scss';

function RadioBtn({setVariavelSelecionada}) {
    const selectOptions = [{ value: 'tensao_V', option: 'Tensão' },
    { value: 'corrente_A', option: 'Corrente' },
    { value: 'potencia_kW', option: 'Potência' },
    { value: 'temperatura_C', option: 'Temperatura' },
    ]
   


    const handleRadioChange = (event) => {
        setVariavelSelecionada(event.target.value)
    }

    return (
        <div className="radionBtns"  onChange={handleRadioChange}>
            
            {selectOptions.map((option) => (
                    <label className="radioBtnContainer">
                        <input type="radio" value={option.value} name="variavel"/>
                        <span className="radioBtnCheckmark">{option.option}</span>
                    </label>
            ))}
        </div>
    )
}

export default RadioBtn
