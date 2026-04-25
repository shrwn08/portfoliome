import React from "react";

function Experience() {
  return (
    <>
      <section id="experience">
        <div className="section-inner">
          <p className="section-label fade-up">Work History</p>
          <h2 className="section-title fade-up">Experience</h2>
          <div className="timeline">
            <div className="exp-card fade-up">
              <div className="exp-header">
                <div className="exp-title">Full-Stack Developer Intern</div>
                <div className="exp-badge">Jan 2026 – Present</div>
              </div>
              <div className="exp-company">Unified Mentor · Remote</div>
              <ul className="exp-list">
                <li>
                  Built <strong>EntreSkill Hub</strong> — a mentor-guided
                  learning platform with role-based access for learners and
                  mentors, skill browsing, session enrollment, and mentor
                  application flows.
                </li>
                <li>
                  Built <strong>RentEase</strong> — a home appliance and
                  furniture rental marketplace with product listings, rental
                  request flows, and a user dashboard on the MERN stack.
                </li>
              </ul>
            </div>
            <div className="exp-card fade-up">
              <div className="exp-header">
                <div className="exp-title">
                  Assistant Teacher Intern — MERN Stack
                </div>
                <div className="exp-badge">Apr 2025 – Oct 2025</div>
              </div>
              <div className="exp-company">Internshala · Gurgaon, Haryana</div>
              <ul className="exp-list">
                <li>
                  Mentored <strong>150+ learners</strong> in full-stack
                  development (React, Express.js, WebSockets) with focus on
                  production-ready code and best practices.
                </li>
                <li>
                  Reviewed projects for scalability and security; conducted live
                  sessions and resolved technical blockers in real time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>
    </>
  );
}

export default Experience;
