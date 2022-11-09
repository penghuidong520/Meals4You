const YelpRestaurant = ({ restaurant }) => {
    return (
        <div className="restaurant-container">
            <div className="restaurant-name">
                {restaurant.name}
            </div>
        </div>
    );
}
 
export default YelpRestaurant;