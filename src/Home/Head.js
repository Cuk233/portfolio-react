import Profile from "./Profile";
import "./style.css";
function Head() {
  return (
    <div>
      <div className="head">
        <h1 className="header">Information About Me</h1>
        <h2 className="name">Muhammad Zakki Mardhi</h2>
        <div className="image">
          <img className="profile" src="assets/Untitled-1.png" />
        </div>
        <div className="isi">
          <br />
          <h3>
            Informatics student learning about data science in python
            programming and currently learning to be a web developer
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Head;
