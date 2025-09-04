import { createContext } from "react";
export const AppContext = createContext();
import { doctors } from "../assets/assets";
const AppContextProvider = (props)=>{
    const currencySymbol = "$";
    const value={
        doctors,currencySymbol
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;