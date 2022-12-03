import { createContext, useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

export const NavigationContext = createContext(
    {
        navigation: null,
        setNavigation: () => {},
    }
);

//Truyền dữ liệu vào context
export const NavigationProvider = ({children}) => {
    const [navigation, setNavigation] = useState("/");
    const value = {navigation, setNavigation};
    
    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
}