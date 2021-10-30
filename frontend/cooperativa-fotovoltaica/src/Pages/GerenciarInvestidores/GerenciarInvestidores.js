import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removerInvestidor, setInvestidor, filtrarInvestidores,limparFiltro,limparInvestidorSelecionado } from '../../Redux';
import { InvestidoresCard, SearchInvestidores } from '../../Components';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './GerenciarInvestidores.scss'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function GerenciarInvestidores(props) {
    const [openAlert, setOpenAlert] = useState(false);
    const dispatch = useDispatch();
    const { investidores, investidoresFiltrados, filtroAtivo } = useSelector((state) => state.investidor)

    let history = useHistory()

    useEffect(() => {
        // Abrir snackbar se o props for passado
        // o props sera passado so se os dados forem atualizados ou novo cadastro realizado com sucesso
        if (props.location.state) {
            if (props.location.state.openSnackbar) {
                setOpenAlert(true)
            }

        }
       
        // para reset investidor selecionado, caso tenha um
        dispatch(limparInvestidorSelecionado());
    }, [])

    const handleProcurarInvestidor = (nome) => {
        dispatch(filtrarInvestidores(nome))
    }

    const handleNovoInvestidor = () => {
        history.push('/cadastrarInvestidor');
    }

    const handleDeletarInvestidor = (investidor) => {
        dispatch(removerInvestidor(investidor))
    }

    const setInvestidoParaEditar = (investidor) => {
        dispatch(setInvestidor(investidor))
    }

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
        //props.location.state.openSnackbar(false);
    };

    const handleRemoverFiltro=()=>{
        dispatch(limparFiltro())
    }
    const displayInvestidoresCards = () => {
        let toDisplay = []

        if (filtroAtivo) {
            investidoresFiltrados.map((item) => {
                toDisplay.push(<InvestidoresCard investidor={item}
                    aoDeletarInvestidor={handleDeletarInvestidor}
                    setInvestidoParaEditar={setInvestidoParaEditar}
                />);
            })
        } else {
            toDisplay.push(investidores.map((item) =>
                <InvestidoresCard investidor={item}
                    aoDeletarInvestidor={handleDeletarInvestidor}
                    setInvestidoParaEditar={setInvestidoParaEditar}
                />
            ));
        }

        return toDisplay;
    }

    return (
        <div className="gerenciarInvestidores">
            <SearchInvestidores handleProcurarInvestidor={handleProcurarInvestidor} handleRemoverFiltro={handleRemoverFiltro} />
            <div className="gerenciarInvestidoresNovoInvest">
                <p onClick={handleNovoInvestidor}> Adicionar investidor</p>
            </div>
            <div className="gerenciarInvestidoresCard">
                {displayInvestidoresCards()}

            </div>
            {/**Snackbar ira abrir somente depois que um cliente for editado ou cadastrado */}
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                    informções salvas com sucesso!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default GerenciarInvestidores
