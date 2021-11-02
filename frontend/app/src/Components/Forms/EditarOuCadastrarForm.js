import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as validators from '../../Utils/Validation';
import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-number-input';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IoAdd, IoRemove } from "react-icons/io5";
import 'react-phone-number-input/style.css';
import './EditarOuCadastrarForm.scss';



function EditarOuCadastrarForm({ handleSave, investidor,handleRemoverFiltro }) {
    const valorInicial = { valor: '', erro: false, erroMsg: ' ' };
    const [nome, setNome] = useState(valorInicial);
    const [email, setEmail] = useState(valorInicial);
    const [endereco, setEndereco] = useState(valorInicial);
    const [telefone, setTelefone] = useState();
    const [investimento, setInvestimento] = useState();
    let history = useHistory();



    useEffect(() => {
        //Se um investidor eh passado para o componente, entao esse investidor sera editado. 
        if (investidor !== undefined) {
            setNome({ ...nome, valor: investidor.nome })
            setEmail({ ...email, valor: investidor.email })
            setEndereco({ ...endereco, valor: investidor.endereco })
            setTelefone(investidor.telefone)
            setInvestimento(investidor.usina.percentual)
        }
    }, [])


    const reduzirPercentual = () => {
        const novoValor = parseInt(investimento) - 1;
        setInvestimento(novoValor)
    }

    const adiconarPercentual = () => {
        const novoValor = parseInt(investimento) + 1;
        setInvestimento(novoValor)
    }

    const desabilitarSaveBtn = () => {
        let flag = false
        const checkPorErro = [nome, email, endereco]

        for (let step = 0; step < checkPorErro.length; step++) {
            if (checkPorErro[step].erro) {
                return flag = true;
            }
            if (!checkPorErro[step].erro && !checkPorErro[step].valor) {
                return flag = true;
            }
        }
        if (!telefone || !investimento) {
            return flag = true
        }
        return flag
    }

    const displayUpdatePorcentual = () => {
        const toDisplay = []
        if (investidor === undefined) {
            toDisplay.push(<div onChange={handleInvestimento}>
                <Typography variant="body2" component="div" sx={{ color: '' }}>
                    <label>Proporção do investimento desejada: </label>
                    <label><input type="radio" value="5" name="searchBy" /> <span>5%</span></label>
                    <label><input type="radio" value="10" name="searchBy" /> <span>10%</span></label>
                    <label><input type="radio" value="20" name="searchBy" /> <span>20%</span></label>
                </Typography>
            </div>)

        } else {
            toDisplay.push(
                <div className="editarOuCadastrarFormUpdatePercentual">
                    <label>Percentual atual: </label>
                    <div>
                        <IoAdd onClick={adiconarPercentual} className="editarOuCadastrarFormIcons" />
                        <label>  {investimento}% </label>
                        <IoRemove onClick={reduzirPercentual} className="editarOuCadastrarFormIcons" />
                    </div>
                </div>
            )
        }

        return toDisplay;
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

    const onSave = () => {
        // novo cadastro
        if (investidor === undefined) {
            const investidor = {
                id: new Date(),
                nome: nome.valor,
                telefone: telefone,
                email: email.valor,
                endereco: endereco.valor,
                color: '#' + Math.floor(Math.random() * 16777215).toString(16),
                usina: {
                    id: 1,
                    percentual: investimento
                }
            }
            handleSave(investidor)

        } else {
            //atializar cadastro
            const edicoes = {
                id: investidor.id,
                nome: nome.valor,
                telefone: telefone,
                email: email.valor,
                endereco: endereco.valor,
                usina: {
                    id: 1,
                    percentual: investimento
                }
            }

            handleSave(edicoes);
            handleRemoverFiltro(); // caso o filtro esteja ativo
        }

        history.push({ pathname: '/gerenciarInvestidores', state: { openSnackbar: true } });

    }

    const onCancel = () => {
        history.push('/gerenciarInvestidores')
    }

    return (
        <div className="editarOuCadastrarForm">
            <TextField fullWidth
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

            <TextField fullWidth
                id="outlined-basic"
                label="Endereço"
                variant="outlined"
                value={endereco.valor}
                error={endereco.erro}
                helperText={endereco.erroMsg}
                onChange={handleEndereco}
                required />

            <div className="editarOuCadastrarFormUsina" >
                <Typography variant="body2" component="div" sx={{ color: '#7F8E9D' }}>
                    Usina fotovoltaica: Souto Maior</Typography>

                {displayUpdatePorcentual()}
            </div>

            <div className="editarOuCadastrarFormBtn">

                <Button variant="outlined" fullWidth onClick={onCancel}> Cancelar </Button>
                <Button variant="contained" fullWidth onClick={onSave} disabled={desabilitarSaveBtn()}> Salvar </Button>
            </div>

        </div>




    )
}

export default EditarOuCadastrarForm
