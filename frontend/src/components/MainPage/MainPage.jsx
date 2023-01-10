import SpinWheel from "../SpinWheel/SpinWheel";
import { Link } from 'react-router-dom';
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import yanxi from "../../images/yanxi.jpeg"; 
import ivy from "../../images/ivy.jpeg"; 
import ronny from "../../images/ronny.jpeg";
import payton from "../../images/payton.jpeg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import angelist from "../../images/angelist.png"; 
import logo from '../../images/logo-meals4u.png'
import './MainPage.css'; 



function MainPage() {
    return (
      <div className="mainpage">
          <div className="spinwheel-container">
            <SpinWheel />
          </div>
          <div className="mainpage-bottom">
            <div className="info-slogan">
              <p>Easy</p><p>•</p><p>Eatery</p><p>•</p><p>Efficient</p>
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
                  Turn on loaction to search for restaurants!</div>
                <div id="info-4" className="info-box">Explore more? Learn more about how to use <Link to="/about">here</Link></div>
            </div>
          </div>
          <footer className="footer">
            <div className="homepage-profile">
              <span>
                <img className="profile-img" src={yanxi} alt="" />
                <p>&nbsp;Yanxi Lin<p>&nbsp;(Flex Lead)</p></p>
              </span>
              <a href="https://www.linkedin.com/in/yanxi-lin-363959145" target="_blank" rel="noopener noreferrer"> <img /><LinkedInIcon sx={{fontSize:30}}/>&nbsp;Linkedin </a>
              <a href="https://github.com/yanxilinn" target="_blank" rel="noopener noreferrer"> <img /><GitHubIcon sx={{fontSize:30}}/>&nbsp;Github </a> 
              <a href="https://angel.co/u/yanxi-lin" target="_blank" rel="noopener noreferrer"> <img src={angelist} />Angellist </a> 
            </div>
            <div className="homepage-profile">
              <span>
                <img className="profile-img" src={ivy} alt="" />
                <p>&nbsp;Ivy Liu<p>&nbsp;(Frontend Lead)</p></p>
              </span>
              <a href="https://www.linkedin.com/in/xiangwei0816/" target="_blank" rel="noopener noreferrer"> <img /><LinkedInIcon sx={{fontSize:30}}/>&nbsp;Linkedin</a>
              <a href="https://github.com/xiangweimg" target="_blank" rel="noopener noreferrer"> <img /><GitHubIcon sx={{fontSize:30}}/>&nbsp;Github</a> 
              <a href="https://angel.co/u/xiangwei-liu-1" target="_blank" rel="noopener noreferrer"> <img src={angelist} />Angellist </a> 
            </div>
            <div className="homepage-profile">
              <span>
                <img className="profile-img" src={ronny} alt="" />
                <p>&nbsp;Ronny Deng<p>&nbsp;(Backend Lead)</p></p>
              </span>
              <a href="https://www.linkedin.com/in/ronny-deng/" target="_blank" rel="noopener noreferrer"> <img /><LinkedInIcon sx={{fontSize:30}}/>&nbsp;Linkedin</a>
              <a href="https://github.com/ronnydeng67"  target="_blank" rel="noopener noreferrer"> <img /><GitHubIcon sx={{fontSize:30}}/>&nbsp;Github</a> 
              <a href="" target="_blank" rel="noopener noreferrer"> <img src={angelist} />Angellist </a> 
            </div>
            <div className="homepage-profile">
              <span>
                <img className="profile-img" src={payton} alt="" />
                <p>&nbsp;Payton Dong<p>&nbsp;(Project Lead)</p></p>
              </span>
              <a href="https://www.linkedin.com/in/penghui-dong-4007b816a/" target="_blank" rel="noopener noreferrer"> <img /><LinkedInIcon sx={{fontSize:30}}/>&nbsp;Linkedin</a>
              <a href="https://github.com/penghuidong520" target="_blank" rel="noopener noreferrer"> <img /><GitHubIcon sx={{fontSize:30}}/>&nbsp;Github</a> 
              <a href="" target="_blank" rel="noopener noreferrer"> <img src={angelist} />Angellist </a> 
            </div>
          </footer>
          <div className="page-end">
            <div id="page-end-divider"></div>
            <div className="footer-content">
              <Link to='/' id="footer-logo"><img src={logo} alt="" /></Link>
              <a href="https://github.com/xiangweimg/Meals4U" target="_blank"><GitHubIcon/>Meals4U Github</a>
            </div>
          </div>
      </div>
    );
  }
  
  export default MainPage;