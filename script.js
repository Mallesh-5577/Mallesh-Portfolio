// Portfolio content is kept in small data arrays so it is easy to update later.
const skills = [
  { name: "Python", type: "Language", icon: "devicon-python-plain colored" },
  {
    name: "JavaScript",
    type: "Language",
    icon: "devicon-javascript-plain colored",
  },
  { name: "HTML5", type: "Frontend", icon: "devicon-html5-plain colored" },
  { name: "CSS3", type: "Frontend", icon: "devicon-css3-plain colored" },
  {
    name: "Bootstrap",
    type: "Frontend",
    icon: "devicon-bootstrap-plain colored",
  },
  {
    name: "React.js",
    type: "Frontend",
    icon: "devicon-react-original colored",
  },
  { name: "Django", type: "Backend", icon: "devicon-django-plain" },
  { name: "REST API", type: "Backend", icon: "devicon-fastapi-plain colored" },
  {
    name: "SQL",
    type: "Database",
    icon: "devicon-azuresqldatabase-plain colored",
  },
  { name: "MySQL", type: "Database", icon: "devicon-mysql-plain colored" },
  { name: "Git", type: "Version control", icon: "devicon-git-plain colored" },
  { name: "GitHub", type: "Version control", icon: "devicon-github-original" },
  { name: "VS Code", type: "Workflow", icon: "devicon-vscode-plain colored" },
  { name: "Figma", type: "Design", icon: "devicon-figma-plain colored" },
  { name: "Canva", type: "Design", icon: "devicon-canva-original colored" },
  { name: "Vercel", type: "Deployment", icon: "devicon-vercel-original" },
  { name: "Render", type: "Deployment", icon: "devicon-render-original" },
  {
    name: "Hugging Face",
    type: "AI platform",
    icon: "devicon-huggingface-plain colored",
  },
];

const projects = [
  {
    number: "01",
    title: "Product Expiry Tracker",
    description:
      "Database-driven inventory app that tracks expiry dates and sends automated alerts, with a real-time dashboard for status tracking.",
    tags: ["Python", "SQL", "CRUD"],
    code: "https://github.com/Mallesh-5577/Product-Expiry-Tracker",
    demo: "https://product-expiry-tracker-green.vercel.app/",
  },
  {
    number: "02",
    title: "Detection of AI-Generated Text using Deep Learning",
    description:
      "RoBERTa-based AI-vs-Human text classifier with a FastAPI backend, confidence scoring, and real-time analysis for long/noisy text.",
    tags: ["Python", "FastAPI", "Deep Learning", "RoBERTa"],
  },
];

const education = [
  {
    year: "2023–2026",
    title: "B.Tech – AIML",
    institution: "J.B. Institute of Engineering and Technology, Hyderabad",
    score: "CGPA: 8.34",
  },
  {
    year: "2020–2023",
    title: "Diploma – Civil Engineering",
    institution: "Nalgonda Polytechnic",
    score: "CGPA: 8.97",
  },
  {
    year: "2020",
    title: "SSC (10th)",
    institution: "Telangana State Model School, Gundlapally",
    score: "GPA: 10.0",
  },
];

const certificates = [
  { file: "AI.jpg", title: "AI Workshop" },
  { file: "Bootstrap.jpg", title: "Bootstrap Certificate" },
  { file: "Career-building skills .jpg", title: "Career-Building Skills" },
  { file: "Fullstack developer.jpg", title: "Full Stack Developer" },
  { file: "Great learning (Python).jpg", title: "Python with Great Learning" },
  { file: "Internship (Swecha).jpg", title: "Summer of AI Internship" },
  { file: "Internship.jpg", title: "Internship Certificate" },
  { file: "Python workshop.jpg", title: "Python Workshop" },
  { file: "SQL.jpeg", title: "SQL Certificate" },
];

function renderSkills() {
  document.querySelector("#skillsGrid").innerHTML = skills
    .map(
      (skill, index) => `
    <article class="skill-card reveal" style="transition-delay: ${index * 35}ms">
      <i class="skill-icon ${skill.icon}" aria-hidden="true"></i>
      <div><div class="skill-name">${skill.name}</div><div class="skill-type">${skill.type}</div></div>
    </article>
  `,
    )
    .join("");
}

