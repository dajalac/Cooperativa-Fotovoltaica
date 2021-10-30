import React from 'react';
//import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dadosUsinas from '../../Utils/dadosUsina.json'
import './GraficoTemporal.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Label } from 'recharts';

function GraficoTemporal({ variavelResposta }) {
    
const formatarTempo = (tempo)=>{
    const data= new Date(2021, 1, 1);
    data.setUTCSeconds(tempo * 3600);
    return data.toLocaleTimeString('pt-BR',{hour: 'numeric', minute: 'numeric', hour12: false })
}

const formatarYlabel =()=>{
    if(variavelResposta==='potencia_kW'){
        return 'Potência'
    }
    if(variavelResposta==='tensao_V'){
        return 'Tensão'
    }
    if(variavelResposta==='corrente_A'){
        return 'Corrente'
    }
    if(variavelResposta==='temperatura_C'){
        return 'Temperatura'
    }


}
    return (
        <div className="graficoTemporal">
            <ResponsiveContainer width="90%" height="95%">
                <AreaChart  data={dadosUsinas}
                    margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                    <defs>
                        <linearGradient id="colorVariavel" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis domain={['auto', 'auto']}
                           dataKey="tempo_h"
                           tickFormatter = {formatarTempo }
                           tick={{ fontSize: 12 }}>
                    <Label value="Horas" position="bottom" />

                    </XAxis>

                    <YAxis
                        tick={{ fontSize: 12 }} 
                        label={{ value:formatarYlabel(), angle: -90, position: 'insideLeft' }} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey={variavelResposta} stroke="#8884d8" fillOpacity={1} fill="url(#colorVariavel)" />

                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraficoTemporal
//scale="time"