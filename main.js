(function () {
  var content = window.siteContent;
  var app = document.getElementById("app");

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function linkAttrs(link) {
    var attrs = 'href="' + escapeHtml(link.href) + '" aria-label="' + escapeHtml(link.ariaLabel || link.label) + '"';
    if (link.external) {
      attrs += ' target="_blank" rel="noreferrer"';
    }
    if (link.download) {
      attrs += " download";
    }
    return attrs;
  }

  function linkButton(link, variant) {
    return '<a class="button ' + variant + '" ' + linkAttrs(link) + ">" + escapeHtml(link.label) + "</a>";
  }

  function SectionHeader(section, index) {
    return [
      '<div class="section-header reveal">',
      '<p class="section-number">0' + index + '</p>',
      '<div>',
      '<p class="eyebrow">' + escapeHtml(section.kicker) + "</p>",
      "<h2>" + escapeHtml(section.title) + "</h2>",
      section.subtitle ? '<p class="section-subtitle">' + escapeHtml(section.subtitle) + "</p>" : "",
      "</div>",
      "</div>",
    ].join("");
  }

  function ThemeToggle() {
    return [
      '<button class="theme-toggle" type="button" aria-label="Switch color theme" aria-pressed="false">',
      '<span class="theme-dot" aria-hidden="true"></span>',
      '<span class="theme-label">Light</span>',
      "</button>",
    ].join("");
  }

  function Header() {
    return [
      '<header class="site-header">',
      '<a class="brand" href="#top" aria-label="Archit Mishra home"><span>AM</span></a>',
      '<nav class="nav-links" aria-label="Primary navigation">',
      content.nav.map(function (item) {
        return '<a href="' + escapeHtml(item.href) + '" aria-label="Jump to ' + escapeHtml(item.label) + ' section">' + escapeHtml(item.label) + "</a>";
      }).join(""),
      "</nav>",
      ThemeToggle(),
      "</header>",
    ].join("");
  }

  function Hero() {
    var ctas = content.hero.ctas
      .map(function (key, index) {
        return linkButton(content.links[key], index === 0 ? "button-primary" : "button-secondary");
      })
      .join("");

    return [
      '<section class="hero section-shell" id="top" aria-labelledby="hero-title">',
      '<div class="hero-copy reveal">',
      '<p class="eyebrow">' + escapeHtml(content.hero.eyebrow) + "</p>",
      '<h1 id="hero-title">' + escapeHtml(content.hero.headline) + "</h1>",
      '<p class="hero-body">' + escapeHtml(content.hero.body) + "</p>",
      '<p class="identity-line">' + escapeHtml(content.hero.identity) + "</p>",
      '<div class="hero-actions" aria-label="Primary contact links">' + ctas + "</div>",
      "</div>",
      '<aside class="hero-panel reveal" aria-label="Profile summary">',
      '<img src="' + escapeHtml(content.hero.image.src) + '" alt="' + escapeHtml(content.hero.image.alt) + '" class="hero-image" />',
      '<div class="archive-note">',
      '<span>Operator Thesis</span>',
      '<p>' + escapeHtml(content.hero.signature) + "</p>",
      "</div>",
      "</aside>",
      "</section>",
    ].join("");
  }

  function StatCard(stat) {
    return [
      '<article class="stat-card reveal">',
      '<strong>' + escapeHtml(stat.value) + "</strong>",
      '<h3>' + escapeHtml(stat.label) + "</h3>",
      stat.detail ? '<p>' + escapeHtml(stat.detail) + "</p>" : "",
      "</article>",
    ].join("");
  }

  function Stats() {
    return [
      '<section class="stats-band" aria-label="Career positioning stats">',
      '<div class="section-shell stat-grid">',
      content.stats.map(StatCard).join(""),
      "</div>",
      "</section>",
    ].join("");
  }

  function TimelineItem(item, index) {
    return [
      '<article class="journey-item reveal">',
      '<span class="timeline-index">' + String(index + 1).padStart(2, "0") + "</span>",
      '<div class="timeline-copy">',
      '<p>' + escapeHtml(item.label) + "</p>",
      '<h3>' + escapeHtml(item.title) + "</h3>",
      '<span>' + escapeHtml(item.body) + "</span>",
      "</div>",
      "</article>",
    ].join("");
  }

  function JourneyTimeline() {
    return [
      '<section class="content-section journey-section" id="journey" aria-labelledby="journey-title">',
      '<div class="section-shell">',
      SectionHeader(content.journey, 1).replace("<h2>", '<h2 id="journey-title">'),
      '<div class="journey-layout">',
      '<div class="journey-narrative reveal">',
      content.journey.paragraphs.map(function (paragraph) {
        return "<p>" + escapeHtml(paragraph) + "</p>";
      }).join(""),
      "</div>",
      '<div class="journey-timeline" aria-label="Journey milestones">',
      content.journey.items.map(TimelineItem).join(""),
      "</div>",
      "</div>",
      "</div>",
      "</section>",
    ].join("");
  }

  function ExperienceCard(item) {
    return [
      '<article class="experience-card reveal">',
      '<div class="experience-topline">',
      '<p>' + escapeHtml(item.company) + "</p>",
      item.dates ? '<time>' + escapeHtml(item.dates) + "</time>" : "",
      '<span>' + escapeHtml(item.focus) + "</span>",
      item.context ? '<small>' + escapeHtml(item.context) + "</small>" : "",
      item.badges ? badgeList(item.badges) : "",
      "</div>",
      '<div class="experience-main">',
      '<h3>' + escapeHtml(item.role) + "</h3>",
      item.description ? '<p class="experience-description">' + escapeHtml(item.description) + "</p>" : "",
      "<ul>",
      item.bullets.map(function (bullet) {
        return "<li>" + escapeHtml(bullet) + "</li>";
      }).join(""),
      "</ul>",
      item.links ? actionLinks(item.links, "experience-actions") : "",
      "</div>",
      "</article>",
    ].join("");
  }

  function Experience() {
    return [
      '<section class="content-section experience-section" id="experience" aria-labelledby="experience-title">',
      '<div class="section-shell">',
      SectionHeader(content.experience, 2).replace("<h2>", '<h2 id="experience-title">'),
      '<div class="experience-grid">',
      content.experience.items.map(ExperienceCard).join(""),
      "</div>",
      "</div>",
      "</section>",
    ].join("");
  }

  function tagList(tags) {
    return '<div class="tag-list">' + tags.map(function (tag) {
      return "<span>" + escapeHtml(tag) + "</span>";
    }).join("") + "</div>";
  }

  function badgeList(badges) {
    return '<div class="badge-list">' + badges.map(function (badge) {
      return "<span>" + escapeHtml(badge) + "</span>";
    }).join("") + "</div>";
  }

  function actionLinks(links, className) {
    return '<div class="' + className + '">' + links.map(function (link) {
      return linkButton(link, "button-secondary button-compact");
    }).join("") + "</div>";
  }

  function RecommendationCard(item) {
    return [
      '<article class="recommendation-card reveal">',
      '<blockquote>',
      '<p>' + escapeHtml(item.shortQuote) + "</p>",
      "</blockquote>",
      '<div class="recommendation-person">',
      '<strong>' + escapeHtml(item.name) + "</strong>",
      '<span>' + escapeHtml(item.title) + " · " + escapeHtml(item.company) + "</span>",
      '<span>' + escapeHtml(item.relationship) + " · " + escapeHtml(item.date) + "</span>",
      "</div>",
      "<details>",
      "<summary>Read full quote</summary>",
      '<p>' + escapeHtml(item.fullQuote) + "</p>",
      item.note ? '<small>' + escapeHtml(item.note) + "</small>" : "",
      "</details>",
      "</article>",
    ].join("");
  }

  function Recommendations() {
    return [
      '<section class="content-section recommendations-section" id="recommendations" aria-labelledby="recommendations-title">',
      '<div class="section-shell">',
      SectionHeader(content.recommendations, 3).replace("<h2>", '<h2 id="recommendations-title">'),
      '<div class="recommendation-grid">',
      content.recommendations.items.map(RecommendationCard).join(""),
      "</div>",
      "</div>",
      "</section>",
    ].join("");
  }

  function ProjectCard(project) {
    return [
      '<article class="project-card reveal">',
      '<div class="project-rule" aria-hidden="true"></div>',
      project.badges ? badgeList(project.badges) : "",
      '<h3>' + escapeHtml(project.title) + "</h3>",
      project.meta ? '<div class="project-meta">' + project.meta.map(function (item) {
        return "<span>" + escapeHtml(item) + "</span>";
      }).join("") + "</div>" : "",
      '<p class="project-description">' + escapeHtml(project.description) + "</p>",
      '<p>' + escapeHtml(project.expanded) + "</p>",
      tagList(project.tags),
      project.links ? actionLinks(project.links, "project-actions") : "",
      project.status ? '<p class="project-status">' + escapeHtml(project.status) + "</p>" : "",
      "</article>",
    ].join("");
  }

  function Projects() {
    return [
      '<section class="content-section project-section" id="projects" aria-labelledby="projects-title">',
      '<div class="section-shell">',
      SectionHeader(content.projects, 4).replace("<h2>", '<h2 id="projects-title">'),
      '<div class="project-grid">',
      content.projects.items.map(ProjectCard).join(""),
      "</div>",
      "</div>",
      "</section>",
    ].join("");
  }

  function SkillGroup(group) {
    return [
      '<article class="skill-group reveal">',
      '<h3>' + escapeHtml(group.title) + "</h3>",
      tagList(group.skills),
      "</article>",
    ].join("");
  }

  function Arsenal() {
    return [
      '<section class="content-section arsenal-section" id="arsenal" aria-labelledby="arsenal-title">',
      '<div class="section-shell">',
      SectionHeader(content.arsenal, 5).replace("<h2>", '<h2 id="arsenal-title">'),
      '<div class="skill-grid">',
      content.arsenal.groups.map(SkillGroup).join(""),
      "</div>",
      "</div>",
      "</section>",
    ].join("");
  }

  function PrincipleCard(item) {
    return [
      '<article class="principle-card reveal">',
      '<h3>' + escapeHtml(item.title) + "</h3>",
      '<p>' + escapeHtml(item.body) + "</p>",
      "</article>",
    ].join("");
  }

  function Principles() {
    return [
      '<section class="content-section principles-section" aria-labelledby="principles-title">',
      '<div class="section-shell">',
      SectionHeader(content.principles, 6).replace("<h2>", '<h2 id="principles-title">'),
      '<div class="principle-grid">',
      content.principles.items.map(PrincipleCard).join(""),
      "</div>",
      "</div>",
      "</section>",
    ].join("");
  }

  function WritingCTA() {
    var section = content.writing;
    return [
      '<section class="content-section writing-section" id="writing" aria-labelledby="writing-title">',
      '<div class="section-shell writing-layout">',
      '<div>',
      SectionHeader(section, 7).replace("<h2>", '<h2 id="writing-title">'),
      '<p class="writing-copy reveal">' + escapeHtml(section.body) + "</p>",
      '<div class="writing-actions reveal">',
      linkButton(section.cta, "button-primary"),
      "</div>",
      "</div>",
      '<div class="article-list" aria-label="Selected writing">',
      section.articles.map(function (article) {
        return [
          '<a class="article-link reveal" href="' + escapeHtml(article.href) + '" target="_blank" rel="noreferrer" aria-label="Read ' + escapeHtml(article.title) + ' on Substack in a new tab">',
          "<span>Article</span>",
          "<strong>" + escapeHtml(article.title) + "</strong>",
          "</a>",
        ].join("");
      }).join(""),
      "</div>",
      "</div>",
      "</section>",
    ].join("");
  }

  function Personal() {
    return [
      '<section class="content-section personal-section" aria-labelledby="personal-title">',
      '<div class="section-shell">',
      SectionHeader(content.personal, 8).replace("<h2>", '<h2 id="personal-title">'),
      '<div class="personal-layout">',
      '<div class="personal-grid">',
      content.personal.items.map(function (item) {
        return [
          '<article class="personal-card reveal">',
          '<span aria-hidden="true"></span>',
          '<h3>' + escapeHtml(item.title) + "</h3>",
          '<p>' + escapeHtml(item.body) + "</p>",
          "</article>",
        ].join("");
      }).join(""),
      "</div>",
      '<div class="personal-media-rail" aria-label="Personal images">',
      content.personal.media.map(function (item) {
        return [
          '<figure class="personal-media reveal">',
          '<img src="' + escapeHtml(item.src) + '" alt="' + escapeHtml(item.alt) + '" />',
          '<figcaption>' + escapeHtml(item.caption) + "</figcaption>",
          "</figure>",
        ].join("");
      }).join(""),
      "</div>",
      "</div>",
      "</div>",
      "</section>",
    ].join("");
  }

  function ContactCTA() {
    var ctas = content.contact.ctas
      .map(function (key, index) {
        var link = key === "email"
          ? Object.assign({}, content.links[key], { label: content.email })
          : content.links[key];
        return linkButton(link, index === 0 ? "button-primary" : "button-secondary");
      })
      .join("");

    return [
      '<section class="contact-section" id="contact" aria-labelledby="contact-title">',
      '<div class="section-shell contact-panel reveal">',
      '<p class="eyebrow">' + escapeHtml(content.contact.kicker) + "</p>",
      '<h2 id="contact-title">' + escapeHtml(content.contact.title) + "</h2>",
      '<p>' + escapeHtml(content.contact.body) + "</p>",
      '<div class="contact-actions" aria-label="Contact links">' + ctas + "</div>",
      '<div class="resume-action">' + linkButton(content.contact.resume, "button button-resume") + "</div>",
      "</div>",
      "</section>",
    ].join("");
  }

  function Footer() {
    var links = ["email", "linkedin", "github", "substack"]
      .map(function (key) {
        return '<a ' + linkAttrs(content.links[key]) + ">" + escapeHtml(content.links[key].label.replace("Start a Conversation", "Email")) + "</a>";
      })
      .join("");

    return [
      '<footer class="site-footer">',
      '<div class="section-shell footer-layout">',
      '<div>',
      '<strong>' + escapeHtml(content.name) + "</strong>",
      "</div>",
      '<nav aria-label="Footer links">' + links + "</nav>",
      "</div>",
      "</footer>",
    ].join("");
  }

  function render() {
    app.innerHTML = [
      Header(),
      '<main id="main">',
      Hero(),
      Stats(),
      JourneyTimeline(),
      Experience(),
      Recommendations(),
      Projects(),
      Arsenal(),
      Principles(),
      WritingCTA(),
      Personal(),
      ContactCTA(),
      "</main>",
      Footer(),
    ].join("");
  }

  function setupThemeToggle() {
    var button = document.querySelector(".theme-toggle");
    var label = document.querySelector(".theme-label");
    var query = window.matchMedia("(prefers-color-scheme: dark)");

    function currentTheme() {
      return document.documentElement.dataset.theme || (query.matches ? "dark" : "light");
    }

    function applyTheme(theme, persist) {
      document.documentElement.dataset.theme = theme;
      button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      label.textContent = theme === "dark" ? "Dark" : "Light";
      if (persist) {
        try {
          localStorage.setItem("archit-theme", theme);
        } catch (error) {
          return;
        }
      }
    }

    applyTheme(currentTheme(), false);

    button.addEventListener("click", function () {
      applyTheme(currentTheme() === "dark" ? "light" : "dark", true);
    });

    query.addEventListener("change", function (event) {
      try {
        if (!localStorage.getItem("archit-theme")) {
          applyTheme(event.matches ? "dark" : "light", false);
        }
      } catch (error) {
        applyTheme(event.matches ? "dark" : "light", false);
      }
    });
  }

  render();
  setupThemeToggle();
})();
