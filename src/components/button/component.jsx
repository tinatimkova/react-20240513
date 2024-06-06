import { useTheme } from "../../contexts/theme/hooks";
import { THEMES } from "../../contexts/theme/constants";

export const Button = ({ children, onClick, disabled }) => {

    const { theme } = useTheme();

    return <button style={{ backgroundColor: theme === THEMES.default ? 'grey' : 'orange'}} onClick={ onClick } disabled={ disabled } >{ children }</button>;
};