import { Droplets, LucideActivity, Sprout, TrendingUp, Wallet } from "lucide-react";
import { useMemo } from "react";

export default function KpiSummary({ data }) {

    const summary = useMemo(() => {
        if (!data || data.lenght === 0) return null;

        // somme dei dati mensili
        const totalResa = data.reduce((acc, curr) => acc + curr.Resa, 0);
        const totalMargine = data.reduce((acc, curr) => acc + curr.MPL, 0);

        // medie dei dati mensili; sommiamo e dividiamo per il numero di mesi
        const avgWUE = data.reduce((acc, curr) => acc + curr.WUE, 0) / data.length; // media dell'efficienza dell'acqua
        const avgCOP = data.reduce((acc, curr) => acc + curr.COP, 0) / data.length; // media dei costi di produzione

        return {
            totalResa: totalResa.toFixed(1),
            totalMargine: totalMargine.toFixed(0),
            avgWUE: avgWUE.toFixed(2),
            avgCOP: avgCOP.toFixed(2)
        };
    }, [data]);

    if (!summary) return null;

    const cardClass = "bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 flex justify-between transition-colors duration-300";

    // VISUALIZZAZIONE
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

                {/* CARD1: Resa Totale */}
                <div className={`${cardClass} border-emerald-500`}>
                    <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Resa Totale</p>
                        <p className="text-3xl font-bold text-gray-800 dark:text-white">{summary.totalResa} <span className="text-lg text-gray-400 font-normal">t/ha</span></p>
                    </div>
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-600 dark:text-emerald-400">
                        <Sprout size={28}/>
                    </div>
                </div>

                {/* CARD2: Profitto Lordo */}
                <div className={`${cardClass} border-indigo-500`}>
                    <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Profitto Lordo</p>
                        <p className="text-3xl font-bold text-gray-800 dark:text-white">€ {summary.totalMargine}</p>
                    </div>
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400">
                        <Wallet size={28}/>
                    </div>
                </div>

                {/* CARD3: Efficienza Acqua */}
                <div className={`${cardClass} border-blue-500`}>
                    <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Efficicenza Idrica</p>
                        <p className="text-3xl font-bold text-gray-800 dark:text-white">{summary.avgWUE} <span className="text-lg text-gray-400 font-normal">kg/m³</span></p>
                    </div>
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                        <Droplets size={28}/>
                    </div>
                </div>

                {/* CARD4: Costo Medio */}
                <div className={`${cardClass} border-amber-500`}>
                    <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Resa Totale</p>
                        <p className="text-3xl font-bold text-gray-800 dark:text-white">€ {summary.avgCOP} <span className="text-lg text-gray-400 font-normal">/t</span></p>
                    </div>
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full text-amber-600 dark:text-amber-400">
                        <TrendingUp size={28}/>
                    </div>
                </div>
            </div>
        </>
    );



};