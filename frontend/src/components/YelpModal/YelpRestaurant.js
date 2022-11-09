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
                    <a href={restaurant.url} target='_blank'>
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
                <div className="phone">
                    Phone: {restaurant.phone}
                </div>
                <div className="transactions">
                    {restaurant.transactions.map(trans => {
                        <div key={trans}>{trans}</div>
                    })}
                </div>
            </div>
        </div>
    );
}
 
export default YelpRestaurant;