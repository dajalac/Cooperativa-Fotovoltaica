import { createSlice, current} from '@reduxjs/toolkit';
import dadosClients from '../Utils/dadosClientes.json';

//para formatar as informacoes does clientes
// Assim posso inserir novos campos sem editar a dase de dados original 
const investidoresFormatados =[]
dadosClients.map((item)=>{
    investidoresFormatados.push({id: item.numeroCliente, 
        nome:item.nomeCliente, 
        telefone:null, 
        email:null,
        endereco:null,
        usina:{
            usinaId:item.usinas[0].usinaId,
            percentual:item.usinas[0].percentualDeParticipacao} })
})
const initialState={
    investidores:investidoresFormatados ,
    investidorSelecionado:null,
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
            state.status ='success'
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
        },

        setInvestidor:(state,action)=>{
            state.investidorSelecionado=action.payload
        },

        updateInvestidor:(state,action)=>{
            const antigoPercentual = state.investidorSelecionado.usina.percentual
            const novoPercentual = action.payload.usina.percentual
            const investidorUpdated = action.payload
            const id = action.payload.id 
            

            if(novoPercentual > antigoPercentual){
                //remove percentual dos outros investidores pq o cliente desejou aumentar seus investimentos
                const percentagem= - novoPercentual - antigoPercentual
                const valorParaBalancear = (percentagem/(state.investidores.length -1))
                state.investidores.map((item)=>{
                    item.usina.percentual= (item.usina.percentual - valorParaBalancear)
                })  

            }
            if(antigoPercentual > novoPercentual){
                // add percentual dos outros investidores pq o cliente desejou reduzir seus investimentos
                const percentagem= antigoPercentual -novoPercentual;
                const valorParaBalancear = (percentagem/(state.investidores.length-1))
                state.investidores.map((item)=>{
                    item.usina.percentual= (item.usina.percentual + valorParaBalancear)
                })
            }
               
            // salvar as altercoes do investidor editado
                state.investidores.map(investidor=>{
                    if(investidor.id ===id){
                        investidor.nome = investidorUpdated.nome;
                        investidor.telefone=investidorUpdated.telefone;
                        investidor.email=investidorUpdated.email;
                        investidor.endereco=investidorUpdated.endereco;
                        investidor.usina.percentual=investidorUpdated.usina.percentual;
                    }
                })
        }
    }
})

export const {addInvestidor,removerInvestidor,setInvestidor,updateInvestidor} = investidorSlice.actions
export default investidorSlice.reducer; 