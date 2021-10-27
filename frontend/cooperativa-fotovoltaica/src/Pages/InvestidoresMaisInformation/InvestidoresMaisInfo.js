import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {FaPen,FaTrashAlt } from 'react-icons/fa';
import './InvestidoresMaisInfo.scss';

function InvestidoresMaisInfo() {
    return (
        <div className="investidoresMaisInfo">
        <div className="investidoresMaisInfoCard">
           <div className="investidoresMaisInfoHeader">
                <Avatar sx={{ width: 86, height: 86, bgcolor: '#ffc107' }} >AP </Avatar>
                <Button variant="outlined" fullWidth startIcon={<FaPen/>}> Editar </Button>
                <Button variant="outlined" fullWidth startIcon={<FaTrashAlt/>}> Excluir </Button>
            </div> 
            <div className="investidoresMaisInfoBody">
                <div className="investidoresMaisInfoPersonal">
                    <Typography variant="body1" component="div">
                        Nome: Ana Paula
                    </Typography>
                    <Typography variant="body1" component="div">
                        e-mail:ana@gmail.com
                    </Typography>
                    <Typography variant="body1" component="div">
                        cel: (067)9874-4256
                    </Typography>
                    <Typography variant="body1" component="div">
                        Endereço: Rua dos Milagres, 23, Salvador, BA
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
                        Procentagem de participação: 40%
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
