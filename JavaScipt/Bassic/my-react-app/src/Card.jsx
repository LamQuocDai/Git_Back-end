import profilePic from "./assets/profilePic.jpg";

function Card(){
  return(
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture" ></img>
      <h2 className="card-title">Lam Quoc Dai</h2>
      <p className="card-info">I am student of Sai Gon university</p>
    </div>
  );
}

export default Card;