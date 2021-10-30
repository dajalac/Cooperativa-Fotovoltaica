import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import './InvestidoresLista.scss'


const displayList = (investidores) => {
    let toDisplay = []


    investidores.map((individuo, index, { length }) => {

        //if else implementado para nao inserir o Divider no ultimo item
        if (index + 1 === length) {
            toDisplay.push(
                <div>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{bgcolor:individuo.color}}>
                                {getNameToAvatar(individuo.nome)}</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={individuo.nome} />
                    </ListItem>
                </div>)
        } else {
            toDisplay.push(
                <div>
                    <ListItem>
                        <ListItemAvatar >
                            <Avatar sx={{bgcolor:individuo.color}}>
                                {getNameToAvatar(individuo.nome)}</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={individuo.nome} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </div>)
        }


    })

    return toDisplay;


}

const getNameToAvatar = (name) => {
    const nameInitials = []
    const nameSlipted = name.split(' ')

    nameSlipted.map(name => {
        nameInitials.push(name.charAt(0))
    })

    return nameInitials.join('')

}
function InvestidoresLista({investidores}) {
    return (
        <div className="investidoresLista">
            <h4>Investidores:</h4>
            <List
                sx={{
                    width: '90%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
            >
                {displayList(investidores)}
            </List>
            <br />
        </div>
    )
}

export default InvestidoresLista
