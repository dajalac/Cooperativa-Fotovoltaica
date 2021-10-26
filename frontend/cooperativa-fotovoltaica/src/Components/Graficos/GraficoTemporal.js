import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dadosUsinas from '../../Utils/dadosUsina.json'
import './GraficoTemporal.scss'


function GraficoTemporal({variavelResposta}) {
    return (
        <div className="graficoTemporal">
            <ResponsiveContainer width="100%" height="98%">
                <LineChart
                    width={500}
                    height={300}
                    data={dadosUsinas}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="tempo_h" />
                    <YAxis />
                    <Tooltip /> 
                    <Legend />
                    <Line type="monotone" dataKey={variavelResposta} stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraficoTemporal
