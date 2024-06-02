import { createContext } from 'react';


export const light = {
    backgroundColor: '#fff'
}

export const dark = {
    backgroundColor: '#000',
    color: '#fff'
}

export const ThemeContext = createContext(light);