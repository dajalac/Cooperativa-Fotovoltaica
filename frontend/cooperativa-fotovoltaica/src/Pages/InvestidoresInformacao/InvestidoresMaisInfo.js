import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removerInvestidor } from '../../Redux';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FaPen, FaTrashAlt,FaArrowLeft } from 'react-icons/fa';
import './InvestidoresMaisInfo.scss';

const getNameToAvatar = (name) => {
    const nameInitials = []
    const nameSlipted = name.split(' ')

    nameSlipted.map(name => {
        nameInitials.push(name.charAt(0))
    })

    return nameInitials.join('')

}

function InvestidoresMaisInfo() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const { investidorSelecionado } = useSelector((state) => state.investidor)

    //const investidor = props.location.state.investidorSelecionado //props recebido pelo history.push
    // const aoDeletar = props.location.state.onDeletar
    let history = useHistory()

    const handleEditarInvestidor = () => {
        history.push('/editarInvestidores');
    }

    const handleDeletarInvestidor = () => {
        setOpen(true)

    }

    const handleAgreed = () => {
        setOpen(false);
        dispatch(removerInvestidor(investidorSelecionado))
        history.push('/gerenciarInvestidores');
    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleVoltar=()=>{
        history.push('/gerenciarInvestidores');
    }
    return (
        <div className="investidoresMaisInfo">
            <div className="investidoresMaisInfoVoltar" onClick={handleVoltar}><FaArrowLeft/> Voltar</div>
            <div className="investidoresMaisInfoCard">
                <div className="investidoresMaisInfoHeader">
                    <Avatar sx={{ width: 86, height: 86, bgcolor: investidorSelecionado.color }}>
                        {getNameToAvatar(investidorSelecionado.nome)} 
                    </Avatar>
                    <Button variant="outlined" fullWidth startIcon={<FaPen />} onClick={handleEditarInvestidor}> Editar </Button>
                    <Button variant="outlined" fullWidth startIcon={<FaTrashAlt />} onClick={handleDeletarInvestidor}> Excluir </Button>
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
                        <Typography variant="body2" component="div" sx={{ color: '#7F8E9D;' }}>
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
                       
                    </div>

                </div >
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {'Confirmação de deletar'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Deseja realmente excluir investidor?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>MELHOR NÃO</Button>
                    <Button onClick={handleAgreed} autoFocus>SIM</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InvestidoresMaisInfo
