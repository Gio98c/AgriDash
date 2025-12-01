import { BarChart, Bar, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";


export default function FinancialChart({ data }) {

    return (
        <>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                    Analisi Finanziaria Mensile (€)
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                    Confronto tra Costi Operativi (Cop) e Margine di Profitto Lordo (MPL).
                </p>


                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >

                        {/* Griglia di sfondo */}
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false}/>

                        {/* Asse X: Mese */}
                        <XAxis dataKey="name" stroke="#333"/>

                        {/* Asse Y: Valore in Euro */}
                        <YAxis 
                            stroke="#333"
                            label={{ value: 'Valore (€)', angle: -90, position: 'insideLeft', fill: '#333', dx: -10}}
                            // formatta le etichette per mostrare il simbolo dell'euro €
                            tickFormatter={(value) => `€${value.toFixed(0)}`}
                        />

                        <Tooltip 
                            formatter={(value, name) => [`€${value.toFixed(2)}`, name]}
                            labelStyle={{ color: '#333', fontWeight: 'bold' }}
                            wrapperStyle={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}
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