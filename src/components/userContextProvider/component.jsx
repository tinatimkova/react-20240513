import { useState, useEffect, useCallback } from 'react';
import { UserContext } from '../../contexts/user'; 

export const UserContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const onUserLogIn = useCallback(user = {name: 'Alex'}, style) => {
        return (<div>
        <span>{user?.name}</span>
            <button onClick={() => setUserContext(user)} style={style}>Log Out</button>
        </div>)}
    
    const onUserLoggedOut = (style) => <button onClick={() => setUserContext(null)} style={style}>Log In</button>;

    return <UserContext.Provider value={ [currentUser, onUserLoggedIn, onUserLoggedOut ] }>{ children }</UserContext.Provider>;
};