function renderProjects() {
  document.querySelector("#projectsGrid").innerHTML = projects
    .map(
      (project, index) => `
    <div class="col-lg-6">
      <article class="project-card reveal" style="transition-delay: ${index * 120}ms">
        <span class="project-number">${project.number} / PROJECT</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        ${
          project.code || project.demo
            ? `
          <div class="project-links">
            ${project.code ? `<a class="project-link" href="${project.code}" target="_blank" rel="noopener noreferrer">View Code ↗</a>` : ""}
            ${project.demo ? `<a class="project-link" href="${project.demo}">Live Demo ↗</a>` : ""}
          </div>
        `
            : ""
        }
      </article>
    </div>
  `,
    )
    .join("");
}

function renderEducation() {
  document.querySelector("#educationList").innerHTML = education
    .map(
      (item, index) => `
    <article class="education-card reveal" style="transition-delay: ${index * 100}ms">
      <span class="education-year">${item.year}</span>
      <h3>${item.title}</h3>
      <p>${item.institution}</p>
      <p class="education-score">${item.score}</p>
    </article>
  `,
    )
    .join("");
}

function renderCertificates() {
  const grid = document.querySelector("#certificateGrid");
  if (!grid) return;
  grid.innerHTML = certificates
    .map(
      (certificate) => `
      <figure class="certificate-tile reveal">
        <a href="certificates/${encodeURIComponent(certificate.file)}" target="_blank" rel="noopener noreferrer">
          <img src="certificates/${encodeURIComponent(certificate.file)}" alt="${certificate.title} certificate" loading="lazy">
          <figcaption>${certificate.title} <span aria-hidden="true">↗</span></figcaption>
        </a>
      </figure>
    `,
    )
    .join("");
}

function setupCertificateGallery() {
  const gallery = document.querySelector(".certificate-gallery");
  const summary = gallery?.querySelector("summary");
  if (!gallery || !summary) return;

  summary.addEventListener("click", (event) => {
    event.preventDefault();
    gallery.open = !gallery.open;
  });
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((element) => observer.observe(element));
}

function setupCertificateImage() {
  const image = document.querySelector(".certificate-image");
  const fallback = document.querySelector(".certificate-image-fallback");
  if (!image || !fallback) return;
  image.addEventListener("error", () => {
    image.style.display = "none";
    fallback.style.display = "block";
  });
}

function setupNavigation() {
  const nav = document.querySelector("#siteNav");
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section");

  window.addEventListener(
    "scroll",
    () => nav.classList.toggle("scrolled", window.scrollY > 24),
    { passive: true },
  );
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) =>
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`,
            ),
          );
        }
      });
    },
    { rootMargin: "-45% 0px -45%" },
  );
  sections.forEach((section) => sectionObserver.observe(section));

  // Close the mobile menu after navigation.
  links.forEach((link) =>
    link.addEventListener("click", () => {
      const menu = document.querySelector("#navMenu");
      if (menu.classList.contains("show"))
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }),
  );
}

function setupPhotoTilt() {
  const frame = document.querySelector("#sceneFrame");
  const photo = document.querySelector(".hero-photo-wrap");
  if (
    !frame ||
    !photo ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;

  frame.addEventListener("pointermove", (event) => {
    const bounds = frame.getBoundingClientRect();
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -8;
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
    photo.style.setProperty("--photo-rotate-x", `${rotateX}deg`);
    photo.style.setProperty("--photo-rotate-y", `${rotateY}deg`);
    photo.style.setProperty("--photo-depth", "18px");
    photo.style.boxShadow =
      "0 30px 65px rgba(0, 0, 0, 0.5), 0 0 42px rgba(108, 99, 255, 0.24)";
  });
  frame.addEventListener("pointerleave", () => {
    photo.style.setProperty("--photo-rotate-x", "0deg");
    photo.style.setProperty("--photo-rotate-y", "0deg");
    photo.style.setProperty("--photo-depth", "0px");
    photo.style.boxShadow = "";
  });
}

function setupAtmosphere() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let frameRequested = false;
  let pointerX = 72;
  let pointerY = 18;

  document.addEventListener(
    "pointermove",
    (event) => {
      pointerX = (event.clientX / window.innerWidth) * 100;
      pointerY = (event.clientY / window.innerHeight) * 100;
      if (frameRequested) return;
      frameRequested = true;
      requestAnimationFrame(() => {
        document.body.style.setProperty("--pointer-x", `${pointerX}%`);
        document.body.style.setProperty("--pointer-y", `${pointerY}%`);
        frameRequested = false;
      });
    },
    { passive: true },
  );
}

function setupProjectTilt() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -5;
      const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 5;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

renderSkills();
renderProjects();
renderEducation();
renderCertificates();
setupCertificateGallery();
setupRevealAnimations();
setupCertificateImage();
setupNavigation();
setupPhotoTilt();
setupAtmosphere();
setupProjectTilt();
