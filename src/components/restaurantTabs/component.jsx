import { RestaurantTabContainer } from "../restaurantTab/container";

export const RestaurantTabs = ( { ids, onTabClick, activeTab} ) => {

   return (
   <div>
   {!!ids?.length && ids.map(id => 
      <RestaurantTabContainer 
      id={id} 
      onClick={() => onTabClick(id)}
      isActive={activeTab === id}
      />)}
   </div>)
};