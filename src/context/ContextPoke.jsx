import React, { createContext, useState } from "react";

export const PokeContext = createContext(null);

export default function PokeContextProvider({children}) {


    const [id, setId]=useState(25)


    return(
        <PokeContext.Provider value={{id,setId}}>
            {children}
        </PokeContext.Provider>
    )
}