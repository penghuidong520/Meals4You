import Header from "../Header/Header";
import SpinWheel from "../SpinWheel/SpinWheel";
import './MainPage.css'; 



function MainPage() {
    return (
      <div className="mainpage">
          <Header/>
          <div className="spinwheel-container">
            <SpinWheel />
          </div>
      </div>
    );
  }
  
  export default MainPage;