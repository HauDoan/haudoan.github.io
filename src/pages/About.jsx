/* eslint-disable react/prop-types */
function App({ resume, SetTitlePage }) {
  return (
    <>
      {SetTitlePage("Hau Doan")}
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="basic-2">
            <h1 className="welcome-title">Welcome you to my Profile</h1>
            <h1 className="welcome-title" style={{ color: "#7b92b2" }}>
              Hau Doan
            </h1>
            <br />
            <div className="quote">
              <p>“The only way to do great work is to love what you do”</p>
              <p style={{ fontSize: 20, fontWeight: "normal" }}> Steve Jobs</p>
            </div>
            <br />
            <p style={{ fontSize: 18 }}>{resume.basics.summary}</p>
          </div>
          <div className="basic-1">
            <img src={resume.basics.image} className="rounded-full" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
