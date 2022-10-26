import { Accordion } from '@mui/material';
import UserAccordion from '../UserAccordion/UserAccordion';
import './WheelIndexPage.css';


const WheelIndexPage = () => {
    return (
        <>
            <div className="index-page">
                <div className="index-container">
                    <UserAccordion/>
                    <UserAccordion/>
                    <UserAccordion/>
                    <UserAccordion/>
                    <UserAccordion/>
                    <UserAccordion/>
                    <UserAccordion/>
                    <UserAccordion/>
                </div>
            </div>
        </>
    );
}
 
export default WheelIndexPage;