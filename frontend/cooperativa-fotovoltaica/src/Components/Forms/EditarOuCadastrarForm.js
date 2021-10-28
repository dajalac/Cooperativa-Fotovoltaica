import React, { useState } from 'react';
import * as validators from '../../Utils/Validation';
import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-number-input';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import 'react-phone-number-input/style.css';
import './EditarOuCadastrarForm.scss';

function EditarOuCadastrarForm({handleSave}) {
    const valorInicial = { valor: '', erro: false, erroMsg: ' ' };
    const [nome, setNome] = useState(valorInicial);
    const [email, setEmail] = useState(valorInicial);
    const [endereco, setEndereco] = useState(valorInicial);
    const [telefone, setTelefone] = useState();
    const [investimento, setInvestimento] = useState()
    //const checkPorErro={nome, email,endereco,telefone,investimento}

    const desabilitarSaveBtn =()=>{
        let flag =false
        const checkPorErro=[nome, email,endereco]

        for(let step=0; step<checkPorErro.length; step++){
            if(checkPorErro[step].erro){
               return flag=true;
            }
            if(!checkPorErro[step].erro && !checkPorErro[step].valor){
                return flag=true;
            }
        }
        if(!telefone || !investimento){
            return flag=true
        }
      return flag
    }

    const handleNome = (event) => {
        const nomeErro = validators.validarNome(event.target.value);
        setNome({ valor: event.target.value, erro: nomeErro.error, erroMsg: nomeErro.msg })
    }

    const handleEmail = (event) => {
        const checkarErro = validators.validarEmail(event.target.value)
        setEmail({ valor: event.target.value, erro: checkarErro.error, erroMsg: checkarErro.msg })
    }

    const handleEndereco = (event) => {
        const checkarErro = validators.validarEndereco(event.target.value)
        setEndereco({ valor: event.target.value, erro: checkarErro.error, erroMsg: checkarErro.msg })
    }

    const handleInvestimento = (event) => {
        setInvestimento(event.target.value)
    }

    const onSave =()=>{

        const investidor={id:new Date(),
                         nome: nome.valor,
                         telefone: telefone,
                         email: email.valor,
                        usina:{
                            id:1,
                            percentual:investimento
                        } }

        handleSave(investidor)
    }

    return (
        <div className="editarOuCadastrarForm">
            <TextField  fullWidth
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                value={nome.valor}
                error={nome.erro}
                helperText={nome.erroMsg}
                onChange={handleNome}
                required />

            <div className="editarOuCadastrarFormPhone">
                <PhoneInput
                    placeholder="Telefone"
                    defaultCountry='BR'
                    value={telefone}
                    onChange={setTelefone} />
            </div>

            <TextField fullWidth
                id="outlined-basic"
                label="e-mail"
                variant="outlined"
                value={email.valor}
                error={email.erro}
                helperText={email.erroMsg}
                onChange={handleEmail}
                required />

            <TextField  fullWidth
                id="outlined-basic"
                label="Endereço"
                variant="outlined"
                value={endereco.valor}
                error={endereco.erro}
                helperText={endereco.erroMsg}
                onChange={handleEndereco}
                required />

            <div className="editarOuCadastrarFormUsina" >
                <Typography variant="body2" component="div" sx={{color:'#7F8E9D'}}>
                    Usina fotovoltaica: Souto Maior</Typography>
               
            <div  onChange={handleInvestimento}>
            <Typography variant="body2" component="div" sx={{color:''}}>
               <label>Proporção do investimento desejada: </label>
                <label><input type="radio" value="5" name="searchBy" /> <span>5%</span></label>
                <label><input type="radio" value="10" name="searchBy" /> <span>10%</span></label>
                <label><input type="radio" value="20" name="searchBy" /> <span>20%</span></label>
                </Typography>
                </div>
            
            </div>
            <div className="editarOuCadastrarFormBtn">
                
                <Button variant="outlined" fullWidth > Cancelar </Button>
                <Button variant="contained" fullWidth onClick={onSave}  disabled={desabilitarSaveBtn()}> Salvar </Button>
            </div>
        </div>




    )
}

export default EditarOuCadastrarForm
