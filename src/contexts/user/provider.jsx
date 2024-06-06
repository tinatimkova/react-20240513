import { useState, useMemo } from 'react';
import { UserContext } from './context';

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const userContextValue = useMemo(() => ({
        user,
        login: setUser,
        logout: () => setUser(null)
    }), [user])

    return <UserContext.Provider value={userContextValue}>
            { children }
           </UserContext.Provider>;
};