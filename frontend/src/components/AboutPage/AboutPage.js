import wheelGif from "../../images/intro-gif.gif";
import girl from "../../images/girl-icon.png";
import boy from "../../images/boy-icon.png";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import yanxi from "../../images/yanxi.jpeg"; 
import angelist from "../../images/angelist.png"; 
import ivy from "../../images/ivy.jpeg"; 
import ronny from "../../images/ronny.jpeg";
import payton from "../../images/payton.jpeg";
import m4u1 from "../../images/meals4u-1.gif";
import m4u2 from "../../images/meals4u-2.gif";
import m4u3 from "../../images/meals4u-3.gif";

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
                                <div className="about-instruction-visualizer"> <img id="about-instruction-visualizer" src={m4u1} alt="" /> </div>
                            </div>
                            <div className="about-list"> 
                                ● Profile has user options to choose a saved wheel or add additional item onto the wheel
                                <div className="about-instruction-visualizer"> <img id="about-instruction-visualizer" src={m4u2} alt="" /> </div>
                            </div>
                            <div className="about-list">
                                ● You could create a customized wheel and save it to your list !
                                <div className="about-instruction-visualizer"> <img id="about-instruction-visualizer" src={m4u3} alt="" /> </div>
                            </div>
                        </div>
                    </div> 
                            <div className="tab-content-detail">
                                <div className="incentive-container">
                                <p>Everyday we have the same question: What's for lunch today? <br />That's the reason we create this app</p>
                                </div>
                            </div>
                    <div className="tab-content-detail">
                        <div className="about-developers">
                            <div className="about-developer" >
                                <img className="developer-img" src={payton} alt=""/>
                                Payton(Penghui) Dong
                                <div className="developer-links" >
                                <a href="https://www.linkedin.com/in/penghui-dong-4007b816a/" target="_blank" rel="noopener noreferrer"> <img className="developer-link-icon" src={linkedin} /> </a>
                                <a href="https://github.com/penghuidong520" target="_blank" rel="noopener noreferrer"> <img className="developer-link-icon" src={github} /> </a> 
                                <a href="" target="_blank" rel="noopener noreferrer"> <img className="developer-link-icon" src={angelist} /> </a> 
                                </div>
                            </div>

                            <div className="about-developer" >
                                <img className="developer-img" src={ronny} alt="" />
                                Ronny(Jinjun) Deng
                                <div className="developer-links" >
                                <a href="https://www.linkedin.com/in/ronny-deng/" target="_blank" rel="noopener noreferrer"> <img className="developer-link-icon" src={linkedin} /> </a>
                                <a href="https://github.com/ronnydeng67" target="_blank" rel="noopener noreferrer"> <img className="developer-link-icon" src={github} /> </a> 
                                <a href="" target="_blank" rel="noopener noreferrer"> <img className="developer-link-icon" src={angelist} /> </a> 
                                </div>
                            </div>

                            <div className="about-developer" >
                                <img className="developer-img" src={yanxi} alt="" />
                                Yanxi Lin
                                <div className="developer-links" >
                                <a href="https://www.linkedin.com/in/yanxi-lin-363959145" target="_blank" rel="noopener noreferrer"> <img className="developer-link-icon" src={linkedin} /> </a>
                                <a href="https://github.com/yanxilinn" target="_blank" rel="noopener noreferrer"> <img className="developer-link-icon" src={github} /> </a> 
                                <a href="https://angel.co/u/yanxi-lin" target="_blank" rel="noopener noreferrer"> <img className="developer-link-icon" src={angelist} /> </a> 
                                </div>
                            </div>

                            <div className="about-developer" >
                                <img className="developer-img" src={ivy} alt="" />
                                Ivy(Xiangwei) Liu
                                <div className="developer-links" >
                                <a href="https://www.linkedin.com/in/xiangwei0816/" target="_blank" rel="noopener noreferrer"> <img className="developer-link-icon" src={linkedin} /> </a>
                                <a href="https://github.com/xiangweimg" target="_blank" rel="noopener noreferrer"> <img className="developer-link-icon" src={github} /> </a> 
                                <a href="https://angel.co/u/xiangwei-liu-1" target="_blank" rel="noopener noreferrer"> <img className="developer-link-icon" src={angelist} /> </a> 
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