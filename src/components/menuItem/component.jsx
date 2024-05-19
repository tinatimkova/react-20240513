export const MenuItem = ( { item } ) => {
    return (
    <span>{item.name}: {item.ingredients.join(", ")} - ${item.price}</span>
    );
}