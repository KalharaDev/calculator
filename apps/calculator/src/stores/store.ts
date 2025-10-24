import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CalculationHistory {
    expression: string;
    result: string;
    timestamp: number;
}

interface CalculatorStore {
    history: CalculationHistory[];
    addToHistory: (expression: string, result: string) => void;
    clearHistory: () => void;
}

export const useCalculatorStore = create<CalculatorStore>()(
    persist(
        (set) => ({
            history: [],
            addToHistory: (expression, result) =>
                set((state) => ({
                    history: [
                        { expression, result, timestamp: Date.now() },
                        ...state.history,
                    ].slice(0, 10),
                })),
            clearHistory: () => set({ history: [] }),
        }),
        {
            name: 'calculator-storage',
        }
    )
);