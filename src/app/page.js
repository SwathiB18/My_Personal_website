"use client"
import React, { useState, useEffect } from 'react';
import { FaReact } from "react-icons/fa";
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeProjectFilter, setActiveProjectFilter] = useState('all');
  const [activeSkillCategory, setActiveSkillCategory] = useState('tech');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Frontend Development',
    message: ''
  });

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 5000);
      setFormData({ name: '', email: '', service: 'Frontend Development', message: '' });
    }
  };

  // Sample Projects Data
  const projects = [
    {
      id: 1,
      title: 'AstroChart Wheel Generator',
      category: 'astro',
      desc: 'Interactive React application calculating real-time planetary positions and rendering SVG horoscope wheels.',
      tags: ['React.js', 'Bootstrap 5', 'SVG Math', 'REST API'],
      icon: 'bi-compass-fill',
      color: 'bg-primary'
    },
    {
      id: 2,
      title: 'Telugu Flashcards & Quiz App',
      category: 'teaching',
      desc: 'Interactive vocabulary flashcards, pronunciation trainer, and quiz suite for beginners learning Telugu.',
      tags: ['React Hooks', 'LocalStorage API', 'Bootstrap', 'Audio API'],
      icon: 'bi-journal-bookmark-fill',
      color: 'bg-success'
    },
    {
      id: 3,
      title: 'Creator Analytics Dashboard',
      category: 'tech',
      desc: 'Comprehensive web analytics dashboard monitoring YouTube channel metrics, video views, and audience growth.',
      tags: ['React', 'Charts.js', 'Bootstrap Grid', 'CSS3'],
      icon: 'bi-bar-chart-line-fill',
      color: 'bg-info'
    },
    {
      id: 4,
      title: 'Planetary Transit Tracker',
      category: 'astro',
      desc: 'Web app tracking major planetary shifts (Jupiter, Saturn, Rahu-Ketu) with custom notification triggers.',
      tags: ['React.js', 'Moment.js', 'Bootstrap 5'],
      icon: 'bi-moon-stars-fill',
      color: 'bg-purple'
    },
    {
      id: 5,
      title: 'Telugu Grammar Helper',
      category: 'teaching',
      desc: 'Interactive guide detailing Telugu verbs, sentence framing, and real-time transliteration.',
      tags: ['React', 'Bootstrap', 'JavaScript'],
      icon: 'bi-translate',
      color: 'bg-warning text-dark'
    },
    {
      id: 6,
      title: 'Developer Portfolio Theme',
      category: 'tech',
      desc: 'High performance dark/light themed React portfolio template built with Bootstrap 5.',
      tags: ['React', 'Bootstrap CSS', 'Responsive'],
      icon: 'bi-code-slash',
      color: 'bg-danger'
    }
  ];

  const filteredProjects = activeProjectFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeProjectFilter);

  const bgClass = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
  const cardBgClass = darkMode ? 'bg-secondary bg-opacity-25 border-secondary text-light' : 'bg-white border-0 text-dark shadow-sm';
  const navBgClass = darkMode ? 'bg-dark bg-opacity-90 navbar-dark border-bottom border-secondary' : 'bg-white bg-opacity-90 navbar-light border-bottom shadow-sm';
