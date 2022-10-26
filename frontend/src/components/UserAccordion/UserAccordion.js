import Accordion from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './UserAccordion.css';

const UserAccordion = () => {
    return (
        <div className="accordion-content">
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <div>User's Name</div>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        Here are your wheels
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
 
export default UserAccordion;