import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../store/favoriteWheel";
import { fetchUserWheels, getWheels } from "../../store/wheels";
import SavedWheelsItem from "./SavedWheelsItem";

const SavedWheels = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const wheels = useSelector(getWheels).sort((a, b) => (new Date(b.updatedAt) - new Date(a.updatedAt)));
    const wheelList = wheels.map((wheel, index) => <SavedWheelsItem key={index} wheel={wheel} />);

    // useEffect(() => {
    //     dispatch(fetchUserWheels(sessionUser?._id));
    // }, [dispatch, sessionUser])
    console.log(wheels)

    return (
        <>
        <div className="saved-wheels-header"> </div>
            {wheelList}
        </>
    )
}

export default SavedWheels