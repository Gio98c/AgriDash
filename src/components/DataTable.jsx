import React from "react";

// Componente DataTable
// Riceve un aray di dati e lo visualizza in una tabella HTML

export default function DataTable({ data }) {

    if (!data || data.lenght === 0) {
        return <div className="text-center text-gray-500">Nessun dato disponibile.</div>;
    }

    return (
        <>
            <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-700">
                        Tabella Dati Generati
                    </h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Mese</th>

                                {/* Colonne Input */}
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Temp (°C)</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Pioggia (mm)</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Irrig. (mm)</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Costi (€)</th>
                                
                                {/* Colonne Output */}
                                <th className="px-6 py-3 text-left text-xs font-bold text-blue-600 uppercase tracking-wider">Resa (t/ha)</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-green-600 uppercase tracking-wider">WUE</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-red-600 uppercase tracking-wider">COP (€/t)</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-purple-600 uppercase tracking-wider">Margine (€)</th>
                            </tr>
                        </thead>

                        {/* Corpo del body */}
                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                data.map((row, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                                        {/* Mese */}
                                        <td className="px-6 py-4 whitespace-nowrap text-nowrap font-medium text-gray-900"> {row.name} </td>

                                        {/* Dati in input */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> {row.T} </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> {row.P} </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> {row.I} </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> {row.Cop} </td>

                                        {/* Dati in output */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700"> {row.Resa} </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700"> {row.WUE} </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-700"> {row.COP} </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-700"> {row.MPL} </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}