import { createSlice } from '@reduxjs/toolkit';
import dadosClients from '../Utils/dadosClientes.json';

//para formatar as informacoes does clientes
// Assim posso inserir novos campos sem editar a dase de dados original 
const investidoresFormatados = []

dadosClients.map((item) => {
    investidoresFormatados.push({
        id: item.numeroCliente,
        nome: item.nomeCliente,
        telefone: '+55(51) ' + Math.floor(9000 + Math.random() * 100000) + '-' + Math.floor(1000 + Math.random() * 1000),
        email: item.nomeCliente.substring(0, 2).toLocaleLowerCase() + '@gmail.com',
        endereco: 'Ave. Principal ' + Math.floor(Math.random() * 100) + ', Canoas, RS',
        color: '#' + Math.floor(Math.random() * 16777215).toString(16), //avatar color
        usina: {
            usinaId: item.usinas[0].usinaId,
            percentual: item.usinas[0].percentualDeParticipacao
        }
    })
})

const initialState = {
    investidores: investidoresFormatados,
    investidorSelecionado: null,
    filtroAtivo: false,
    investidoresFiltrados: null,
}

const investidorSlice = createSlice({
    name: 'investidor',
    initialState,
    reducers: {
        addInvestidor: (state, action) => {

            //rebalancear percentual da usian
            //Ao add novo investidor, o percentual de todos os investidores sera reduzido proporcionalmente
            const percentagem = action.payload.usina.percentual
            const valorParaBalancear = (percentagem / state.investidores.length)
            state.investidores.map((item) => {
                item.usina.percentual = (item.usina.percentual - valorParaBalancear)
            })

            // add novo investidor
            state.investidores.push(action.payload)
        },

        removerInvestidor: (state, action) => {
            // rebalancear percentual
            //Ao remover investidor, o percentual de todos os investidores sera aumentado proporcionalmente
            const percentagem = action.payload.usina.percentual
            const valorParaBalancear = (percentagem / (state.investidores.length - 1))
            state.investidores.map((item) => {
                item.usina.percentual = (item.usina.percentual + valorParaBalancear)
            })

            //remove item
            state.investidores = state.investidores.filter((item) => {
                return item.id !== action.payload.id
            })

            // remove item se estiver com filtro ativo
            state.investidoresFiltrados = state.investidoresFiltrados.filter((item) => {
                return item.id !== action.payload.id
            })

            // // Limpar investidor selecionado
            state.investidorSelecionado = null
        },

        setInvestidor: (state, action) => {
            state.investidorSelecionado = action.payload
        },

        limparInvestidorSelecionado: (state) => {
            state.investidorSelecionado = null;
        },

        updateInvestidor: (state, action) => {
            const antigoPercentual = state.investidorSelecionado.usina.percentual
            const novoPercentual = action.payload.usina.percentual
            const investidorUpdated = action.payload
            const id = action.payload.id


            if (novoPercentual > antigoPercentual) {
                //remove percentual dos outros investidores pq o cliente desejou aumentar seus investimentos
                const percentagem = novoPercentual - antigoPercentual
                const valorParaBalancear = (percentagem / (state.investidores.length - 1))
                state.investidores.map((item) => {
                    item.usina.percentual = (item.usina.percentual - valorParaBalancear)
                })

            }
            if (antigoPercentual > novoPercentual) {
                // add percentual dos outros investidores pq o cliente desejou reduzir seus investimentos
                const percentagem = antigoPercentual - novoPercentual;
                const valorParaBalancear = (percentagem / (state.investidores.length - 1))
                state.investidores.map((item) => {
                    item.usina.percentual = (item.usina.percentual + valorParaBalancear)
                })
            }

            // salvar as altercoes do investidor editado
            state.investidores.map(investidor => {
                if (investidor.id === id) {
                    investidor.nome = investidorUpdated.nome;
                    investidor.telefone = investidorUpdated.telefone;
                    investidor.email = investidorUpdated.email;
                    investidor.endereco = investidorUpdated.endereco;
                    investidor.usina.percentual = investidorUpdated.usina.percentual;
                }
            })

            // // Limpar investidor selecionado
            // state.investidorSelecionado=null
        },

        filtrarInvestidores: (state, action) => {
            const valorDeBusca = action.payload.toLowerCase();

            state.investidoresFiltrados = state.investidores.filter(investidor => {
                return (investidor.nome.toLowerCase().includes(valorDeBusca))
            })

            state.filtroAtivo = true;
        },

        limparFiltro: (state) => {
            state.filtroAtivo = false;
        },
    }
})

export const { addInvestidor,
    removerInvestidor,
    setInvestidor,
    updateInvestidor,
    filtrarInvestidores,
    limparFiltro,
    limparInvestidorSelecionado } = investidorSlice.actions
export default investidorSlice.reducer;