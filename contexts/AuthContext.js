import React, {createContext,  useState} from 'react'
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
const [Auth, setAuth] = useState();
const value = { Auth, setAuth };
return (
<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
);
};
export default AuthContextProvider;