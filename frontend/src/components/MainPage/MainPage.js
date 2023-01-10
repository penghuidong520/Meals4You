import Header from "../Header/Header";
import SpinWheel from "../SpinWheel/SpinWheel";
import { Link } from 'react-router-dom';
import './MainPage.css'; 



function MainPage() {
    return (
      <div className="mainpage">
          <div className="spinwheel-container">
            <SpinWheel />
          </div>
          <div className="mainpage-bottom">
            <div className="info-container">
                <div id="info-1" className="info-box">
                  
                  Spin the wheel.</div>
                <div id="info-2" className="info-box">We choose the food for you!</div>
                <div id="info-3" className="info-box">Please turn on your loaction to search for restaurants!</div>
                <div id="info-4" className="info-box">Explore more? Learn more about how to use <Link to="/about">here</Link></div>
            </div>
          </div>
          <footer className="footer">
            <div>11</div>
          </footer>
      </div>
    );
  }
  
  export default MainPage;