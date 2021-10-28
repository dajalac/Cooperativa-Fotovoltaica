import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addInvestidor} from '../../Redux';
import { EditarOuCadastrarForm } from '../../Components';
import Typography from '@mui/material/Typography';
import './CadastrarInvestidor.scss'

function CadastrarInvestidor() {
    const dispatch = useDispatch();
    const {} = useSelector((state) => state.investidor)

    
    const handleAddInvestidor =(novoInvestidor)=>{
        dispatch(addInvestidor(novoInvestidor))
    }

    return (
        <div className="cadastrarInvestidor">
            <Typography variant="body1" component="div" sx={{color:'#7F8E9D'}}>
                    Cadastrar Novo Investidor</Typography>
            <EditarOuCadastrarForm handleSave={handleAddInvestidor} />
        </div>
    )
}

export default CadastrarInvestidor
