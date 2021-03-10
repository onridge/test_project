import React from 'react';
import { useSelector } from 'react-redux';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

export default function ChartPanel() {
    const { weatherData } = useSelector((state) => state.weather);
    const data = weatherData.map((i) => (
        {
            name: i.dt_txt,
            temp: i.main.temp_max,
        })
    );

    return (
        <>
            <LineChart
                width={1100}
                height={600}
                data={data}
                margin={{
                    top: 50, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{ r: 8 }}/>
            </LineChart>
        </>
    )
}