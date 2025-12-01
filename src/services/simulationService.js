

function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// --- Costanti e parametri ---
// Simuliamo la raccolta del mais

const SEASON_MONTH = [
    'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre'
]

// --- DATABASE DELLE COLTURE ---
const CROP_DB = {
    'Mais': {
        optimalTemp: 28,
        tempTollerance: 3,
        waterReq: 180, // mm/mese
        baseYield: 15, // t/ha
        price: 210,    // €/t
        waterStressFactor: 0.4
    },
    'Grano': {
        optimalTemp: 22,
        tempTollerance: 4,
        waterReq: 120, // meno esigente
        baseYield: 8, // resa più bassa del mais
        price: 280,    // prezzo più alto
        waterStressFactor: 0.3
    },
    'Orzo': {
        optimalTemp: 20,
        tempTollerance: 5,
        waterReq: 100, // resistente
        baseYield: 7,
        price: 240,
        waterStressFactor: 0.25
    },
    'Riso': {
        optimalTemp: 25,
        tempTollerance: 2,
        waterReq: 250, // molto esigente (acqua!)
        baseYield: 10, 
        price: 350,    // alto valore
        waterStressFactor: 0.6 // soffre molto la siccità
    }
}


// Parametri del moldello di Resa

const TEMP_STRESS_FACTOR = 0.15;    // Penalità alla resa per ogni grado fuori tolleranza

/*const OPTIMAL_TEMP = 28;    // Temp. ottimale per il mais (°C)
const TEMP_TOLLERANCE = 3;  // Gradi di tolleranza prima che inizi lo stress
const TEMP_STRESS_FACTOR = 0.15;    // Penalità alla resa per ogni grado fuori tolleranza

const WATER_REQUIREMENT = 180;  // Fabbisogno idrico ottimale (mm/mese)
const WATER_STRESS_FACTOR = 0.4;    // Penalità massima se l'acqua è 0

const BASE_YIELD_POTENTIAL = 15;    // Resa potenziale massima (t/ha) in condizioni perfette


// Parametri del Modello Finanziario
const SALE_PRICE_PER_TON = 210; // Prezzo di vendita (€/ton)


// --- Funzione principale del simulatore ---
/*
* Genera un set di dati simualti per un'intera stagione.
* @param {string} cropType - Il nome della coltura
*/

export function generateSimulationData(cropType = 'Mais') {
    
    const simulationResults = [];

    const cropParams = CROP_DB[cropType] || CROP_DB['Mais'];

    for (const month of SEASON_MONTH) {
         
        // Simuliamo le variavili incontrollabili (ambientali) e le decisioni gestionali (costi, irrigazione)
        const T = getRandomInRange(18, 35); // Temperatura media
        const P = getRandomInRange(20, 150); // Precipitazioni (mm)
        // L'irrigazione varia leggermente in base al fabbisogno della pianta
        const I = getRandomInRange(20, cropParams.waterReq * 0.8); // Irrigazione (mm - 1mm = 10 m³/ha)
        const Cop = getRandomInRange(120, 250); // Costi operativi (€/ha)


        // --- Logica di stress ---

        // 1. Stress termico
        // Calcola quanto la temperatura si allontana dall'ottimale (tempDifference) ed applica una penalità
        const tempDifference = Math.abs(T - cropParams.optimalTemp);
        const tempStress = Math.max(0, tempDifference - cropParams.tempTollerance) * TEMP_STRESS_FACTOR;

        // 2. Stress idrico
        // Calcola quanta acqua manca rispetto al fabbisogno (waterDeficit) ed applica una penalità
        const totalWater = I + P;
        const waterDeficit = Math.max(0, cropParams.waterReq - totalWater);
        const waterStress = (waterDeficit / cropParams.waterReq) * cropParams.waterStressFactor;

        // 3. Calcolo resa finale (t/ha)
        // Partiamo dalla resa massima e sottraiamo le penalità di stress
        const yieldPenality = Math.min(1, tempStress + waterStress); // <-- la penatilà non può superare il 100%
        const Resa = cropParams.baseYield * (1 - yieldPenality);

        

        // --- Calcoliamo i KPI secondari ---
        // Calcoliamo gli indicatori finanziari e di efficienza

        // Efficienza acqua
        // (Resa * 1000 kg) / (Acqua Totale * 10 per ogni mm)
        // (Water Use Efficiency)
        const WUE = (Resa * 1000) / (totalWater * 10);

        // Costo per tonnellata; Se la resa è 0 evitiamo dividioni per zero
        // (Costo di Produzione)
        const COP = Resa > 0 ? Cop / Resa : 0;

        // Margine di profitto Lordo
        const Ricavi = Resa * cropParams.price;
        const MPL = Ricavi - Cop;

        //console.log("MPL: " + Resa);

        console.log(month);
        simulationResults.push({
            name: month,

            // dati di input
            T: parseFloat(T.toFixed(1)),
            P: parseFloat(P.toFixed(0)),
            I: parseFloat(I.toFixed(0)),
            Cop: parseFloat(Cop.toFixed(2)),

            // dati di output
            Resa: parseFloat(Resa.toFixed(2)),
            WUE: parseFloat(WUE.toFixed(2)),
            COP: parseFloat(COP.toFixed(2)),
            MPL: parseFloat(MPL.toFixed(2)),
        });
    }

    return simulationResults;
}


// N.toFixed(...) -> Stringa --> parseFloat(N.toFiced(...)) -> float