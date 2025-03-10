// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'

//TYPES
export type CounterState = {
    count: number
}

export type CounterActions = {
    decrementCount: () => void
    incrementCount: () => void
}

export type CounterStore = CounterState & CounterActions

export const initCounterStore = (): CounterState => {
    return { count: new Date().getFullYear() + 1 }
}
export const defaultInitState: CounterState = {
    count: 0,
}

//Hook to create counter store
export const createCounterStore = (initState: CounterState = defaultInitState,) => {
    return createStore<CounterStore>()((set) => ({
        ...initState,
        decrementCount: () => set((state) => ({ count: state.count - 1 })),
        incrementCount: () => set((state) => ({ count: state.count + 1 })),
    }))
}
