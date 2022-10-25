import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <>
      <div className="profile-page">
        <div className="save-wheels-container">
          <div className="save-wheels">
              <div className="save-wheel-title">
                Saved Wheels
              </div>
              <div className="wheel-list">

              </div>
          </div>
        </div>
        <div className="center-wheel-container">
          <div className="center-wheel">
              Canvas Goes Here
          </div>
        </div>
        <div className="edit-wheel-container">
          <div className="edit-wheel">
              <div className="new-wheel-button">
                <button id="new-wheel-button">Create a new wheel</button>
              </div>
              <div className="explore-wheels">
                <button id="explore-wheels-button">No ideas? Explore more wheels.</button>
              </div>
              <div className="save-dish-container">
                <div className="save-dish-title">
                  Saved Dishes
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default ProfilePage;