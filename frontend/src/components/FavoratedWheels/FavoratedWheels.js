import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserFavorites, getFavorites } from "../../store/favoriteWheel";
import FavoratedWheelsItem from "./FavoratedWheelsItem";

const FavoratedWheels = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    // const wheels = useSelector(getWheels);
    // const wheelList = wheels.map((wheel, index) => <FavoratedWheelsItem key={index} wheel={wheel} />);
    
    const favorites = useSelector(getFavorites);
    const favoriteList = favorites.map((favorite, index) => {
            return <FavoratedWheelsItem key={index} wheel={favorite} /> 
        }
    );

    // useEffect(() => {
    //     dispatch(fetchUserFavorites());
    // }, [dispatch, sessionUser])

    return (
        <>
            <div className="saved-wheels-header"> </div>
            {(favoriteList.length > 0) && favoriteList}
            {(favoriteList.length <= 0) && <h1>You don't have favorite wheels ?</h1>}
        </>
    )
}

export default FavoratedWheels