import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import {updateInvestidor,limparFiltro} from '../../Redux';
import { EditarOuCadastrarForm } from '../../Components';

import Typography from '@mui/material/Typography';
import './EditarInvestidores.scss';

function EditarInvestidores() {
    const dispatch = useDispatch();
    const {investidorSelecionado} = useSelector((state) => state.investidor)

    const handleEditarInvestidor=(novoValor)=>{
        dispatch(updateInvestidor(novoValor))
    }
      // sera utilizado somente se o filtro estiver ativo enquanto o usuario edita um investidor 
      const handleRemoverFiltro=()=>{
        dispatch(limparFiltro())
    }

    return (
        <div className="editarInvestidores">
             <Typography variant="body1" component="div" sx={{color:'#7F8E9D'}}>
                    Atualizar informções do Investidor</Typography>
            <EditarOuCadastrarForm   handleSave={handleEditarInvestidor} 
                                    investidor={investidorSelecionado}
                                    handleRemoverFiltro={handleRemoverFiltro}/>
        </div>
    )
}

export default EditarInvestidores
