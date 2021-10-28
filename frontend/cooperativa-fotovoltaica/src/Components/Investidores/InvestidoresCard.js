import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
        aoDeletarInvestidor(investidor)
    }
    return (
        <div>
            <Card className="investidoresCard" sx={{ minWidth: 275 }}>
                <CardContent className="investidoresCardContent">
                    <Avatar sx={{ width: 56, height: 56, bgcolor: '#ffc107' }} >
                        {getNameToAvatar(investidor.nome)} </Avatar>
                     <div className="investidoresCardInfo">  
                    <Typography variant="body1" component="div">
                        Nome: {investidor.nome}
                    </Typography>
                    <Typography variant="body1">
                        Participacao: {investidor.usina.percentual}%
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
        </div>
    )
}

export default InvestidoresCard
