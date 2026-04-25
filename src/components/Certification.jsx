import React from "react";

function Certification() {
  return (
    <>
      <section id="certifications">
        <div className="section-inner">
          <p className="section-label fade-up">Achievements</p>
          <h2 className="section-title fade-up">Certifications & Highlights</h2>
          <div className="cert-list">
            <div className="cert-item fade-up">
              <div className="cert-icon">🏆</div>
              <div>
                <div className="cert-text">
                  Crio.Do Full-Stack Developer Track
                </div>
                <div className="cert-sub">
                  2023–2024 · JavaScript, Frontend, Backend with Node.js
                </div>
              </div>
            </div>
            <div className="cert-item fade-up">
              <div className="cert-icon">💻</div>
              <div>
                <div className="cert-text">100+ LeetCode Problems Solved</div>
                <div className="cert-sub">
                  Data structures and algorithms practice
                </div>
              </div>
            </div>
            <div className="cert-item fade-up">
              <div className="cert-icon">🎯</div>
              <div>
                <div className="cert-text">Mentored 150+ Learners</div>
                <div className="cert-sub">
                  MERN stack development at Internshala
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>
    </>
  );
}

export default Certification;
