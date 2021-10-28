import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {removerInvestidor,setInvestidor} from '../../Redux';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {FaPen,FaTrashAlt } from 'react-icons/fa';
import './InvestidoresMaisInfo.scss';

function InvestidoresMaisInfo(props) {
    const dispatch = useDispatch();
   const {investidorSelecionado}= useSelector((state) => state.investidor)

   //const investidor = props.location.state.investidorSelecionado //props recebido pelo history.push
  // const aoDeletar = props.location.state.onDeletar
   let history = useHistory()

   const handleEditarInvestidor=()=>{
       history.push('/editarInvestidores');
   }

   const handleDeletarInvestidor =()=>{
       dispatch(removerInvestidor(investidorSelecionado))
       //show confirmation window
       //redirect to gerenciar investidores
}

    return (
        <div className="investidoresMaisInfo">
        <div className="investidoresMaisInfoCard">
           <div className="investidoresMaisInfoHeader">
                <Avatar sx={{ width: 86, height: 86, bgcolor: '#ffc107' }} >AP </Avatar>
                <Button variant="outlined" fullWidth startIcon={<FaPen/>} onClick={handleEditarInvestidor}> Editar </Button>
                <Button variant="outlined" fullWidth startIcon={<FaTrashAlt/>} onClick={handleDeletarInvestidor}> Excluir </Button>
            </div> 
            <div className="investidoresMaisInfoBody">
                <div className="investidoresMaisInfoPersonal">
                    <Typography variant="body1" component="div">
                        Nome: {investidorSelecionado.nome}
                    </Typography>
                    <Typography variant="body1" component="div">
                        e-mail: {investidorSelecionado.email}
                    </Typography>
                    <Typography variant="body1" component="div">
                        cel: {investidorSelecionado.telefone}
                    </Typography>
                    <Typography variant="body1" component="div">
                        Endereço: {investidorSelecionado.endereco}
                    </Typography>
                </div>
                <div className="investidoresMaisInfoUsina">
                    <Typography variant="body2" component="div" sx={{color:'#7F8E9D;'}}>
                        USINAS
                    </Typography>
                    <Typography variant="body1" component="div">
                        Usina Solto Maior
                    </Typography>
                    <Typography variant="body1" component="div">
                        Endereço: Rua dos Milagres, 23, Salvador, BA
                    </Typography>
                    <Typography variant="body1" component="div">
                        Percentual de participação: {investidorSelecionado.usina.percentual}%
                    </Typography>
                    <Typography variant="body1" component="div">
                        Investidor(a) desde 01/05/2012
                    </Typography>
                </div>

            </div >
        </div>
        </div>
    )
}

export default InvestidoresMaisInfo
