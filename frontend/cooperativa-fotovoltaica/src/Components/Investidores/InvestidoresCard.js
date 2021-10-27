import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {FaPen,FaTrashAlt } from 'react-icons/fa';

import './InvestidoresCard.scss';


function InvestidoresCard() {
    let history = useHistory()

    const handleVerMaisBtn=()=>{
        history.push('/investidorInformacao');
    }

    const handleEditarInvestidor=()=>{
        history.push('/editarInvestidores');
    }
    return (
        <div>
            <Card className="investidoresCard" sx={{ minWidth: 275 }}>
                <CardContent className="investidoresCardContent">
                    <Avatar sx={{ width: 56, height: 56, bgcolor: '#ffc107' }} >SP </Avatar>
                     <div className="investidoresCardInfo">  
                    <Typography variant="body1" component="div">
                        Nome: Ana Paula
                    </Typography>
                    <Typography variant="body1">
                        Participacao: 40%
                    </Typography>
                    </div>
                </CardContent>
                <CardActions className="investidoresCardActions">
                    <Button size="small" onClick={handleVerMaisBtn}>Ver mais</Button>
                    <div>
                    <FaPen className="investidoresCardIcons" onClick={handleEditarInvestidor}/>
                    <FaTrashAlt className="investidoresCardIcons" />
                    </div>
                </CardActions>
            </Card>
        </div>
    )
}

export default InvestidoresCard
