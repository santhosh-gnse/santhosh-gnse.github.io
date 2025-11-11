// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching-experience",
          title: "Teaching Experience",
          description: "Teaching Assistant positions and mentorship roles across various courses and institutions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-second-prize-in-indoml-datathon-2024-phase-2-led-our-team-through-fierce-competition-our-solution-is-now-open-sourced-on-github-and-we-ve-been-invited-to-present-at-indoml-2024-symposium",
          title: '🥈 Second Prize in IndoML Datathon 2024 Phase 2! Led our team through...',
          description: "",
          section: "News",},{id: "news-presented-our-indoml-datathon-2024-solution-at-the-main-panel-of-indoml-2024-symposium-check-out-our-presentation",
          title: 'Presented our IndoML Datathon 2024 solution at the main panel of IndoML 2024...',
          description: "",
          section: "News",},{id: "news-indicasa-accepted-at-aaai-acm-conference-on-ai-ethics-and-society-aies-2025-our-work-on-bias-evaluation-in-llms-using-contrastive-embedding-similarity-has-been-recognized-by-the-top-tier-conference",
          title: '🎉 IndiCASA accepted at AAAI/ACM Conference on AI, Ethics, and Society (AIES) 2025!...',
          description: "",
          section: "News",},{id: "news-our-research-work-indicasa-was-featured-as-an-eight-column-piece-in-a-national-daily-and-covered-by-various-national-newspapers-as-web-articles",
          title: 'Our research work IndiCASA was featured as an Eight Column Piece in a...',
          description: "",
          section: "News",},{id: "news-received-an-all-expenses-paid-invitation-to-attend-indoml-2025-from-the-indoml-datathon-committee-for-submitting-a-quality-entry-to-the-indoml-datathon-2025",
          title: 'Received an all-expenses-paid invitation to attend IndoML 2025 from the IndoML Datathon committee,...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%61%6E%74%68%6F%73%68%67%73%30%31%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/santhosh-gnse", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/envyz101", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/santhosh-g-s-78ba78218", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Bn01xksAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/santhoshgs47", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
