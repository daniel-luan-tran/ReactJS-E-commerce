import { createContext, useState } from "react";

export const SearchContext = createContext(
    {
        searchString: "",
        setSearchString: () => {}
    }
);

export const SearchProvider = ({children}) => {
    const [searchString, setSearchString] = useState("");
    const value = {searchString, setSearchString};
    return (
        <SearchContext.Provider value={value} >{children}</SearchContext.Provider>
    );
}