import { Menu } from '../menu/component.jsx';
import { Reviews } from '../reviews/component.jsx';

export const Restaurant = ({ restaurant, index, setActive, active }) => {

    const { name, menu, reviews } = restaurant;

    return (
        <div>
            <h2>{!!name && name}</h2>
            <button onClick={() => setActive(index)}>{name}</button>
            {index==active && 
            <>
                {!!menu?.length && <Menu dishes={menu} />}
                {!!reviews?.length && <Reviews reviews={reviews}/>}
            </> }
        </div>
    );
}