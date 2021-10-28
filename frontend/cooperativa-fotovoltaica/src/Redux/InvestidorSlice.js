import { createSlice, current} from '@reduxjs/toolkit';
import dadosClients from '../Utils/dadosClientes.json';

//para formatar as informacoes does clientes
// Assim posso inserir novos campos sem editar a dase de dados original 
const investidoresFormatados =[]
dadosClients.map((item)=>{
    investidoresFormatados.push({id: item.numeroCliente, 
        nome:item.nomeCliente, 
        telefone:NaN, 
        email:NaN,
        usina:{
            usinaId:item.usinas[0].usinaId,
            percentual:item.usinas[0].percentualDeParticipacao} })
})
const initialState={
    investidores:investidoresFormatados ,
    porcentagemSelecionada: null,
    status:null
}

const investidorSlice = createSlice({
    name: 'investidor',
    initialState,
    reducers:{
        addInvestidor:(state,action)=>{
            // TODO check se investiro ja existe

            //rebalancear percentual da usian
            const percentagem = action.payload.usina.percentual
            const valorParaBalancear = (percentagem/state.investidores.length)
            state.investidores.map((item)=>{
                item.usina.percentual= (item.usina.percentual - valorParaBalancear)
            })

            // add novo investidor
            state.investidores.push(action.payload)
            state.status = 'cadastrado'
        },

        removerInvestidor:(state,action)=>{
            // rebalancear percentual
            const percentagem = action.payload.usina.percentual
            const valorParaBalancear = (percentagem/(state.investidores.length-1))
            state.investidores.map((item)=>{
                item.usina.percentual= (item.usina.percentual + valorParaBalancear)
            })

            //remove item
           state.investidores= state.investidores.filter((item)=>{
                    return item.id !== action.payload.id
            })


        }
    }
})

export const {addInvestidor,removerInvestidor} = investidorSlice.actions
export default investidorSlice.reducer; 