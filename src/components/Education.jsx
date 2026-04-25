import React from "react";

function Education() {
  return (
    <>
      <section id="education">
        <div className="section-inner">
          <p className="section-label fade-up">Academic Background</p>
          <h2 className="section-title fade-up">Education</h2>
          <div className="edu-grid">
            <div className="edu-card fade-up">
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🎓</div>
              <div className="edu-degree">MBA — Human Resource Management</div>
              <div className="edu-school">Graphic Era University, Dehradun</div>
              <div className="edu-meta">
                2019 – 2021 &nbsp;·&nbsp; CGPA: 8.4
              </div>
            </div>
            <div className="edu-card fade-up">
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>📚</div>
              <div className="edu-degree">
                BBA — Bachelor of Business Administration
              </div>
              <div className="edu-school">Kumaun University</div>
              <div className="edu-meta">2015 – 2018</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>
    </>
  );
}

export default Education;
