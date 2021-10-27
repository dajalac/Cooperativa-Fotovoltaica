import React,{useState} from 'react';
import{validarNome} from '../../../Utils/Validation';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {FaSearch} from 'react-icons/fa';
import Button from '@mui/material/Button';
import './SearchInvestidores.scss'

function SearchInvestidores() {
    const [name, setName] = useState({value:'', error:false, errorMsg:''})

    const handleName =(event)=>{
       const nameError = validarNome(event.target.value);
       setName({ value: event.target.value, error: nameError.error, errorMsg: nameError.msg })
    }

    const OnSearch =()=>{
        if(!name.value){
            setName({...name, error:true, errorMsg:'Pelase enter a name'})
        }
        else if(!name.error){
          // onGetProvider(name.value)
        }
        
    }
    return (
        <div className="searchInvestidores">
            <TextField
                fullWidth
                size='small'
                id="input-with-icon-textfield"
                label="Nome do investidor"
                value={name.value}
                error ={name.error}
                helperText={name.errorMsg}
                onChange={handleName}

                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" >
                            <FaSearch />
                        </InputAdornment>
                    ),
                }}
                variant="outlined" />
            <Button variant="contained" color="success" sx={{ height: '100%' }} onClick={OnSearch}> Procurar </Button>
        </div>
    )
}

export default SearchInvestidores
