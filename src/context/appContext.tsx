"use client"
import { MyContextProps } from "@/utils/type";
import { createContext, ReactElement, useContext, useState } from "react";


export const AppContext = createContext<MyContextProps>({
    appState: "",
    setAppState: () => { }
});

export const AppProvider = ({ children }: { children: ReactElement }) => {
    const [appState, setAppState] = useState("");
    return (
        <AppContext.Provider value={{ appState, setAppState }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppState = () => {

    const appState = useContext(AppContext)
    if (!appState) throw new Error("appState est utilisée sans provider")
    return { appState }
}
