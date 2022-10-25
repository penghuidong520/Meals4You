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
          </div>
        </div>
        <div className="center-wheel-container">
          <div className="center-wheel">
              Canvas Goes Here
          </div>
        </div>
        <div className="edit-wheel-container">
            Edit wheel table
        </div>
      </div>
    </>
  );
}
 
export default ProfilePage;