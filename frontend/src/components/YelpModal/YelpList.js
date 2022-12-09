import "./YelpModal.css";
import YelpRestaurant from "./YelpRestaurant";

const YelpList = ({ item, restaurants}) => {
    // console.log(restaurants)
    return (
        <div className="yelp-modal-content">
            <div className="yelp-box">
                <div className="yelp-list">
                    {restaurants.length ? restaurants.map(restaurant => (
                        <YelpRestaurant 
                            restaurant={restaurant} 
                            key={restaurant.id}
                        />
                    ))
                    :
                    <div className="no-restaurants">
                        Sorry, there is nothing match your result nearby...<br/>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}
 
export default YelpList;