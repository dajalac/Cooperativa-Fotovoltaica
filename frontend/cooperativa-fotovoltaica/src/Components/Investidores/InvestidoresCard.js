import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {FaPen,FaTrashAlt } from 'react-icons/fa';

import './InvestidoresCard.scss';

const getNameToAvatar = (name) => {
    const nameInitials = []
    const nameSlipted = name.split(' ')

    nameSlipted.map(name => {
        nameInitials.push(name.charAt(0))
    })

    return nameInitials.join('')

}

function InvestidoresCard({investidor, aoDeletarInvestidor,setInvestidoParaEditar}) {
    const [open, setOpen] = useState(false);
    let history = useHistory()

    const handleVerMaisBtn=()=>{
        setInvestidoParaEditar(investidor);
        history.push('/investidorInformacao');
    }

    const handleEditarInvestidor=()=>{
        setInvestidoParaEditar(investidor);
        history.push('/editarInvestidores');
    }

    const handleDeletarInvestidor =()=>{
        setOpen(true)
    }


    const handleAgreed = () => {
        setOpen(false);
        aoDeletarInvestidor(investidor)
        history.push('/gerenciarInvestidores')
    }
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Card className="investidoresCard" sx={{ minWidth: 275 }}>
                <CardContent className="investidoresCardContent">
                    <Avatar sx={{ width: 56, height: 56, bgcolor:investidor.color }} >
                        {getNameToAvatar(investidor.nome)} </Avatar>
                     <div className="investidoresCardInfo">  
                    <Typography variant="body1" component="div">
                        Nome: {investidor.nome}
                    </Typography>
                    <Typography variant="body1">
                        Participacao: {Math.round((investidor.usina.percentual + Number.EPSILON) * 100) / 100}%
                    </Typography>
                    </div>
                </CardContent>
                <CardActions className="investidoresCardActions">
                    <Button size="small" onClick={handleVerMaisBtn}>Ver mais</Button>
                    <div>
                    <FaPen className="investidoresCardIcons" onClick={handleEditarInvestidor}/>
                    <FaTrashAlt className="investidoresCardIcons" onClick={handleDeletarInvestidor} />
                    </div>
                </CardActions>
            </Card>
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

export default InvestidoresCard
