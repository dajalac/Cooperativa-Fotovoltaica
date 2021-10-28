import React from 'react';
import { EditarOuCadastrarForm } from '../../Components';

import Typography from '@mui/material/Typography';
import './EditarInvestidores.scss';

function EditarInvestidores() {
    return (
        <div className="editarInvestidores">
             <Typography variant="body1" component="div" sx={{color:'#7F8E9D'}}>
                    Atualizar informções do Investidor</Typography>
            <EditarOuCadastrarForm/>
        </div>
    )
}

export default EditarInvestidores
