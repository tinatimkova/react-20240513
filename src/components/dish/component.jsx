export const Dish = ( { dish } ) => {
    return (
    <span>{dish.name}: {dish.ingredients.join(", ")} - ${dish.price}</span>
    );
}