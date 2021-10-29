import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function GraficoTempoXRendimento({data}) {
    return (
        <div style={{width:"100%", height:"500px"}}>
            <ResponsiveContainer width="100%" height="98%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="hora" />
                    <YAxis />
                    <Tooltip /> 
                    <Legend />
                    <Line type="monotone" dataKey="retorno" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
                </ResponsiveContainer>
        </div>
    )
}

export default GraficoTempoXRendimento
