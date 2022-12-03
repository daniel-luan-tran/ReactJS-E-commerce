import { createContext, useEffect, useState } from 'react';

export const NavigationContext = createContext(
    {
        navigation: null,
        setNavigation: () => {},
    }
);

//Truyền dữ liệu vào context
export const NavigationProvider = ({children}) => {
    let location = window.location.href;
    const [navigation, setNavigation] = useState(location);
    const value = {navigation, setNavigation};
    
    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
}