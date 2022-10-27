import Accordion from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionWheels from './AccordionWheels';
import './UserAccordion.css';

const UserAccordion = ({ user }) => {
    return (
        <div className="accordion-content">
            <Accordion style={{background: "pink"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <div>{user.firstName + " " + user.lastName + "'s wheels"}</div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="wheels-container">
                        {user.wheels.length ? user.wheels.map(wheel => 
                        <AccordionWheels key={wheel} wheel={wheel}/>) :
                        <div className="no-wheel-text">This user has no saved wheels.</div>
                        }
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
 
export default UserAccordion;