const textClass = darkMode ? 'text-light':'text-dark'
  return (
    <div className={`min-vh-100 ${bgClass}`} style={{ transition: 'background-color 0.3s ease, color 0.3s ease', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Bootstrap 5 & Bootstrap Icons CDN */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />

      {}
      <style>{`
        .bg-gradient-cosmic {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
        }
        .text-gradient-cosmic {
          background: linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hover-lift {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
        }
        .cosmic-glow {
          box-shadow: 0 0 25px rgba(168, 85, 247, 0.2);
        }
        .hero-ring {
          padding: 4px;
          background: linear-gradient(135deg, #6366f1, #a855f7, #ec4899);
          border-radius: 50%;
        }
        .cursor-pointer {
          cursor: pointer;
        }
      `}</style>

      {}
      <nav className={`navbar navbar-expand-lg sticky-top ${navBgClass}`}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4" href="#home">
            <span className="p-2 rounded-circle bg-gradient-cosmic text-white d-inline-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }}>
              <i className="">SB</i>
            </span>
            <span className={darkMode ? 'text-white' : 'text-dark'}>
             <span className="text-gradient-cosmic">Dev&Trainer</span>
            </span>
          </a>

          <div className="d-flex align-items-center gap-2 order-lg-3">
            <button 
              onClick={toggleTheme} 
              className={`btn btn-sm ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} rounded-circle p-2 d-flex align-items-center justify-content-center`}
              style={{ width: '38px', height: '38px' }}
              title="Toggle Theme"
            >
              <i className={`bi ${darkMode ? 'bi-sun-fill text-warning' : 'bi-moon-stars-fill'}`}></i>
            </button>
            <button 
              className="navbar-toggler border-0" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse order-lg-2" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold">
              <li className="nav-item"><a className="nav-link px-3" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link px-3" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link px-3" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link px-3" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link px-3" href="#astrology">Astrology Channel</a></li>
              <li className="nav-item"><a className="nav-link px-3" href="#telugu">Telugu Teaching</a></li>
              <li className="nav-item"><a className="nav-link px-3" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {}
      <section id="home" className="py-5 py-md-6 position-relative overflow-hidden">
        <div className="container py-4">
          <div className="row align-items-center gy-5">
            <div className="col-lg-7">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-gradient-cosmic bg-opacity-10 text-white mb-3 border border-secondary">
                <i className="bi bi-stars text-warning"></i>
                <span className="small fw-semibold">Frontend Developer • Content Creator • Language Educator</span>
              </div>
              
              <h1 className="display-4 fw-bold mb-3 lh-sm">
                Crafting Code, Exploring Cosmos & <span className="text-gradient-cosmic">Teaching Culture</span>
              </h1>
              
              <p className={`lead mb-4 ${darkMode ? 'text-light text-opacity-75' : 'text-secondary'}`}>
                Hi! I am a passionate <strong>React Frontend Developer</strong>, creator of an <strong>Astrology YouTube channel</strong>, and an enthusiastic <strong>Telugu Language Educator</strong> sharing knowledge in my free time.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <a href="#projects" className="btn btn-primary bg-gradient-cosmic border-0 px-4 py-2 rounded-pill fw-semibold d-inline-flex align-items-center gap-2 shadow-sm">
                  <i className="bi bi-code-square"></i> View Tech Projects
                </a>
                <a href="#astrology" className="btn btn-danger px-4 py-2 rounded-pill fw-semibold d-inline-flex align-items-center gap-2 shadow-sm">
                  <i className="bi bi-youtube"></i> Watch YouTube
                </a>
                <a href="#telugu"  className="btn btn-success px-4 py-2 rounded-pill fw-semibold d-inline-flex align-items-center gap-2 shadow-sm">
                  <i className="bi bi-book"></i> Learn Telugu
                </a>
              </div>

              {/* Stat Counters */}
              <div className="row g-3 pt-3 border-top border-secondary border-opacity-25">
                <div className="col-auto me-4">
                  <div className="h4 fw-bold mb-0 text-gradient-cosmic">React.js</div>
                  <div className={'small  ${textClass}'}>Frontend Tech</div>
                </div>
                <div className="col-auto me-4">
                  <div className="h4 fw-bold mb-0 text-danger">Astrology</div>
                  <div className="small ${textClass}">YouTube Channel</div>
                </div>
                <div className="col-auto">
                  <div className="h4 fw-bold mb-0 text-success">Telugu</div>
                  <div className="small ${textClass}">Language Classes</div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 text-center">
              <div className="position-relative d-inline-block">
                <div className="hero-ring shadow-lg cosmic-glow">
                  <div className={`${darkMode ? 'bg-dark' : 'bg-white'} p-4 rounded-circle d-flex align-items-center justify-content-center`} style={{ width: '280px', height: '280px' }}>
                    <div className="text-center">
                      <div className="d-flex justify-content-center gap-2 mb-2">
                        <span className="p-2 bg-primary bg-opacity-25 rounded-circle text-primary"><i className="bi bi-code-slash fs-4"></i></span>
                        <span className="p-2 bg-purple bg-opacity-25 rounded-circle text-purple" style={{ color: '#a855f7' }}><i className="bi bi-stars fs-4"></i></span>
                        <span className="p-2 bg-success bg-opacity-25 rounded-circle text-success"><i className="bi bi-journal-text fs-4"></i></span>
                      </div>
                      <h3 className="fw-bold mb-1 fs-4">Developer & Mentor</h3>
                      <p className="{textClass} small mb-0">Code • Cosmos • Culture</p>
                    </div>
                  </div>
                </div>

                <div className="position-absolute top-0 start-0 translate-middle-y bg-dark text-white p-2 px-3 rounded-pill shadow border border-secondary d-none d-sm-flex align-items-center gap-2">
                  <i className="bi bi-react text-info"></i>
                  <span className="small fw-bold">React Developer</span>
                </div>

                <div className="position-absolute bottom-0 end-0 translate-middle-y bg-danger text-white p-2 px-3 rounded-pill shadow d-none d-sm-flex align-items-center gap-2">
                  <i className="bi bi-youtube"></i>
                  <span className="small fw-bold">Astro Content</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="about" className={`py-5 ${darkMode ? 'bg-black bg-opacity-25' : 'bg-light'}`}>
        <div className="container py-4">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <h6 className="text-uppercase text-gradient-cosmic fw-bold mb-2">About Me</h6>
            <h2 className="fw-bold fs-1 mb-3">Intersection of Logic, Stars & Language</h2>
            <p className={darkMode ? 'text-light text-opacity-75' : 'text-secondary'}>
              Combining technical structure with artistic expression across three distinct domains.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className={`card h-100 ${cardBgClass} p-4 rounded-4 hover-lift`}>
                <div className="p-3 bg-primary bg-opacity-10 text-primary rounded-3 d-inline-block mb-3" style={{ width: 'fit-content' }}>
                  <i className="bi bi-laptop fs-2"></i>
                </div>
                <h4 className="fw-bold mb-2">Frontend Developer</h4>
                <p className="small ${textClass} mb-0">
                  Specializing in React.js, JavaScript, and modern responsive styling frameworks like Bootstrap. I build smooth, high-speed, dynamic web interfaces with clean component architectures.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`card h-100 ${cardBgClass} p-4 rounded-4 hover-lift`}>
                <div className="p-3 bg-purple bg-opacity-10 rounded-3 d-inline-block mb-3" style={{ width: 'fit-content', color: '#a855f7' }}>
                  <i className="bi bi-moon-stars fs-2"></i>
                </div>
                <h4 className="fw-bold mb-2">Content Creator</h4>
                <p className="small ${textClass} mb-0">
                  Creator of a popular astrology YouTube channel. I decipher complex planetary movements, Vedic horoscopes, and transits into engaging visual content for thousands of subscribers.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`card h-100 ${cardBgClass} p-4 rounded-4 hover-lift`}>
                <div className="p-3 bg-success bg-opacity-10 text-success rounded-3 d-inline-block mb-3" style={{ width: 'fit-content' }}>
                  <i className="bi bi-translate fs-2"></i>
                </div>
                <h4 className="fw-bold mb-2">Telugu Language Teacher</h4>
                <p className={'small  mb-0 '}>
                  Passionate about preserving culture and connecting people through language. In my free time, I tutor students around the world in conversational and written Telugu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="skills" className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h6 className="text-uppercase text-gradient-cosmic fw-bold mb-2">Skills & Toolkit</h6>
            <h2 className="fw-bold fs-1 mb-3">Core Expertise</h2>

            <div className="d-flex justify-content-center gap-2 mt-4 flex-wrap">
              <button 
                onClick={() => setActiveSkillCategory('tech')}
                className={`btn btn-sm rounded-pill px-4 py-2 ${activeSkillCategory === 'tech' ? 'btn-primary bg-gradient-cosmic border-0' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
              >
                Frontend Tech
              </button>
              <button 
                onClick={() => setActiveSkillCategory('astro')}
                className={`btn btn-sm rounded-pill px-4 py-2 ${activeSkillCategory === 'astro' ? 'btn-primary bg-gradient-cosmic border-0' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
              >
                 YouTube
              </button>
              <button 
                onClick={() => setActiveSkillCategory('telugu')}
                className={`btn btn-sm rounded-pill px-4 py-2 ${activeSkillCategory === 'telugu' ? 'btn-primary bg-gradient-cosmic border-0' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
              >
                Telugu Teaching
              </button>
            </div>
          </div>

          <div className="row g-4">
            {activeSkillCategory === 'tech' && (
              <>
                <div className="col-md-6 col-lg-3">
                  <div className={`card ${cardBgClass} p-3 rounded-3 text-center h-100`}>
                  <i className="text-info fs-1 mb-2"><FaReact  /></i> 
                    <h5 className="fw-bold">React.js</h5>
                    <p className="small ${textClass} mb-0">Hooks, State, Context API, JSX, React Router</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className={`card ${cardBgClass} p-3 rounded-3 text-center h-100`}>
                    <i className="bi bi-filetype-js text-warning fs-1 mb-2"></i>
                    <h5 className="fw-bold">JavaScript (ES6+)</h5>
                    <p className="small ${textClass} mb-0">Async/Await, DOM, Fetch API, Array Methods</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className={`card ${cardBgClass} p-3 rounded-3 text-center h-100`}>
                    <i className="bi bi-bootstrap-fill text-purple fs-1 mb-2" style={{ color: '#7952b3' }}></i>
                    <h5 className="fw-bold">Bootstrap & CSS</h5>
                    <p className="small ${textClass} mb-0">Bootstrap 5, Flexbox, Responsive Layouts</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className={`card ${cardBgClass} p-3 rounded-3 text-center h-100`}>
                    <i className="bi bi-git text-danger fs-1 mb-2"></i>
                    <h5 className="fw-bold">Git & Tools</h5>
                    <p className="small ${textClass} mb-0">GitHub, VS Code, npm, Performance Optimization</p>
                  </div>
                </div>
              </>
            )}

            {activeSkillCategory === 'astro' && (
              <>
                <div className="col-md-6 col-lg-3">
                  <div className={`card ${cardBgClass} p-3 rounded-3 text-center h-100`}>
                    <i className="bi bi-youtube text-danger fs-1 mb-2"></i>
                    <h5 className="fw-bold">Video Production</h5>
                    <p className="small ${textClass} mb-0">Scripting, Audio Recording, Thumbnail Design</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className={`card ${cardBgClass} p-3 rounded-3 text-center h-100`}>
                    <i className="bi bi-compass text-primary fs-1 mb-2"></i>
                    <h5 className="fw-bold">Vedic Astrology</h5>
                    <p className="small ${textClass} mb-0">Horoscope Charts, Transit Calculation, Nakshatras</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className={`card ${cardBgClass} p-3 rounded-3 text-center h-100`}>
                    <i className="bi bi-people text-info fs-1 mb-2"></i>
                    <h5 className="fw-bold">Audience Growth</h5>
                    <p className="small ${textClass} mb-0">Community Engagement, SEO Titles, Analytics</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className={`card ${cardBgClass} p-3 rounded-3 text-center h-100`}>
                    <i className="bi bi-mic text-success fs-1 mb-2"></i>
                    <h5 className="fw-bold">Public Speaking</h5>
                    <p className="small ${textClass} mb-0">Clear narration, structuring complex topics smoothly</p>
                  </div>
                </div>
              </>
            )}

            {activeSkillCategory === 'telugu' && (
              <>
                <div className="col-md-6 col-lg-3">
                  <div className={`card ${cardBgClass} p-3 rounded-3 text-center h-100`}>
                    <i className="bi bi-book text-success fs-1 mb-2"></i>
                    <h5 className="fw-bold">Telugu Grammar</h5>
                    <p className="small ${textClass} mb-0">Sentence syntax, verb conjugations, script rules</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className={`card ${cardBgClass} p-3 rounded-3 text-center h-100`}>
                    <i className="bi bi-chat-quote text-info fs-1 mb-2"></i>
                    <h5 className="fw-bold">Spoken Fluency</h5>
                    <p className="small ${textClass} mb-0">Everyday conversations, accent practice, colloquial phrases</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className={`card ${cardBgClass} p-3 rounded-3 text-center h-100`}>
                    <i className="bi bi-journal-text text-warning fs-1 mb-2"></i>
                    <h5 className="fw-bold">Curriculum Design</h5>
                    <p className="small ${textClass}mb-0">Customized learning modules for kids & adults</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className={`card ${cardBgClass} p-3 rounded-3 text-center h-100`}>
                    <i className="bi bi-heart text-danger fs-1 mb-2"></i>
                    <h5 className="fw-bold">Interactive Mentorship</h5>
                    <p className="small ${textClass} mb-0">Patient 1-on-1 sessions, flashcard memory aids</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {}
      <section id="projects" className={`py-5 ${darkMode ? 'bg-black bg-opacity-25'  : 'bg-light'}`}>
        <div className="container py-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
            <div>
              <h6 className="text-uppercase text-gradient-cosmic fw-bold mb-2">Projects</h6>
              <h2 className="fw-bold fs-1 mb-0">Featured Web Work</h2>
            </div>

            {/* Filter Pills */}
            <div className="d-flex gap-2 mt-3 mt-md-0 flex-wrap">
              <button 
                onClick={() => setActiveProjectFilter('all')} 
                className={`btn btn-sm rounded-pill px-3 ${activeProjectFilter === 'all' ? 'btn-primary' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveProjectFilter('tech')} 
                className={`btn btn-sm rounded-pill px-3 ${activeProjectFilter === 'tech' ? 'btn-primary' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
              >
                Frontend Tech
              </button>
              <button 
                onClick={() => setActiveProjectFilter('astro')} 
                className={`btn btn-sm rounded-pill px-3 ${activeProjectFilter === 'astro' ? 'btn-primary' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
              >
                Astrology Apps
              </button>
              <button 
                onClick={() => setActiveProjectFilter('teaching')} 
                className={`btn btn-sm rounded-pill px-3 ${activeProjectFilter === 'teaching' ? 'btn-primary' : (darkMode ? 'btn-outline-light' : 'btn-outline-dark')}`}
              >
                Teaching Apps
              </button>
            </div>
          </div>

          <div className="row g-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6">
                <div className={`card h-100 ${cardBgClass} rounded-4 overflow-hidden hover-lift`}>
                  <div className={`${project.color} p-4 text-white position-relative`} style={{ minHeight: '140px' }}>
                    <i className={`bi ${project.icon} display-5 position-absolute top-0 end-0 m-3 opacity-50`}></i>
                    <h4 className="fw-bold mb-1">{project.title}</h4>
                    <span className="badge bg-dark bg-opacity-50 border border-light border-opacity-25">Project #{project.id}</span>
                  </div>
                  <div className="card-body p-4 d-flex flex-column">
                    <p className={'small ${textClass} mb-3'}>{project.desc}</p>
                    <div className="d-flex flex-wrap gap-1 mb-4 mt-auto">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="badge bg-secondary bg-opacity-25 text-body border border-secondary border-opacity-25 small">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      <a href="#contact" className="btn btn-sm btn-primary rounded-pill px-3 d-inline-flex align-items-center gap-1">
                        <i className="bi bi-box-arrow-up-right"></i> Live Demo
                      </a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary rounded-pill px-3 d-inline-flex align-items-center gap-1">
                        <i className="bi bi-github"></i> Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="astrology" className="py-5 position-relative">
        <div className="container py-4">
          <div className={`card ${cardBgClass} rounded-4 p-4 p-md-5 cosmic-glow overflow-hidden`}>
            <div className="row align-items-center gy-4">
              <div className="col-lg-7">
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-danger bg-opacity-10 text-danger fw-semibold small mb-3">
                  <i className="bi bi-youtube"></i> YouTube Channel Spotlight
                </div>
                <h2 className="fw-bold fs-1 mb-3">Cosmic Insights & Astrology Content</h2>
                <p className={darkMode ? 'text-light text-opacity-75' : 'text-secondary'}>
                  Combining astronomical principles with Vedic horoscope analyses. I create weekly videos breaking down planetary shifts, transits, and sign predictions.
                </p>

                <div className="row g-3 my-3">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle-fill text-success fs-5"></i>
                      <span>Weekly Horoscope & Transits</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle-fill text-success fs-5"></i>
                      <span>Planetary Alignment Guides</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle-fill text-success fs-5"></i>
                      <span>Beginner Astrology Tutorials</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle-fill text-success fs-5"></i>
                      <span>Interactive Live Q&A Sessions</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a href="https://youtube.com/@radhakrishnajyotishyasastra?si=4cQjLlcYJxVIr3pf" target="_blank" rel="noopener noreferrer" className="btn btn-danger px-4 py-2 rounded-pill fw-semibold d-inline-flex align-items-center gap-2 shadow">
                    <i className="bi bi-youtube fs-5"></i> Visit YouTube Channel
                  </a>
                </div>
              </div>

              <div className="col-lg-5 text-center">
                <div className="p-4 bg-gradient-cosmic text-white rounded-4 shadow-lg position-relative">
                  <i className="bi bi-play-circle-fill display-2 mb-3 d-block cursor-pointer"></i>
                  <h4 className="fw-bold mb-1">Watch Astrology Forecasts</h4>
                  <p className="small text-white-50 mb-3">Subscribe for latest videos & cosmic updates</p>
                  <span className="badge bg-white text-dark px-3 py-2 rounded-pill fw-bold">100+ Videos Uploaded</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="telugu" className={`py-5 ${darkMode ? 'bg-black bg-opacity-25' : 'bg-light'}`}>
        <div className="container py-4">
          <div className="row align-items-center gy-4">
            <div className="col-lg-5">
              <div className="p-4 p-md-5 bg-gradient-cosmic rounded-4 text-white shadow-lg">
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white bg-opacity-25 text-white small mb-3">
                  <i className="bi bi-book"></i> Language Education
                </div>
                <h2 className="fw-bold mb-3">Learn Telugu in Free Time</h2>
                <p className="text-white-50 mb-4">
                  Offering interactive, student-friendly online Telugu lessons covering spoken conversation, grammar, and script reading.
                </p>

                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-center gap-3 bg-white bg-opacity-10 p-3 rounded-3">
                    <i className="bi bi-chat-left-dots fs-3 text-warning"></i>
                    <div>
                      <h6 className="fw-bold mb-0">Conversational Spoken Telugu</h6>
                      <small className="text-white-50">Master day-to-day dialogue quickly</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 bg-white bg-opacity-10 p-3 rounded-3">
                    <i className="bi bi-pencil-square fs-3 text-info"></i>
                    <div>
                      <h6 className="fw-bold mb-0">Reading & Writing Script</h6>
                      <small className="text-white-50">Step-by-step varnamala instruction</small>
                    </div>
                  </div>
                </div>

                <a href="https://www.superprof.co.in/ir/3345854-a6dd27/" target="_blank" className="btn btn-light rounded-pill px-4 py-2 fw-semibold text-dark w-100 text-center">
                  Book Free Intro Session
                </a>
              </div>
            </div>

            <div className="col-lg-7">
              <h6 className="text-uppercase text-gradient-cosmic fw-bold mb-2">Class Structure</h6>
              <h2 className="fw-bold fs-1 mb-4">What You Will Learn</h2>

              <div className="row g-3">
                <div className="col-md-6">
                  <div className={`card ${cardBgClass} p-4 rounded-4 h-100`}>
                    <h5 className="fw-bold mb-2 text-primary">1. Basic Greetings & Words</h5>
                    <p className="small ${textClass} mb-0">Essential vocabulary, introductions, numbers, and basic sentence construction.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className={`card ${cardBgClass} p-4 rounded-4 h-100`}>
                    <h5 className="fw-bold mb-2 text-purple" style={{ color: '#a855f7' }}>2. Grammar & Verbs</h5>
                    <p className="small  mb-0">Understanding past, present, future tenses and noun-verb agreements.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className={`card ${cardBgClass} p-4 rounded-4 h-100`}>
                    <h5 className="fw-bold mb-2 text-success">3. Fluent Conversation</h5>
                    <p className="small {textClass} mb-0">Practice speaking with interactive scenarios: shopping, travel, and socializing.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className={`card ${cardBgClass} p-4 rounded-4 h-100`}>
                    <h5 className="fw-bold mb-2 text-warning">4. Custom Practice Apps</h5>
                    <p className="small {textClass} mb-0">Access custom web flashcards and practice quizzes built specifically for my students.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="contact" className="py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <h6 className="text-uppercase text-gradient-cosmic fw-bold mb-2">Get In Touch</h6>
              <h2 className="fw-bold fs-1 mb-3">Let's Work Together</h2>
              <p className={darkMode ? 'text-light text-opacity-75' : 'text-secondary'}>
                Whether you need a React developer, want to collaborate on astrology content, or want to learn Telugu—send a message!
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className={`card ${cardBgClass} p-4 p-md-5 rounded-4 shadow-sm`}>
                {formSubmitted && (
                  <div className="alert alert-success d-flex align-items-center gap-2 mb-4" role="alert">
                    <i className="bi bi-check-circle-fill fs-5"></i>
                    <span>Thank you! Your message has been sent successfully. I will reply soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        required 
                        className={`form-control ${darkMode ? 'bg-dark text-light border-secondary' : 'bg-light'}`} 
                        placeholder="Your full name" 
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                        className={`form-control ${darkMode ? 'bg-dark text-light border-secondary' : 'bg-light'}`} 
                        placeholder="yourname@example.com" 
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-semibold">Inquiry Regarding</label>
                      <select 
                        name="service" 
                        value={formData.service} 
                        onChange={handleInputChange} 
                        className={`form-select ${darkMode ? 'bg-dark text-light border-secondary' : 'bg-light'}`}
                      >
                        <option value="Frontend Development">Frontend Development (React Project)</option>
                        <option value="Astrology Collaboration">Astrology Channel / Collaboration</option>
                        <option value="Telugu Lessons">Telugu Language Lessons</option>
                        <option value="General">General Questions</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-semibold">Message</label>
                      <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleInputChange} 
                        required 
                        rows="4" 
                        className={`form-control ${darkMode ? 'bg-dark text-light border-secondary' : 'bg-light'}`} 
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                    <div className="col-12 text-end">
                      <button type="submit" className="btn btn-primary bg-gradient-cosmic border-0 px-5 py-2.5 rounded-pill fw-semibold d-inline-flex align-items-center gap-2">
                        <i className="bi bi-send"></i> Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <footer className={`py-4 border-top ${darkMode ? 'border-secondary bg-black' : 'border-light bg-light'}`}>
        <div className="container text-center">
          <span className="fw-bold fs-5">
            Swathi<span className="text-gradient-cosmic" style={{marginLeft:5}} >Bommaraju</span>
          </span>
      <p className= {'small ${textClass} mb-3 mt-1'} >Contact number<span style={{marginLeft:3}}>:+91 8187038020</span>
       
      </p>
       <p className= {'small ${textClass} mb-3 mt-1'} >Email ID:<span style={{marginLeft:3}}>swathibommaraju27@gmail.com</span></p>
          <p className={'small ${textClass} mb-3 mt-1'}>
            React Frontend Developer • YouTube Content Creator • Telugu Teacher
          </p>
          <div className="d-flex justify-content-center gap-3 mb-3">
            <a href="https://github.com/SwathiB18" target="_blank" rel="noopener noreferrer" className={`btn btn-sm ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} rounded-circle`} title="GitHub">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-danger rounded-circle" title="YouTube">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/in/swathi-ind/" target="_blank" rel="noopener noreferrer" className={`btn btn-sm ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} rounded-circle`} title="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <p className="small ${textClass} mb-0">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}