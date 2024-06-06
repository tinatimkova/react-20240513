import { useUser } from "../../contexts/user/hooks";
import { Button } from "../button/component";
import { Modal } from "../modal/component";
import { AuthorizationForm } from "../authorizationForm/component";
import { useState, useCallback } from "react";

export const AuthorizationButton = () => {
    const { user, logout, login } = useUser();
    const [ isOpen, setIsOpen ] = useState(false);

    const handleClose = useCallback(() => setIsOpen(false), []);

    const handleLogin = useCallback((name) => {
        login(name);
        handleClose();
    }, [login, handleClose])

    return <div>
        <span>{user}</span>
        {user ? <Button onClick={logout}>Log Out</Button> : <Button onClick={() => setIsOpen(true)}>Log In</Button>}
        { isOpen && 
        <Modal onClose={handleClose}>
            <AuthorizationForm onCancel={handleClose} onLogin={handleLogin} />
        </Modal>}
    </div>;
};