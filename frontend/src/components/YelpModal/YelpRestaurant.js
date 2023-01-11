import './YelpRestaurant.css';
import Rating from '@mui/material/Rating';

const YelpRestaurant = ({ restaurant }) => {
    return (
        <div className="restaurant-container">
            <div className="restaurant-img">
                <a href={restaurant.url} target='_blank' >
                    <img src={restaurant.image_url} id="restaurant-img" /> 
                </a>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-name">
                    <a href={restaurant.url} target='_blank' className='rest-name'>
                        {restaurant.name}
                    </a>
                </div>
                <div className="rating-count">
                    <div className="restaurant-rating">
                        <Rating name="read-only" 
                            value={restaurant.rating} 
                            readOnly 
                            precision={0.2}
                            />
                    </div>
                    <div className="review-count">
                        {restaurant.review_count} reviews
                    </div>
                </div>
                <div className="price">
                    Price: {restaurant.price ? restaurant.price : 'N/A'}
                </div>
                <div className="phone">
                    Phone: {restaurant.display_phone ? restaurant.display_phone : "N/A"}
                </div>
                <div className="transactions">
                    Available: {restaurant.transactions.length ? 
                    restaurant.transactions.join(", ")
                    : "N/A" }
                </div>
                <div className="address">
                    <div className="address-left">Address:</div>
                    <div className="address-right">
                        {restaurant.location.display_address[0]}
                        <span>, </span>
                        {restaurant.location.display_address[1]}
                    </div>
                </div>
                {/* <div className="is-close">
                    {restaurant.is_close ? 
                    <div className='rest-close'>This restaurant is closed</div> : 
                    <div className='rest-open'>This restaurant is open</div> 
                }
                </div> */}
            </div>
        </div>
    );
}
 
export default YelpRestaurant;