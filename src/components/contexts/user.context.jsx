import { createContext, useState } from "react";

//Khởi tạo context khi có thông tin user đăng nhập
//=> Các component con sẽ gọi useContext(UserContext) trả ra {currentUser, setCurrentUser}
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    return (
        <UserContext.Provider value={value}>
            {children} {/* Tất cả component con */}
        </UserContext.Provider>
    );
}