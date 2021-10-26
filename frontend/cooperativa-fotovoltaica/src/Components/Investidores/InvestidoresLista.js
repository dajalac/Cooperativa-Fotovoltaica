import React from 'react';
import investidores from '../../Utils/dadosClientes.json'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import './InvestidoresLista.scss'


const displayList = () => {
    const avatarColors =['#5c6bc0','#ffc107','#ff7043']
    //avatarColors[Math.floor(Math.random()*avatarColors.length)]}
    let toDisplay = []


    investidores.map((individuo, index, { length }) => {

        //if else implementado para nao inserir o Divider no ultimo item
        if (index + 1 === length) {
            toDisplay.push(
                <div>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{bgcolor:'#66bb6a'}}>
                                {getNameToAvatar(individuo.nomeCliente)}</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={individuo.nomeCliente} />
                    </ListItem>
                </div>)
        } else {
            toDisplay.push(
                <div>
                    <ListItem>
                        <ListItemAvatar >
                            <Avatar sx={{bgcolor:avatarColors[index]}}>
                                {getNameToAvatar(individuo.nomeCliente)}</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={individuo.nomeCliente} />
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
function InvestidoresLista() {
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
                {displayList()}
            </List>
            <br />
        </div>
    )
}

export default InvestidoresLista
