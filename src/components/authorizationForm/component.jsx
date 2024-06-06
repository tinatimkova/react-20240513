import { Button } from "../button/component";
import { useState } from "react";

export const AuthorizationForm = ({ onCancel, onLogin }) => {
    const [name, setName] = useState('');

    return <div>
        <input 
        type='text' 
        value={name} 
        onChange={event => setName(event.target.value)}
        /> 
        <Button 
        onClick={() => {
            onLogin(name); 
            setName('')
            }}
            >
        Log In
        </Button>
        <Button 
        onClick={onCancel}
        >
        Cancel
        </Button>
    </div>
};