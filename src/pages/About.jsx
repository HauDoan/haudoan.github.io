/* eslint-disable react/prop-types */
function App({resume, SetTitlePage}) {

  return (
    <>
    {SetTitlePage("Hau Doan")}
    <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="basic-2\/3">
            <h1>
              Hau Doan
            </h1>
            <p>Software developer</p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing
              elit.consectetur error
            </p>
          </div>
          <div className="basic-1\/3">
            <img src={resume.basics.image} className="rounded-full" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
