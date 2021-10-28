import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {removerInvestidor,setInvestidor} from '../../Redux';
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
    const {investidores} = useSelector((state) => state.investidor)

    let history = useHistory()

    useEffect(() => {
        // Para abrir snackbar se os dados forem salvos com sucesso!
        if(props.location.state){
            setOpenAlert(true)
        }
        console.log(props)
    }, [])


    const handleNovoInvestidor=()=>{
        history.push('/cadastrarInvestidor');
    }

    const handleDeletarInvestidor=(investidor)=>{
        dispatch(removerInvestidor(investidor))
    }

    const setInvestidoParaEditar=(investidor)=>{
        dispatch(setInvestidor(investidor))
    }

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenAlert(false);
      };

    return (
        <div className="gerenciarInvestidores">
            <SearchInvestidores />
            <div className="gerenciarInvestidoresNovoInvest" onClick={handleNovoInvestidor}>
              <p> Adicionar investidor</p>
            </div>
            <div className="gerenciarInvestidoresCard">
                {investidores.map((item)=>
                    <InvestidoresCard investidor={item}
                                       aoDeletarInvestidor={handleDeletarInvestidor}
                                       setInvestidoParaEditar={setInvestidoParaEditar}
                                       />
                )}
               
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
