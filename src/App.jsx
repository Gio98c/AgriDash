import React, { useState } from "react";
import DataTable from "./components/DataTable";
import { generateSimulationData } from "./services/simulationService";
import { RefreshCw, Sprout } from "lucide-react";
import KpiSummary from "./components/KpiSummary";
import YieldChart from "./components/YieldChart";
import FinancialChart from "./components/FinancialChart";

function App() {

  // Coltura selezionata
  const [selectedCrop, setSelectedCrop] = useState('Mais');

  // Dati Simulati (con la coltura di default -> Mais)
  const [simulationData, setSimulationData] = useState(() => generateSimulationData('Mais'));


  // Gestore cambio coltura
  const handleCropChange = (e) => {
     const newCrop = e.target.value;

     setSelectedCrop(newCrop);

     const newData = generateSimulationData(newCrop);
     setSimulationData(newData);
  }

  // Gestore Rigenerazione Simulazione (nuovi dati random)
  const handleResimulate = () => {
    const newData = generateSimulationData(selectedCrop);
    setSimulationData(newData);
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans text-gray-800">
          <header className="w-full mb-8 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="mb-2 md:mb-0">
              <h1 className="text-4xl font-extrabold text-gray-800 flex items-center gap-3 tracking-tighter">
                <Sprout className="text-green-600 size={40}" />
                Dashboard Agricola
              </h1>
              <p className="text-gray-500 mt-2 ml-1 text-lg">
                Analisi prestazioni: <strong className="text-blue-700">{selectedCrop}</strong>
              </p>
            </div>


            <div className="flex flex-col sm:flex-row gap-4 items-center w-full md:w-auto bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              
              {/* SELETTORE COLTURA */}
              <div className="relative w-full sm:w-48">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1 tracking-wider">Seleziona Coltura</label>
                <select 
                  value={selectedCrop}
                  onChange={handleCropChange}
                  className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-800 font-font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block shadow-sm cursor-pointer"
                >
                  <option value="Mais">Mais (Standard)</option>
                  <option value="Grano">Grano (Invernale)</option>
                  <option value="Orzo">Orzo (Rustico)</option>
                  <option value="Riso">Riso (Idroesigente)</option>
                </select>
              </div>

              {/* BOTTONE RIGENERA */}
              <div className="w-full sm:w-auto mt-auto">
                <div className="hidden sm:block h-5 mb-1"></div>
                <button
                  onClick={handleResimulate}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md transition-all active:scale-95"
                  title="Genera nuove condizioni meteo casuali per la coltura attuale"
                >
                  <RefreshCw size={18} />
                  <span>Nuovo Scenario</span>
                </button>
              </div>
            </div>
            {/* Bottone Risimula */}
            {/*<button
              onClick={handleResimulate}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all active:scale-95"
            >
              <RefreshCw size={20}/>
              <span>Genera Nuovo Scenario</span>
            </button>*/}

          </header>
    
          {/* Qui è dove inizieremo ad aggiungere i nostri componenti */}
          <main className="w-full space-y-8">

            {/* KPI CARDS */}
            <section>
              <KpiSummary data={simulationData}/>
            </section>

            {/* CHARTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Grafico Resa VS fattori Critici */}
              <YieldChart data={simulationData} />

              {/* Grafico Costi VS Margine */}
              <FinancialChart data={simulationData}/>

            </div>

            {/* TABELLA DATI */}
            <section>
              <DataTable data={simulationData} />
            </section>
          </main>
        </div>
    </>
  )
}

export default App
