import "./YelpModal.css";
import YelpRestaurant from "./YelpRestaurant";

const YelpList = ({ item, restaurants}) => {
    console.log(restaurants)
    return (
        <div className="yelp-modal-content">
            <div className="yelp-modal-title">
                Find {item} nearby your location
            </div>
            <div className="yelp-box">
                <div className="yelp-list">
                    {restaurants.map(restaurant => 
                        <YelpRestaurant 
                        key={restaurant.id} 
                        restaurant={restaurant}
                        />
                        )}
                </div>
            </div>
        </div>
    );
}
 
export default YelpList;