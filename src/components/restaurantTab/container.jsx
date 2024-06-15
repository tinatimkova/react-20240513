import { useSelector } from "react-redux";
import { Tab } from "../tab/component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const RestaurantTabContainer = ({ id, onClick, isActive }) => {

    const { name } = useSelector(state => selectRestaurantById(state, id));

    return <Tab title={name} onClick={onClick} isActive={isActive} />;
};