import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(true);
    const [overlay, setOverlay] = useState({ active: false, x: '50%', y: '50%' });

    const toggleTheme = (e) => {
        if (e) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = `${rect.left + rect.width / 2}px`;
            const y = `${rect.top + rect.height / 2}px`;
            setOverlay({ active: true, x, y });
        }

        setTimeout(() => {
            setIsDark(!isDark);
            document.body.classList.toggle('light-theme');
            setTimeout(() => setOverlay({ ...overlay, active: false }), 500);
        }, 100);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            <div 
                className={`theme-transition-overlay ${overlay.active ? 'active' : ''}`}
                style={{ '--x': overlay.x, '--y': overlay.y }}
            />
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}