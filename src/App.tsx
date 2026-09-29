import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TypeScriptIcon, ReactIcon, NodeIcon, SqlIcon, CdnIcon, DnsIcon, RestApiIcon, PerformanceIcon } from './components/TechIcons';

const injectStyles = () => {
  const styleId = 'heimo-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Outfit:wght@100..900&family=Space+Grotesk:wght@300..700&display=swap');
      :root {
        --cisco-light-blue: #049fd9;
        --cisco-dark-blue: #005073;
        --cisco-cyan: #e0f7fa;
        --cisco-white: #ffffff;

        --font-heading: 'Orbitron', sans-serif;
       /* --font-body: 'Roboto', sans-serif; */

        /* --font-heading: 'Rajdhani', sans-serif; */
        /* --font-body: 'Inter', sans-serif; */

        /* --font-heading: 'JetBrains Mono', monospace; */
        /* --font-body: 'IBM Plex Sans', sans-serif; */

        /*--font-heading: 'Space Grotesk', sans-serif; */
        --font-body: 'Outfit', sans-serif;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #000;
        overflow: hidden;
      }

      .font-orbitron { font-family: var(--font-heading); }
      .font-roboto { font-family: var(--font-body); }
      
      /* Parallax & Layers */
      .master-wrapper {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background: #000;
      }

      .fixed-scene-layer {
        position: fixed;
        top: -5%;
        left: -5%;
        width: 110%;
        height: 110%;
        z-index: 0;
        perspective: 1000px;
        pointer-events: none;
      }

      .bg-wrapper {
        position: absolute;
        inset: 0;
        overflow: hidden;
      }

      .parallax-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        will-change: transform;
        transform-style: preserve-3d;
      }

      @media (max-width: 768px) {
        /* Rotate the wrapper 90deg so the tiled image reads portrait, then repeat it along its (now vertical) width axis for the whole scroll height */
        .parallax-bg {
          display: none;
        }

        .bg-wrapper {
          top: 50%;
          left: 50%;
          width: 100vh;
          height: 100vw;
          transform: translate(-50%, -50%) rotate(90deg);
          transform-origin: center center;
          background-image: url('/tausta.jpg');
          background-repeat: repeat-x;
          background-size: auto 100%;
          background-position: top left;
        }
      }

      .fog-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(0, 80, 115, 0.75) 0%, rgba(0, 0, 0, 0.95) 100%);
        z-index: 1;
      }

      .content-wrapper {
        background: rgba(0, 20, 40, 0.1);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(4, 159, 217, 0.2);
        border-radius: 12px;
        padding: 24px;
        margin-bottom: 24px;
      }

      .credentials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 16px;
        margin: 24px 0;
      }

      .credential-card {
        background: rgba(4, 159, 217, 0.05);
        border: 1px solid rgba(4, 159, 217, 0.3);
        border-radius: 8px;
        padding: 16px;
        text-align: center;
        transition: all 0.3s ease;
      }

      .credential-card:hover {
        background: rgba(4, 159, 217, 0.2);
        border-color: rgba(4, 159, 217, 0.6);
        transform: translateY(-4px);
      }

      .credential-number {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 28px;
        font-weight: bold;
        color: #049fd9;
        margin-bottom: 8px;
      }

      .credential-label {
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        color: #e0f7fa;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .services-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;
        margin-bottom: 24px;
      }

      .services-with-cv {
        display: grid;
        grid-template-columns: 1fr 300px;
        gap: 32px;
        align-items: start;
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 16px;
      }

      .cv-image-placeholder {
        background: rgba(4, 159, 217, 0.05);
        border: 2px solid rgba(4, 159, 217, 0.4);
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.3s ease;
        height: 100%;
      }

      .cv-image-placeholder:hover {
        border-color: rgba(4, 159, 217, 0.8);
        box-shadow: 0 0 20px rgba(4, 159, 217, 0.3);
      }

      .cv-image-placeholder img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }

      .cta-button {
        background: linear-gradient(135deg, #049fd9 0%, #005073 100%);
        border: 2px solid #049fd9;
        color: white;
        padding: 16px 32px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-family: 'Space Grotesk', sans-serif;
        box-shadow: 0 0 20px rgba(4, 159, 217, 0.4);
      }

      .cta-button:hover {
        background: linear-gradient(135deg, #e0f7fa 0%, #049fd9 100%);
        color: #005073;
        box-shadow: 0 0 30px rgba(4, 159, 217, 0.8);
        transform: translateY(-3px);
      }

      .contact-section {
        border-top: 2px solid rgba(4, 159, 217, 0.3);
        padding-top: 32px;
        margin-top: 32px;
      }

      .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        margin-top: 12px;
      }

      .tech-col {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
      }

      .tech-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: #e0f7fa;
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        transition: all 0.2s ease;
      }

      .tech-badge:hover {
        transform: translateY(-2px);
      }

      @media (max-width: 768px) {
        .services-with-cv {
          grid-template-columns: 1fr;
        }

        .cv-image-placeholder {
          min-height: 300px;
        }

        .credentials-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .tech-stack {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .tech-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .tech-badge {
          justify-content: flex-start;
        }
      }

      .scroll-layer {
        position: absolute;
        inset: 0;
        overflow-y: auto;
        overflow-x: hidden;
        z-index: 10;
        scroll-behavior: smooth;
      }

      /* Glassmorphism Elements */
      .glass-card {
        background: rgba(255, 255, 255, 0.01);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid rgba(224, 247, 250, 0.15);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        transition: all 0.3s ease;
      }

      .glass-card:hover {
        background: rgba(4, 159, 217, 0.1);
        border-color: rgba(4, 159, 217, 0.4);
        transform: translateY(-5px);
        box-shadow: 0 10px 40px rgba(4, 159, 217, 0.2);
      }

      /* Custom Scrollbar */
      ::-webkit-scrollbar { width: 8px; }
      ::-webkit-scrollbar-track { background: rgba(0, 80, 115, 0.2); }
      ::-webkit-scrollbar-thumb { background: rgba(4, 159, 217, 0.5); border-radius: 4px; }
      ::-webkit-scrollbar-thumb:hover { background: rgba(4, 159, 217, 0.8); }
    `;
    document.head.appendChild(style);
  }
};



const PortfolioPage = ({ t, toggleLang }: any) => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const handleMouseDown = (e: any) => {
    setIsMouseDown(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e: any) => {
    if (!isMouseDown) return;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    // Parallax limits
    setOffsetX(Math.max(Math.min(deltaX * 0.06, 40), -40));
    setOffsetY(Math.max(Math.min(deltaY * 0.06, 40), -40));
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    // Smooth return to center
    const interval = setInterval(() => {
      setOffsetX((prev) => {
        const newVal = prev * 0.85;
        return Math.abs(newVal) < 0.5 ? 0 : newVal;
      });
      setOffsetY((prev) => {
        const newVal = prev * 0.85;
        return Math.abs(newVal) < 0.5 ? 0 : newVal;
      });
    }, 16);
    setTimeout(() => clearInterval(interval), 400);
  };

  useEffect(() => {
    if (isMouseDown) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMouseDown, startX, startY]);

  return (
    <div 
      className="master-wrapper"
      onMouseDown={handleMouseDown}
      style={{ cursor: isMouseDown ? 'grabbing' : 'grab' }}
    >
      {/* Background Layer with Parallax */}
      <div className="fixed-scene-layer">
        <div className="bg-wrapper">
          <img
            src="/tausta.jpg"
            alt="Abstract tech background"
            className="parallax-bg"
            style={{
              // 110% overscan on .fixed-scene-layer already covers the drag range, no extra scale needed
              transform: `translateX(${offsetX}px) translateY(${offsetY}px) rotateX(${offsetY * 0.05}deg) rotateY(${offsetX * -0.05}deg)`,
            }}
          />
        </div>
        <div className="fog-overlay" />
      </div>

      {/* Scrollable Content Layer */}
      <div className="scroll-layer">
        <div className="max-w-7xl mx-auto px-6 py-12 relative min-h-screen flex flex-col">
          
          {/* Top Navigation */}
          <div className="flex justify-end items-center mb-16">
            <button 
              onClick={toggleLang}
              className="font-orbitron font-bold text-[#e0f7fa] bg-[#005073]/80 backdrop-blur-md border border-[#049fd9] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#049fd9] hover:shadow-[0_0_15px_rgba(4,159,217,0.6)] transition-all z-20 cursor-pointer"
            >
              {t('lang')}
            </button>
          </div>

          {/* Hero Section with improved contrast */}
          <div className="z-10 mb-12">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              {/* Left side - Intro text */}
              <div className="flex-1">
                <h1 className="font-orbitron text-4xl md:text-6xl font-black text-[var(--cisco-white)] mb-4 tracking-wider drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] uppercase">
                  Inka Parviainen (IP)
                </h1>
                <h2 className="font-roboto text-xl text-[#049fd9] font-medium tracking-wide mb-2">
                  {t('role')}
                </h2>
                <p className="font-roboto text-lg text-[#e0f7fa]/90 mb-6 font-light">
                  {t('org')} | heimoosk.com
                </p>
                
                <a href="https://github.com/infrainka/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[#e0f7fa] border-b-2 border-[#049fd9]/50 pb-1 hover:border-[#049fd9] hover:text-[var(--cisco-white)] transition-all font-roboto">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub Profile
                </a>
              </div>

              {/* Right side - Profile Photo */}
              <div className="w-full md:w-72 flex-shrink-0" style={{ aspectRatio: '12/12' }}>
                <div className="cv-image-placeholder">
                  <img src="/inka-w-isr.png" alt="Inka Parviainen" />
                </div>
              </div>
            </div>

          </div>

          {/* Tech Stack Section */}
        <div className="content-wrapper z-10 mb-12">
            <h3 className="font-orbitron text-xl text-[var(--cisco-white)] mb-4 text-[#049fd9] uppercase tracking-wide">
              {t('techStack')}
            </h3>
            <div className="tech-stack">
              <div className="tech-col">
                 <span className="tech-badge"><DnsIcon /> DNS & TCP/IP</span>
                <span className="tech-badge"><CdnIcon /> CDN</span>
                <span className="tech-badge"><PerformanceIcon /> Web Performance</span>
              </div>
              <div className="tech-col">
                <span className="tech-badge"><ReactIcon /><TypeScriptIcon /> React & TypeScript</span>
                <span className="tech-badge"><NodeIcon /> Node.js</span>
                <span className="tech-badge"><RestApiIcon /> REST APIs</span>
                <span className="tech-badge"><SqlIcon /> SQL</span>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="z-10 mb-12">
            <h3 className="font-orbitron text-2xl text-[var(--cisco-white)] mb-8 border-l-4 border-[#049fd9] pl-4 drop-shadow-lg">
              {t('services')}
            </h3>
            
            <div className="services-grid">
              <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#049fd9] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <h4 className="font-orbitron text-lg font-bold text-[var(--cisco-white)] mb-4 uppercase tracking-wide">
                  {t('service1Title')}
                </h4>
                <p className="font-roboto text-[#e0f7fa]/90 leading-relaxed font-light text-base">
                  {t('service1Desc')}
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#049fd9] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <h4 className="font-orbitron text-lg font-bold text-[var(--cisco-white)] mb-4 uppercase tracking-wide">
                  {t('service2Title')}
                </h4>
                <p className="font-roboto text-[#e0f7fa]/90 leading-relaxed font-light text-base">
                  {t('service2Desc')}
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#049fd9] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <h4 className="font-orbitron text-lg font-bold text-[var(--cisco-white)] mb-4 uppercase tracking-wide">
                  {t('service3Title')}
                </h4>
                <p className="font-roboto text-[#e0f7fa]/90 leading-relaxed font-light text-base">
                  {t('service3Desc')}
                </p>
              </div>
            </div>
          </div>


          {/* Contact Section */}
          <div className="content-wrapper z-10 contact-section">
            <h3 className="font-orbitron text-xl text-[var(--cisco-white)] mb-6 text-[#049fd9] uppercase tracking-wide">
              {t('contact')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="font-orbitron text-[#049fd9] text-sm uppercase tracking-wider mb-2">{t('email')}</div>
                <a href="mailto:hello@infrainka.net" className="font-roboto text-[#e0f7fa] hover:text-[var(--cisco-white)] transition-all">
                  hello@infrainka.net
                </a>
              </div>
              <div>
                <div className="font-orbitron text-[#049fd9] text-sm uppercase tracking-wider mb-2">{t('phone')}</div>
                <a href="tel:+3584578314113" className="font-roboto text-[#e0f7fa] hover:text-[var(--cisco-white)] transition-all">
                  +3584578314113
                </a>
              </div>
              <div>
                <div className="font-orbitron text-[#049fd9] text-sm uppercase tracking-wider mb-2"> {t('employer')}</div>
                <a href="https://heimoosk.com" target="_blank" rel="noopener noreferrer" className="font-roboto text-[#e0f7fa] hover:text-[var(--cisco-white)] transition-all">
                  heimoosk.com
                </a>
              </div>
            </div>
          </div>

          {/* Footer spacer */}
          <div className="pb-12"></div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    injectStyles();
  }, []);

  const toggleLang = () => {
    const newLang = i18n.language === 'en' ? 'fi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return <PortfolioPage t={t} toggleLang={toggleLang} />;
}