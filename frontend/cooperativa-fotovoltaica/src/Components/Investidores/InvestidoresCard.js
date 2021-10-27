import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {FaPen,FaTrashAlt } from 'react-icons/fa';

import './InvestidoresCard.scss';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


function InvestidoresCard() {
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
                    <Button size="small">Ver mais</Button>
                    <div>
                    <FaPen className="investidoresCardIcons"/>
                    <FaTrashAlt className="investidoresCardIcons" />
                    </div>
                </CardActions>
            </Card>
        </div>
    )
}

export default InvestidoresCard
