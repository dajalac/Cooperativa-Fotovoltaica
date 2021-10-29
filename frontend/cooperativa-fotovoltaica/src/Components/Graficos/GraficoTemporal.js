import React from 'react';
//import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dadosUsinas from '../../Utils/dadosUsina.json'
import './GraficoTemporal.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function GraficoTemporal({ variavelResposta }) {
    return (
        <div className="graficoTemporal">
            <ResponsiveContainer width="100%" height="98%">
                {/* <LineChart
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
                </LineChart> */}
                <AreaChart width={730} height={250} data={dadosUsinas}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey={variavelResposta} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />

                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraficoTemporal
