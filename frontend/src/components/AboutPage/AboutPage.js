import wheelGif from "../../images/intro-gif.gif";
import girl from "../../images/girl-icon.png";
import boy from "../../images/boy-icon.png";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";

const AboutPage = () => {
    return (
        <div className="about-container">
            <div className="tab-container">
                <div className="empty-block"></div>
                    <a className="tab-text">About Meals4U</a>
                    <a className="tab-text">Instruction</a>
                    <a className="tab-text">Incentive</a>
                    <a className="tab-text">Developers</a>
                <div className="tab-content">
                    <div className="empty-block"></div>
                    <div className="tab-content-detail">
                        <div className="about-meals4u" >
                            <div id="about-meals4u">About Meals4U</div>
                            Meals 4 You <br /><br /> is an app that chooses the meal off of default selections and randomly choose a meal for the users, so users doesn't have to struggle and choose what to eat for lunch/dinner.
                            </div>
                    </div>
                    <div className="tab-content-detail"> 
                        <div className="instruction-text-containoer">
                            <h2 id="about-instruction-title" >How to Use</h2>
                            <div className="about-list">
                                ● Landing Page has a default wheel for user to click play with
                                <div className="about-instruction-visualizer"> <img id="about-instruction-visualizer" src={wheelGif} alt="" /> </div>
                            </div>
                            <div className="about-list"> 
                                ● Profile has user options to choose a saved wheel or add additional item onto the wheel
                                <div className="about-instruction-visualizer"> <img id="about-instruction-visualizer" src={wheelGif} alt="" /> </div>
                            </div>
                            <div className="about-list">
                                ● You could create a customized wheel and save it to your list !
                                <div className="about-instruction-visualizer"> <img id="about-instruction-visualizer" src={wheelGif} alt="" /> </div>
                            </div>
                        </div>
                    </div> 
                            <div className="tab-content-detail">
                                <div className="incentive-container">
                                <p>How we came up with the Idea !</p>
                                </div>
                            </div>
                    <div className="tab-content-detail">
                        <div className="about-developers">
                            <div className="about-developer" >
                                <img className="developer-img" src={girl} alt=""/>
                                <div className="developer-links" > 
                                <img className="developer-link-icon" src={linkedin} alt="" />
                                <img className="developer-link-icon" src={github} alt="" />
                                </div>
                            </div>

                            <div className="about-developer" >
                                <img className="developer-img" src={boy} alt="" />
                                <div className="developer-links" > 
                                <img className="developer-link-icon" src={linkedin} alt="" />
                                <img className="developer-link-icon" src={github} alt="" />
                                </div>
                            </div>

                            <div className="about-developer" >
                                <img className="developer-img" src={girl} alt="" />
                                <div className="developer-links" >
                                <img className="developer-link-icon" src={linkedin} alt="" />
                                <img className="developer-link-icon" src={github} alt="" />
                                </div>
                            </div>

                            <div className="about-developer" >
                                <img className="developer-img" src={boy} alt="" />
                                <div className="developer-links" > 
                                <img className="developer-link-icon" src={linkedin} alt="" />
                                <img className="developer-link-icon" src={github} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;