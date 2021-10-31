import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Label, ResponsiveContainer } from 'recharts';
import './GraficoTempoXRendimento.scss';

const formatarTempo = (tempo) => {
    const data = new Date(2021, 1, 1);
    data.setUTCSeconds(tempo * 3600);
    return data.toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric', hour12: false })
}

const formato = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',

});

const formatarValorParaReal = (entry) => {
    return formato.format(entry)

}


function GraficoTempoXRendimento({ data }) {

    return (
        <div className="GraficoTempoXRendimento">
            <ResponsiveContainer width="90%" height="90%">
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 20,
                    }}
                >
                    <XAxis
                        domain={['auto', 'auto']}
                        tickFormatter={formatarTempo}
                        tick={{ fontSize: 12 }}
                        dataKey="hora">

                        <Label value="Horas" position="bottom" />

                    </XAxis>

                    <YAxis
                        label={{ value: 'Rendimento em real', angle: -90, position: 'left', dy: -50 }}
                        tickFormatter={formatarValorParaReal}
                        tick={{ fontSize: 12 }} />
                    <Tooltip formatter={function (value) {
                        return formatarValorParaReal(value);
                    }}
                        labelFormatter={function (value) {
                            return 'Horário: ' + formatarTempo(value)
                        }} />
                    <Line type="monotone" dataKey="retorno" name="Rendimento" stroke="#1b5e20" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraficoTempoXRendimento
