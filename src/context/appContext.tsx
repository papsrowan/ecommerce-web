"use client"
import { MyContextProps, TGetDataCategory } from "@/utils/type";
import { createContext, ReactElement, useContext, useState } from "react";


export const AppContext = createContext<MyContextProps>({
    appState: null,
    setAppState: () => { },
});

export const AppProvider = ({ children }: { children: ReactElement }) => {
    const [appState, setAppState] = useState<TGetDataCategory>({
        limit: 0,
        skip: 0,
        products: [],
        total: 0
    });
    return (
        <AppContext.Provider value={{ appState, setAppState }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppState = () => {

    const { appState, setAppState } = useContext(AppContext)
    if (appState) throw new Error("appState est utilisée sans provider")
    return { appState, setAppState }
}
