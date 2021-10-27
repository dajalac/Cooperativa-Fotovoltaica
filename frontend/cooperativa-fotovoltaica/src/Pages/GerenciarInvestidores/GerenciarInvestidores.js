import React from 'react';
import { InvestidoresCard, SearchInvestidores } from '../../Components';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import { GrAdd } from "react-icons/gr";
import './GerenciarInvestidores.scss'

function GerenciarInvestidores() {
    return (
        <div className="gerenciarInvestidores">
            <SearchInvestidores />
            <div className="gerenciarInvestidoresNovoInvest">
              <p> Adicionar investidor</p>
            </div>
            <div className="gerenciarInvestidoresCard">
                <InvestidoresCard />
                <InvestidoresCard />
                <InvestidoresCard />
            </div>


        </div>
    )
}

export default GerenciarInvestidores
