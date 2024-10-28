/* eslint-disable no-unused-vars */
import DateDifference from "../component/DateDifference"
import { useEffect } from "react";
/* eslint-disable react/prop-types */
function App({ resume, SetTitlePage }) {
  return (
    <>
      {SetTitlePage("CV | Hau Doan")}
      <div className="header-cv">
        <h1 className="section-title">CV</h1>
        <div className="down-cv">
          <a href="" className="home__social-icon">
            <i className="bx bxs-file-pdf"></i>
          </a>
        </div>
      </div>

      <div className="cv">
        <div className="card">
          <h2>General Information</h2>
          <table className="general" style={{ marginTop: 10 }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: "bold" }}>Full Name</td>
                <td>{resume.basics.name}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>Date of Birth</td>
                <td>{resume.basics.birth}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>Languages</td>
                <td>{resume.languages.language}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <h2 className="card-title">Experience</h2>
          {resume.work.map((w) => (
            <table key={w.name} className="card-text">
              <tbody>
                <tr>
                  <th className="timeline" style={{ fontWeight: "bold" }}>
                    {DateDifference(w.startDate, w.endDate)}
                  </th>
                  <td className="company">{w.name}</td>
                </tr>
                <tr>
                  <td></td>
                  <td>{w.position}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>

        <div className="card">
          <h2 className="card-title">Education</h2>
          <table className="card-text">
            <tbody>
              <tr>
                <th className="timeline" style={{ fontWeight: "bold" }}>
                  2023
                </th>
                <td className="company">{resume.education.studyType}</td>
              </tr>
              <tr>
                <td></td>
                <td className="role">{resume.education.institution}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
