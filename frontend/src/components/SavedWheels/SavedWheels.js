import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserWheels, getWheels } from "../../store/wheels";
import SavedWheelsItem from "./SavedWheelsItem";

const SavedWheels = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const wheels = useSelector(getWheels);
    const wheelList = wheels.map((wheel, index) => <SavedWheelsItem key={index} wheel={wheel} />);
    
    useEffect(() => {
        dispatch(fetchUserWheels(sessionUser._id));
    }, [dispatch, sessionUser])

    return (
        <>
        <div className="saved-wheels-header"> </div>
            {wheelList}
        </>
    )
}

export default SavedWheels