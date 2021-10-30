import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch,} from 'react-redux';
import { calcularEnergia,setUpVariables} from '../../Redux';
import { InvestidoresPercentual, GraficoRendimentos,GraficoTempoXRendimento } from '../../Components';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import './Rendimentos.scss'

function Rendimentos() {
    const dispatch = useDispatch();
    const { investidores} = useSelector((state) => state.investidor)
    const {rendimentos,receitaTotal,rendimentosPorhora} = useSelector((state) => state.usinaInfo)
    const [toggleBtn, setToggleBtn] = useState(true)
    const [btnText, setBtnText ] = useState('Ver rendimento por hora')
    
    useEffect(() => {
        dispatch(setUpVariables()) //formata as variaveis para o estado inicial 
        dispatch(calcularEnergia(investidores))
    }, [])

    const onToggleBtn=()=>{
        setToggleBtn(!toggleBtn)

        if(!toggleBtn){
            setBtnText('Ver rendimento por hora')
        }else{
            setBtnText('Ver rendimento por investidor')
        }
    }

    

    const formatarValorParaReal = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',

    });

    const hoje = new Date();
    const ontem = new Date();
    ontem.setDate(hoje.getDate()-1)
    const dataFormatacao= { year: 'numeric', month: 'long', day: 'numeric'}
    
    // Para rearanjar os investidores por ordem decrescente the percentual investido
    const bblSort =()=>{
        const items =[...investidores]
        for(let i = 0; i < items.length; i++){
            
          // -1 porque o ultimo item ja esta na posicao correta 
          for(let j = 0; j < ( items.length - i -1 ); j++){
     
            //checkar se o item i eh menor que o proximo item
            if(items[j].usina.percentual < items[j+1].usina.percentual){

              // se sim, inverte as posicoes
              let temp = items[j]
              items[j]= items[j+1]
              items[j+1] = temp
            }
          }
        }
        return items
       }
         


    return (
        <div className="rendimentos">
           <div  className="rendimentosHeader">
                <div>Balanço de ontem - {ontem.toLocaleString('pt-BR',dataFormatacao)}: </div>
                <h3>{formatarValorParaReal.format(receitaTotal)}</h3>
            </div> 
            <div className="rendimentosBody">
                <div className="rendimentosInvestidores">
                    <InvestidoresPercentual investidores={bblSort()} />
                </div>
                <div className="rendimentosGraficos">
                <div className="rendimentosBtn">
            <Button variant="contained" onClick={onToggleBtn}>{btnText}</Button>
                </div> 
                    {toggleBtn
                        ?<GraficoRendimentos data={rendimentos}/>
                        :<GraficoTempoXRendimento data={rendimentosPorhora}/>
 
                    }
                    
                </div>

            </div>

        </div>
    )
}

export default Rendimentos
