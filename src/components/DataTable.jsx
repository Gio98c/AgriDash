import React from "react";

// Componente DataTable
// Riceve un aray di dati e lo visualizza in una tabella HTML

export default function DataTable({ data }) {

    if (!data || data.lenght === 0) {
        return <div className="text-center text-gray-500 dark:text-gray-400">Nessun dato disponibile.</div>;
    }

    return (
        <>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                    <h3 className="ttext-lg font-semibold text-gray-700 dark:text-gray-200">
                        Tabella Dati Generati
                    </h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-900/50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Mese</th>

                                {/* Colonne Input */}
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Temp (°C)</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Pioggia (mm)</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Irrig. (mm)</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Costi (€)</th>
                                
                                {/* Colonne Output */}
                                <th className="px-6 py-3 text-left text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">Resa (t/ha)</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-green-600 dark:text-green-400 uppercase">WUE</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-red-600 dark:text-red-400 uppercase">COP (€/t)</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-purple-600 dark:text-purple-400 uppercase">Margine (€)</th>
                            </tr>
                        </thead>

                        {/* Corpo del body */}
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {
                                data.map((row, index) => (
                                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                        {/* Mese */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white"> {row.name} </td>

                                        {/* Dati in input */}
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400"> {row.T} </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400"> {row.P} </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400"> {row.I} </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400"> {row.Cop} </td>

                                        {/* Dati in output */}
                                        <td className="px-6 py-4 text-sm font-bold text-blue-700 dark:text-blue-400"> {row.Resa} </td>
                                        <td className="px-6 py-4 text-sm font-bold text-green-700 dark:text-green-400"> {row.WUE} </td>
                                        <td className="px-6 py-4 text-sm font-bold text-red-700 dark:text-red-400"> {row.COP} </td>
                                        <td className="px-6 py-4 text-sm font-bold text-purple-700 dark:text-purple-400"> {row.MPL} </td>
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