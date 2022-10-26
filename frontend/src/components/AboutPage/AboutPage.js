
const AboutPage = () => {
    return (
        <div className="about-container">
            <div className="about-instruction">
                <h1 className="about-title" >Instruction</h1>
                <div className="about-instruction-details">
                    <p id="about-description" >Meal 4 You is an app that chooses the meal off of default selections and randomly choose a meal for the users, so users doesn't have to struggle and choose what to eat for lunch/dinner.</p>
                    <div id="about-instruction-steps-container" >
                        <ul id="about-instruction-steps" >
                            <h2 id="about-instruction-title" >How to Use</h2>
                            <li className="about-list">Landing Page has a default wheel for user to click play with</li>
                            <li className="about-list">Profile has user options to choose a saved wheel or add additional item onto the wheel</li>
                            <li className="about-list">You could create a customized wheel and save it to your list !</li>
                        </ul>
                    </div>
                </div>
                <div className="about-instruction-visualizer">
                    
                </div>
            </div>
            <div className="about-incentives-container" >
                <div className="about-incentives" >
                    <h1 className="about-title" > Incentives </h1>
                    <p>How we came up with the Idea !</p>
                    <div id="placeholding">
                        
                    </div>
                </div>
            </div>
            
            <div className="about-developers-container">
                <h1 className="about-title" >Developers</h1>
                <div className="about-developers">
                    <div className="about-developer" >
                        <img className="developer-img" src="#" />
                        <div className="developer-links" >
                            
                        </div>
                    </div>

                    <div className="about-developer" >
                        <img className="developer-img" src="#" />
                        <div className="developer-links" >
                            
                        </div>
                    </div>

                    <div className="about-developer" >
                        <img className="developer-img" src="#" />
                        <div className="developer-links" >
                            
                        </div>
                    </div>

                    <div className="about-developer" >
                        <img className="developer-img" src="#" />
                        <div className="developer-links" >
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutPage;