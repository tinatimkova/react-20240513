import { MenuItem } from '../menuItem/component.jsx';

export const Menu = ( { items } ) => {
    return (
        <ul>
            {items.map(item => (
                <li><MenuItem item={item} /></li>
            ))}
        </ul>
    )
}