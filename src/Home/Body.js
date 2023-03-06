import "./style.css";
function Body() {
  return (
    <div>
      <div className="body">
        <br />
        <br />
        <h1 className="header_content">EXPERIENCE</h1>
        <div id="content1">
          <img className="logo" src="assets/gmf_white.png" alt="" />

          <img className="logo2" src="assets/Ci_Logo.png" alt="" />
        </div>
        <div className="content2" style={{ display: "flex" }}>
          <p className="text">
            three months internship at GMF AeroAsia with project creating
            website for document monitoring and airplane status monitoring using
            CodeIgniter 3 and grabbing data through API
          </p>
          <p className="text ci">
            my first project on college using CodeIgniter about creating CRUD
            for employee attendance
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
