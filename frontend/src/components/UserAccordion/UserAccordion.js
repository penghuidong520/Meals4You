import Accordion from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionWheels from './AccordionWheels';
import './UserAccordion.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserWheels } from "../../store/wheels";

const UserAccordion = ({ user }) => {
    const dispatch = useDispatch();
    const wheels = useSelector(state => state.wheels);
    
    const handleUserWheels = e => {
        e.preventDefault();
        dispatch(fetchUserWheels(user._id));
    }

    return (
        <div onClick={handleUserWheels} className="accordion-content">
            <Accordion style={{background: "pink"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                TransitionProps={{ unmountOnExit: true }}
                >
                <div>{user.firstName + " " + user.lastName + "'s wheels"}</div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="wheels-container">
                        {wheels.length ? wheels.map(wheel => 
                        <AccordionWheels key={wheel._id} wheel={wheel}/>) :
                        <div className="no-wheel-text">This user has no saved wheels.</div>
                        }
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
 
export default UserAccordion;