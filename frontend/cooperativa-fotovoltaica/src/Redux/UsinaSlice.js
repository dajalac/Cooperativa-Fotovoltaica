import { createSlice, current} from '@reduxjs/toolkit';
import dadosUsina from '../Utils/dadosUsina.json';

const dadosFormatado={
    tempo:[],
    tensao:[] ,
    corrente:[],
    potencia:[],
    temperatura:[]
   }

dadosUsina.map((item)=>{
    dadosFormatado.tempo.push(item.tempo_h)
    dadosFormatado.tensao.push(item.tensao_V)
    dadosFormatado.corrente.push(item.corrente_A)
    dadosFormatado.potencia.push(item.potencia_kW)
    dadosFormatado.temperatura.push(item.temperatura_C)
})

const initialState = {
    dadosFormatados:dadosFormatado,
    variavelResposta:'potencia_kW',
    energiaNoDia: 0,
    receitaTotal:0,
    rendimentos:[],
    rendimentosPorhora:[],
 
};


const usinaSlice = createSlice({
    name:'usina',
    initialState,
    reducers:{
        setUpVariables:(state)=>{
          return initialState
        },
        getVariavelSelecionada:(state,action)=>{
            state.variavelResposta=action.payload
        },
        calcularEnergia:(state,action)=>{
            const tempo=state.dadosFormatados.tempo;
            const potencia = state.dadosFormatados.potencia;
            const investidores= action.payload
            let deltaT=0;
            let potenciaPorHoraLista=[]
            const valorPorKwh = 0.95;
            

            // calcular a energia para cada dois momentos no tempo
            for(let i=0; i<tempo.length-1; i++){
               deltaT=tempo[i+1]-tempo[i]

               potenciaPorHoraLista.push({tempo:tempo[i], kWh:(deltaT*potencia[i])})
            }

            // calcular a energia total gerada no dia
            potenciaPorHoraLista.map((item)=>{
                state.energiaNoDia=state.energiaNoDia+item.kWh
            })

            // calcular o retorno financeiro total
            state.receitaTotal= state.energiaNoDia * valorPorKwh; 

            //calcular retorno financeiro por periodo no tempo
            state.rendimentosPorhora= potenciaPorHoraLista.map((item)=>{
                return {hora:item.tempo, retorno:item.kWh*valorPorKwh}
            })

            //calcular retorno financeito por investidor
            investidores.map(item =>{
                state.rendimentos.push({nome:item.nome, rendimento: (item.usina.percentual*state.receitaTotal)/100})
             })

            
        },
       
        
    }
})

export const {setUpVariables,getVariavelSelecionada,calcularEnergia} = usinaSlice.actions
export default usinaSlice.reducer; 