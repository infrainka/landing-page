import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  // We attach the mouse events to the entire window or the main wrapper
  // to ensure dragging works everywhere.
  
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;

    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    // Limit the parallax offset
    setOffsetX(Math.max(Math.min(deltaX * 0.05, 30), -30));
    setOffsetY(Math.max(Math.min(deltaY * 0.05, 30), -30));
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    const interval = setInterval(() => {
      setOffsetX((prev) => {
        const newVal = prev * 0.9;
        return Math.abs(newVal) < 0.5 ? 0 : newVal;
      });
      setOffsetY((prev) => {
        const newVal = prev * 0.9;
        return Math.abs(newVal) < 0.5 ? 0 : newVal;
      });
    }, 16);
    setTimeout(() => clearInterval(interval), 500);
  };

  useEffect(() => {
    if (isMouseDown) {
      document.addEventListener('mousemove', handleMouseMove as any);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove as any);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMouseDown, startX, startY]);

  return (
    <div 
      className="portfolio-master-wrapper"
      onMouseDown={handleMouseDown}
      style={{ cursor: isMouseDown ? 'grabbing' : 'grab' }}
    >
      {/* LAYER 1: The Fixed Background (Never Scrolls) */}
      <div className="fixed-scene-layer">
        <div
          className="portfolio-background"
          style={{
            transform: `translateX(${offsetX}px) translateY(${offsetY}px) rotateX(${offsetY * 0.05}deg) rotateY(${offsetX * -0.05}deg)`,
          }}
        />
        <div className="portfolio-fog" />
      </div>

      {/* LAYER 2: The Scrolling Content */}
      <div className="scroll-view-layer">
        <div className="portfolio-content-wrapper">
          <Link to="/" className="back-button">
            ← Back to landing page
          </Link>
          
          <div className="portfolio-hero">
            <div className="hero-content">
              <h1>Inka Parviainen "IP"</h1>
              <p className="subtitle">Network Protocol & Automation Engineer | "Bit by Bit"</p>
              <a href="https://github.com/infrainka" target="_blank" rel="noopener noreferrer" className="github-link">
                <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <div className="portfolio-content">
            <section className="portfolio-section">
              <h2>Network Engineering & Simulation</h2>
              <p>Navigating between raw packet logic and modern orchestration. Specializing in protocol design, RFC-level implementation, and infrastructure-as-code automation.</p>
            </section>

            <section className="portfolio-section">
              <h3>Expertise</h3>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <span className="expertise-tag">Protocol Engineering</span>
                  <p>Low-level TCP/IP stack implementation. RFC-compliant protocol stack design and peer session lifecycle orchestration.</p>
                </div>
                <div className="expertise-item">
                  <span className="expertise-tag">IP Services</span>
                  <p>Expertise in DNS/DHCP orchestration, NAT, and IPv6 transition.</p>
                </div>
                <div className="expertise-item">
                  <span className="expertise-tag">Automation</span>
                  <p>Infrastructure as Code using Python, Ansible, and Netmiko.</p>
                </div>
                <div className="expertise-item">
                  <span className="expertise-tag">Virtualization</span>
                  <p>VM and container deployment, network simulation and digital twins with GNS3 and EVE-NG.</p>
                </div>
              </div>
            </section>

            <section className="portfolio-section">
              <h3>Featured Projects</h3>
              <div className="projects-grid">
                <div className="project-card">
                  <h4>BGP Simulator</h4>
                  <p>
                    A full implementation of the Border Gateway Protocol 4 (RFC 4271) spec. 
                    Features a custom TCP/IP stack handling raw packet construction, 
                    Finite State Machine (FSM) transitions, and path attribute processing 
                    without external socket libraries.
                  </p>
                </div>
                <div className="project-card">
                  <h4>Route Trust Engine</h4>
                  <p>
                    A Python-based gRPC microservice that validates routing integrity by comparing BGP updates against an authoritative topology truth. 
                    Features automated prefix-to-ASN matching and real-time hijack detection with custom trust-score penalty logic.
                  </p>
                </div>
                <div className="project-card">
                  <h4>Network Automation</h4>
                  <p>Comprehensive CI/CD pipelines for network configuration, utilizing automated testing and zero-touch provisioning.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;