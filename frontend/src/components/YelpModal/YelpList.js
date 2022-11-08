import "./YelpModal.css";

const YelpList = ({ item }) => {
    return (
        <div className="yelp-modal-content">
            <div className="yelp-modal-title">
                Find {item} nearby your location
            </div>
            <div className="yelp-box">
                <div className="yelp-list">

                </div>
                <div className="yelp-selected-business">

                </div>
            </div>
        </div>
    );
}
 
export default YelpList;