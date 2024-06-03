import { useState } from 'react';

export const Modal = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const []

    const toggleModal = () => {
        setIsOpenModal((isOpen) => !isOpen);
    }

    return <div>
        <span>User name:</span>
        <input 
        type='text' 
        value={currentUser.name} 
        onChange={event => setCurrentUser(event.target.value)} />
        <button onClick={() => toggleModal()}>Sign In</button>
        <button onClick={() => toggleModal()}>Cancel</button>
    </div>
};