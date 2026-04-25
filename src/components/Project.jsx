
const projects = [
  {
    icon: "🚀",
    title: "EntreSkill Hub",
    frontend: "https://github.com/shrwn08/skill_hub.git",
    preview: "https://skillhub-shrwn.netlify.app/",
    description:
      "Micro-entrepreneurship platform with skill-to-idea recommendation engine, mentor booking with atomic slot reservation, and role-based access for user/mentor/admin.",
    tags: ["React.js", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
  },
  {
    icon: "🏠",
    title: "RentEase",
    frontend: "https://github.com/shrwn08/rent_ease_frontend.git",
    preview: "https://rentease-shrawan.netlify.app/",
    description:
      "Full-stack home appliance & furniture rental marketplace with category/price filters, approve/reject flows, and owner & renter dashboards with due-date tracking.",
    tags: ["React.js", "Node.js", "MongoDB", "JWT", "Netlify"],
  },
  {
    icon: "🛒",
    title: "Shopify Clone",
    frontend: "https://github.com/shrwn08/frontend-shopify",
    preview: "https://shopify-shrwn.netlify.app/",
    description: "Full e-commerce platform with role-based JWT auth (admin/user), product management, Stripe payments, Cloudinary image handling, and optimised REST APIs.",
    tags: ["React.js", "Express.js", "MongoDB", "Stripe API", "Cloudinary"],
  },
  {
    icon: "▶️",
    title: "Youtube Clone",
    frontend: "https://github.com/shrwn08/youtube-frontend",
    preview: "https://frontend-ytube.vercel.app/",
    description: "Full-stack YouTube clone with video browsing, search, and playback built with React and Node.js.",
    tags: ["React.js", "Node.js", "REST API"],
  },
  {
    icon: "🟩",
    title: "Wordle",
    frontend: "https://github.com/shrwn08/wordle-clone",
    preview: "https://wordle-shrwn.netlify.app/",
    description: "Browser-based Wordle clone with keyboard input, color-coded feedback, and win/loss tracking.",
    tags: ["React.js", "JavaScript", "CSS"],
  },
  {
    icon: "🍽️",
    title: "Foodie",
    frontend: "https://github.com/shrwn08/foodie",
    preview: "https://foodie-frontend-mu.vercel.app/",
    description: "Restaurant frontend with menu browsing, cart management, and a clean ordering experience.",
    tags: ["React.js", "Node.js", "MongoDB"],
  },
  {
    icon: "📰",
    title: "News Feed",
    frontend: null,
    preview: "https://shrwnkumar08-me-buildout-xboard.vercel.app/",
    description: "Dynamic news bulletin that aggregates and displays categorised news articles in a clean feed layout.",
    tags: ["JavaScript", "HTML", "CSS"],
  },
];

export default function Projects() {
  return (
    <>
      <section id="projects">
        <div className="section-inner">
          <p className="section-label fade-up">Featured Projects</p>
          <h2 className="section-title fade-up">Some Things I've Built</h2>
          <div className="projects-grid">
            {projects.map((proj, i) => (
              <div className="proj-card fade-up" key={i}>
                {/* Project thumbnail */}
                {proj.image && (
                  <div className="proj-thumbnail">
                    <img src={proj.image} alt={proj.title} />
                  </div>
                )}

                <div className="proj-card-body">
                  <div className="proj-header">
                    <div className="proj-icon">{proj.icon}</div>
                    <div className="proj-links">
                      {proj.frontend && (
                        <a
                          href={proj.frontend}
                          className="proj-link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          ⬡ GitHub
                        </a>
                      )}
                      {proj.preview && (
                        <a
                          href={proj.preview}
                          className="proj-link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          ↗ Live
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="proj-title">{proj.title}</div>
                  <div className="proj-desc">{proj.description}</div>

                  {proj.tags && (
                    <div className="proj-tags">
                      {proj.tags.map((tag, j) => (
                        <span className="tag" key={j}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>
    </>
  );
}