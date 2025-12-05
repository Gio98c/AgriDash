import { Monitor, Moon, Settings, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ThemeSelector() {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'system'
    );
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // click fuori dal menu
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false); }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    // Effetto principale: applicare il tema al documento HTML
    useEffect(() => {
        const root = document.documentElement;
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');   // Qui andiamo a prendere la preferenza del colore 'Dark'

        function applyTheme() {
            if (theme === 'dark') { root.classList.add('dark'); }
            else if (theme === 'light') { root.classList.remove('dark'); }
            else { 
                // logica per system (tema come il sistema)
                if (mediaQuery.matches) { root.classList.add('dark'); }
                else { root.classList.remove('dark'); }
            }
        }

        applyTheme();
        localStorage.setItem('theme', theme); // Salva la preferenza

        // Listener per cambio tema in tempo reale se siamo in modalita 'system'
        if (theme === 'system') {
            mediaQuery.addEventListener('change', applyTheme);
            return () => mediaQuery.removeEventListener('change', applyTheme);
        }
    }, [theme]);

    // opzioni del menu
    const options = [
        { value: 'light', label: 'Chiaro', icon: Sun },
        { value: 'dark', label: 'Scuro', icon: Moon },
        { value: 'system', label: 'Sistema', icon: Monitor },
    ];

    // icona corrispondente al tema
    const CurrentIcon = options.find(opt => opt.value === theme)?.icon || Settings;

    return (
        <>
            <div className="relative" ref={menuRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`
                        p-3 rounded-xl shadow-sm border transition-all duration-200
                        flex items-center justify-center gap-2
                        ${isOpen 
                            ? 'bg-blue-100 border-blue-300 text-blue-700 dark:bg-blue-900/40 dark:border-blue-500 dark:text-blue-300' 
                            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700'
                        }
                    `}
                    title="Impostazioni Tema"
                >
                    <CurrentIcon size={20}/>
                </button>

                {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-100">
                        <div className="p-1.5 flex flex-col gap-1.5">
                            {options.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => {
                                        setTheme(option.value);
                                        setIsOpen(false);
                                    }}
                                    className={`
                                        w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors
                                        ${theme === option.value 
                                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' 
                                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'
                                        }
                                        `  
                                    }
                                >
                                    <option.icon size={16} />
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}