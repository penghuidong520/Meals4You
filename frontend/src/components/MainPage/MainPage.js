import Header from "../Header/Header";
import SpinWheel from "../SpinWheel/SpinWheel";
import { Link } from 'react-router-dom';
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import './MainPage.css'; 



function MainPage() {
    return (
      <div className="mainpage">
          <div className="spinwheel-container">
            <SpinWheel />
          </div>
          <div className="mainpage-bottom">
            <div className="info-slogan">
              <p>Easy</p><p>.</p><p>Eatery</p><p>.</p><p>Efficient</p>
            </div>
            <div className="info-container">
                <div id="info-1" className="info-box">
                  <LooksOneOutlinedIcon className="info-pic" sx={{ fontSize: 50 }} />
                  Spin the wheel.</div>
                <div id="info-2" className="info-box">
                  <LooksTwoOutlinedIcon className="info-pic" sx={{ fontSize: 50 }} />
                  Food selected!</div>
                <div id="info-3" className="info-box">
                  <Looks3OutlinedIcon className="info-pic" sx={{ fontSize: 50 }} />
                  Turn on your loaction to search for restaurants!</div>
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