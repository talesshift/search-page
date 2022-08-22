import { useState,createContext, ReactNode } from "react";

type SearchContextProps = {
    children: ReactNode;
}

type SearchContextType = {
    searchCtx: {query:string};
    setSearchCtx: (newState: {query:string}) => void;
}

const initialContext = {
    searchCtx: {query:""},
    setSearchCtx: () => {},
};

export const SearchContext = createContext<SearchContextType>(initialContext);

export const SearchContextProvider = ({ children }: SearchContextProps) => {
    
    const [searchCtx,setSearchCtx] = useState(initialContext.searchCtx)

    return(
        <SearchContext.Provider value={{ searchCtx, setSearchCtx }}>
            {children}
        </SearchContext.Provider>
    )
}