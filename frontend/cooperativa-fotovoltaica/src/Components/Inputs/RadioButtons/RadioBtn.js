import React from 'react';
import './RadioBtn.scss';

function RadioBtn({ setVariavelSelecionada }) {
    const selectOptions = [{ value: 'tensao_V', option: 'Tensão' },
    { value: 'corrente_A', option: 'Corrente' },
    { value: 'potencia_kW', option: 'Potência' },
    { value: 'temperatura_C', option: 'Temperatura' },
    ]



    const handleRadioChange = (event) => {
        setVariavelSelecionada(event.target.value)
    }

    return (
        <div className="radionBtns" onChange={handleRadioChange}>
            {/* <label className="radioBtnContainer">
                <input type="radio" id ="a" value='potencia_kW' name="variavel" />
                <span className="radioBtnCheckmark">Potência</span>
            </label>
            <label className="radioBtnContainer">
                <input type="radio"  id ="b" value='tensao_V' name="variavel" />
                <span className="radioBtnCheckmark">Tensão</span>
            </label>
            <label className="radioBtnContainer">
                <input type="radio" id ="c" value='corrente_A' name="variavel"/>
                <span className="radioBtnCheckmark">Corrente</span>
            </label>
            <label className="radioBtnContainer">
                <input type="radio"  id ="d" value='temperatura_C' name="variavel" />
                <span className="radioBtnCheckmark">Temperatura</span>
            </label> */}

            
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
