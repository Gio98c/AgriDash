import { LineChart, Bar, CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function YieldChart({ data, isDarkMode }) {

    const axisColor = isDarkMode ? '#9CA3AF' : '#374151'; // gray-400 vs gray-700
    const gridColor = isDarkMode ? '#374151' : '#e5e7eb'; // gray-700 vs gray-200

    // Stili per il tooltip (la finestrella che appare al mouseover)
    const tooltipStyle = {
        backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF', // gray-800 vs white
        borderColor: isDarkMode ? '#374151' : '#ccc',
        color: isDarkMode ? '#F3F4F6' : '#111827'
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4 flex items-center">
                Analisi Resa (t/ha) vs Fattori Critici
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Andamento mensile della produzione in relazione a Irrigazione e Temperatura.
            </p>

            {/* Grafico responsivo che si adatta a qualsiasi dimensione dello schermo */}
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    {/* Griglia di sfondo per facilitare la lettura */}
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />

                    {/* Asse X: Mese */}
                    <XAxis dataKey="name" stroke={axisColor} tick={{ fill: axisColor }} />

                    {/* Asse Y sinistro: Per la resa (Linee) */}
                    <YAxis
                        yAxisId="left"
                        orientation="left"
                        stroke="#10B981" // Verde (Emerald)
                        label={{ value: 'Resa (t/ha)', angle: -90, position: 'insideLeft', fill: '#10B981', dx: -20 }}
                    />

                    {/* Asse Y destro: Per temperatura e irrigazione (Barra/Linee) */}
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#F59E0B" // Arancione (Amber)
                        label={{ value: 'Variabili (°C/mm)', angle: 90, position: 'insideRight', fill: '#F59E0B', dx: 20 }}
                    />

                    {/* Tooltip: Mostra i dettagli quando si passa il mouse su un punto del grafico */}
                    <Tooltip
                        contentStyle={tooltipStyle}
                        formatter={(value, name) => {
                            if (name === 'T') return [`${value}°C`, 'Temperatura Media'];
                            if (name === 'I') return [`${value} mm`, 'Irrigazione (Input)'];
                            if (name === 'Resa') return [`${value} t/ha`, 'Resa Totale'];
                            return value;
                        }}
                    //labelStyle={{ color: '#333', fontWeight: 'bold' }}
                    //wrapperStyle={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}
                    />

                    <Legend wrapperStyle={{ paddingTop: '20px' }} />


                    {/* Dati -> Resa (linea Verde) */}
                    {/* Variabile Output principale */}
                    <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="Resa"
                        stroke="#10B981"
                        strokeWidth={3}
                        dot={{ r: 5 }}
                        activeDot={{ r: 8 }}
                        name="Resa Prodotta (t/ha)"
                    />

                    {/* Dati -> Temperatura (linea Arancione) */}
                    <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="T"
                        stroke="#F59E0B"
                        strokeWidth={2}
                        name="Temperatura Media (°C)"
                    />

                    {/* Dati -> Irrigazione (Barra Blue) */}
                    <Bar
                        yAxisId="right"
                        dataKey="I"
                        fill="#3B82F6"
                        name="Irrigazione (Input Gestionale)"
                        opacity={0.8}
                    />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}