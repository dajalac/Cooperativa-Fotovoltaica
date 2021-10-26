import { createSlice, current} from '@reduxjs/toolkit';
import dadosUsina from '../Utils/dadosUsina.json';



const initialState = {
    
    dados: dadosUsina,
    status:null,
    dadosFormatados:{
         tempo:[],
         tensao:[] ,
         corrente:[],
         potencia:[],
         temperatura:[]
        },
    variavelResposta:'tensao_V'};


const usinaSlice = createSlice({
    name:'usina',
    initialState,
    reducers:{
        setUpVariables:(state)=>{
            state.dados.map((item)=>{
                state.dadosFormatados.tempo.push(item.tempo_h)
                state.dadosFormatados.tensao.push(item.tensao_V)
                state.dadosFormatados.corrente.push(item.corrente_A)
                state.dadosFormatados.potencia.push(item.potencia_kW)
                state.dadosFormatados.temperatura.push(item.temperatura_C)
            })
        },
        getVariavelSelecionada:(state,action)=>{
            state.variavelResposta=action.payload
        }
        
    }
})

export const {setUpVariables,getVariavelSelecionada} = usinaSlice.actions
export default usinaSlice.reducer; 