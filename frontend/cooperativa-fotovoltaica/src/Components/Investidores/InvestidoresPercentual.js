import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';


import './InvestidoresPercentual.scss'
import { ListItemIcon, ListSubheader } from '@mui/material';



const getNameToAvatar = (name) => {
    const nameInitials = []
    const nameSlipted = name.split(' ')

    nameSlipted.map(name => {
        nameInitials.push(name.charAt(0))
    })

    return nameInitials.join('')

}


function InvestidoresPercentual({ investidores }) {
    return (

        <div className="investidoresPercentual">
            <h5>Percentual de cada investidor</h5>
            {investidores.map((investidor) => {

                const props = {value:investidor.usina.percentual};
              return(  <div className="investidoresPercentualCard">
                    <Avatar sx={{ bgcolor: '#66bb6a' }}>{getNameToAvatar(investidor.nome)}</Avatar>
                    <div className="investidoresPercentualInfo">
                        <Typography variant="body1" color="text.secondary">{investidor.nome}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', width: '100% ' }}>
                            <Box sx={{ width: '100%', mr: 1 }}>
                                <LinearProgress variant="determinate" {...props} sx={{
                                    height: '1rem', backgroundColor: 'white', border: '1px solid rgb(199, 187, 187)'
                                }} />
                            </Box>
                            <Box sx={{ minWidth: 35 }}>
                                <Typography variant="body2" color="text.secondary">{`${Math.round(
                                    props.value,
                                )}%`}</Typography>
                            </Box>
                        </Box>
                    </div>

                </div> )
            })}

        </div>



    )

}

export default InvestidoresPercentual
