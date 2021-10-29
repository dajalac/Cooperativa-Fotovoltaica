import React from 'react';
import './GraficoRendimentos.scss'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function GraficoRendimentos({data}) {
    return (
        <div className="graficoRendimento">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="nome" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="rendimento" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraficoRendimentos
