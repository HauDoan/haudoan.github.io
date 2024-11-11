/* eslint-disable react/prop-types */
import React from "react";
import { Card } from "antd";

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
                cover={
                  <a href={project.url}>
                    <img alt={project.name} src={project.image} />
                  </a>
                }
                style={{minHeight: 180}}
              >
                <a href={project.url} className="work__img">
                  <Meta title={project.name} description={project.summary} />
                </a>
              </Card>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
