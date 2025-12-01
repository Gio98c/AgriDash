import { BarChart, Bar, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";


export default function FinancialChart({ data, isDarkMode }) {

    // Colori dinamici
    const axisColor = isDarkMode ? '#9CA3AF' : '#374151'; 
    const gridColor = isDarkMode ? '#374151' : '#e5e7eb';
    const tooltipStyle = {
        backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
        borderColor: isDarkMode ? '#374151' : '#ccc',
        color: isDarkMode ? '#F3F4F6' : '#111827'
    };

    return (
        <>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4 flex items-center">
                    Analisi Finanziaria Mensile (€)
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Confronto tra Costi Operativi (Cop) e Margine di Profitto Lordo (MPL).
                </p>


                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >

                        {/* Griglia di sfondo */}
                        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false}/>

                        {/* Asse X: Mese */}
                        <XAxis dataKey="name" stroke={axisColor} tick={{ fill: axisColor }}/>

                        {/* Asse Y: Valore in Euro */}
                        <YAxis 
                            stroke={axisColor}
                            tick={{ fill: axisColor }}
                            label={{ value: 'Valore (€)', angle: -90, position: 'insideLeft', fill: axisColor, dx: -20}}
                            // formatta le etichette per mostrare il simbolo dell'euro €
                            tickFormatter={(value) => `€${value.toFixed(0)}`}
                        />

                        <Tooltip 
                            contentStyle={tooltipStyle}
                            formatter={(value, name) => [`€${value.toFixed(2)}`, name]}
                        />

                        <Legend wrapperStyle={{ paddingTop: '20px' }}/>

                        {/* Serie Dati 1: Costi Operativi (Arancione - Amber) */}
                        {/* Rappresenta l'uscita di cassa per le operazioni */}
                        <Bar 
                            dataKey="Cop"
                            fill="#F59E0B"
                            name="Costi Operativi (€/ha)"
                            opacity={0.8}
                        />
                        
                        {/* Serie Dati 2: Margine di Profitto Lordo (Viola/Indaco) */}
                        {/* Rappresenta il guadagno/perdita */}
                        <Bar 
                            dataKey="MPL"
                            fill="#4F46E5"
                            name="Margine di Profitto (€/ha)"
                            opacity={0.9}
                        />

                    </BarChart>
                </ResponsiveContainer>

            </div>
        </>
    );
}