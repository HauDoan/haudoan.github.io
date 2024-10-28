/* eslint-disable react/prop-types */
import React from "react";
import {  Card } from "antd";

function App({ resumse, SetTitlePage }) {
  const { Meta } = Card;
  return (
    <>
    {SetTitlePage("Project | Hau Doan")}
      <section className="work section" id="work">
        <h2 className="section-title">Projects</h2>
        <div className="work__container bd-grid">
          {resumse.projects.map((project) => (
            <React.Fragment key={project.name}>
              <Card
                className="work__img"
                hoverable
                style={{
                  width: 300,
                  boxShadow: "0px 4px 25px rgba(14, 36, 49, 0.15)",
                  fontSize: 12
                }}
                cover={
                  <a href={project.url}>
                    <img alt={project.name} src={project.image} />
                  </a>
                }
              >
                <a href={project.url} className="work__img"> 
                <Meta
                
                  title={project.name}
                  description={project.summary}
                />
                </a>
              </Card>
              {/* </a>  */}
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
