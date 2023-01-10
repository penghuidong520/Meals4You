import Header from "../Header/Header";
import SpinWheel from "../SpinWheel/SpinWheel";
import './MainPage.css'; 



function MainPage() {
    return (
      <div className="mainpage">
          <div className="spinwheel-container">
            <SpinWheel />
          </div>
          <div className="mainpage-bottom">
            <div>
              <h1>Don't know what to eat?</h1>
              <ol>
              <li>1. Spin the wheel.</li>
              <li>2. We choose the food for you!</li>
              <li>3. Please turn on your loaction to search for restaurants!</li>
              </ol>
            </div>
          </div>
          <div className="footer">profile</div>
      </div>
    );
  }
  
  export default MainPage;