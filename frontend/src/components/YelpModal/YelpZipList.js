import YelpRestaurant from "./YelpRestaurant";

const YelpZipList = ({ item, restaurants, zipcode }) => {
    return (
        <div className="yelp-modal-content">
            <div className="yelp-modal-title">
                Find {item} nearby {zipcode}
            </div>
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
                        Sorry, there is nothing match your result based on your provided location...
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}
 
export default YelpZipList;