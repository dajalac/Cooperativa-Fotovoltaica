import React from 'react';
import './GraficoRendimentos.scss'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer } from 'recharts';

const formato = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',

});

const formatarValorParaReal =(entry)=>{
    return formato.format(entry)
    
}



function GraficoRendimentos({data}) {
    return (
        <div className="graficoRendimentos">
            <ResponsiveContainer width="90%" height="100%">
                <BarChart
                 data={data}
                 margin={{
                     top: 5,
                     right: 10,
                     left: 10,
                     bottom: 20,
                 }}>
                    
                    <XAxis dataKey="nome">
                        <Label value="Investidores" position="bottom" />
                    </XAxis>

                    <YAxis  tick={{ fontSize: 12 }}
                            label={{ value: 'Rendimento em real', angle: -90, position:'left',dy:-50}}
                            tickFormatter={formatarValorParaReal}
                            offset={15}  
                            
                     />
                    <Tooltip />
                    <Bar dataKey="rendimento" fill="#8884d8" label={{ position: 'top',formatter:formatarValorParaReal}} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraficoRendimentos
