import React, { useState } from 'react';
import { validarNome } from '../../../Utils/Validation';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/material/Chip';
import { FaSearch, FaTimes} from 'react-icons/fa';

import Button from '@mui/material/Button';
import './SearchInvestidores.scss'

function SearchInvestidores({ handleProcurarInvestidor, handleRemoverFiltro }) {
    const [name, setName] = useState({ value: '', error: false, errorMsg: '' })
    const [filters, setFilters] = useState(null)

    const handleName = (event) => {
        const nameError = validarNome(event.target.value);
        setName({ value: event.target.value, error: nameError.error, errorMsg: nameError.msg })
    }

    const onSearch = () => {
        if (!name.value) {
            setName({ ...name, error: true, errorMsg: 'Entre um nome para busca' })
        }
        else if (!name.error) {
            handleProcurarInvestidor(name.value);
        }

        setFilters(name.value)
    }

    const limparFiltro = () => {
        handleRemoverFiltro()
        setFilters(null)
        setName({ value: '', error: false, errorMsg: '' })
    }
    return (
        <div className="searchInvestidores">
            <div className="searchInvestioresSearchBar">
                <TextField
                    fullWidth
                    size='small'
                    id="input-with-icon-textfield"
                    value={name.value}
                    error={name.error}
                    helperText={name.errorMsg}
                    onChange={handleName}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" >
                                <FaSearch />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                    sx={{backgroundColor:'white'}} />

                <Button variant="contained" color="success" sx={{ height: '100%' }} onClick={onSearch}> Procurar </Button>
            </div>
            {filters &&  <div><Chip
                        icon={FaTimes}
                        label={filters}
                        onDelete={limparFiltro}
            /> </div>}
        </div>
    )
}

export default SearchInvestidores
