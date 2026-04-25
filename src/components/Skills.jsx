import React, { useEffect } from "react";

function Skills() {
  const skills = [
    { icon: '🍃', name: 'MongoDB', pct: 82, color: '#4DB33D' },
    { icon: '⚡', name: 'Express.js', pct: 85, color: '#ffffff' },
    { icon: '⚛️', name: 'React.js', pct: 90, color: '#61DAFB' },
    { icon: '🟢', name: 'Node.js', pct: 85, color: '#339933' },
    { icon: '🟡', name: 'JavaScript', pct: 88, color: '#F7DF1E' },
    { icon: '🎨', name: 'Tailwind CSS', pct: 87, color: '#38BDF8' },
    { icon: '🔷', name: 'TypeScript', pct: 60, color: '#3178C6' },
    { icon: '🔴', name: 'Redux', pct: 78, color: '#764ABC' },
    { icon: '🔒', name: 'JWT Auth', pct: 83, color: '#6c63ff' },
    { icon: '🗃️', name: 'MySQL', pct: 65, color: '#00758F' },
    { icon: '☕', name: 'Java', pct: 55, color: '#ED8B00' },
    { icon: '🔧', name: 'Git & GitHub', pct: 88, color: '#F05032' },
    { icon: '☁️', name: 'Vercel', pct: 80, color: '#ffffff' },
    { icon: '💳', name: 'Stripe API', pct: 72, color: '#635BFF' },
  ];

  const R = 26;
  const CIRC = 2 * Math.PI * R;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");

            e.target.querySelectorAll(".circle-fg").forEach((c) => {
              c.style.strokeDashoffset = c.dataset.offset;
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="skills">
        <div className="section-inner">
          <p className="section-label fade-up">What I Do</p>
          <h2 className="section-title fade-up">Skills & Technologies</h2>

          <div className="skills-grid">
            {skills.map((s, index) => {
              const offset = CIRC * (1 - s.pct / 100);

              return (
                <div key={index} className="skill-card fade-up">
                  <div className="skill-icon">{s.icon}</div>

                  <div className="circle-wrap">
                    <svg width="60" height="60" viewBox="0 0 60 60">
                      <circle
                        className="circle-bg"
                        cx="30"
                        cy="30"
                        r={R}
                      />
                      <circle
                        className="circle-fg"
                        cx="30"
                        cy="30"
                        r={R}
                        stroke={s.color}
                        strokeDasharray={CIRC}
                        strokeDashoffset={CIRC}
                        data-offset={offset}
                      />
                    </svg>

                    <div className="circle-pct">{s.pct}%</div>
                  </div>

                  <div className="skill-name">{s.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="divider"></div>
    </>
  );
}

export default Skills;