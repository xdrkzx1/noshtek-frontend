'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon, Menu, X, Contrast } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // 'light' or 'high-contrast'

  useEffect(() => {
    // Check local storage or system preferences on mount
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  const toggleHighContrast = () => {
    const newTheme = theme === 'light' ? 'high-contrast' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.container}>
        {/* LOGO */}
        <Link href="/" style={styles.logo}>
          <span style={styles.logoAccent}>Noshtek</span>.com
        </Link>

        {/* Desktop Menu */}
        <div style={styles.desktopMenu} className="desktop-menu">
          <MenuLink href="/industries/utilities">Industries</MenuLink>
          <MenuLink href="/capabilities/brim">Capabilities</MenuLink>
          <MenuLink href="/ai-insights">AI Insights</MenuLink>
          <MenuLink href="/company">Company</MenuLink>
          
          <button 
            onClick={toggleHighContrast} 
            style={styles.contrastToggle} 
            ARIA-label="Toggle High Contrast"
            title="Toggle High Contrast"
          >
            <Contrast size={20} />
            <span style={styles.srOnly}>Toggle High Contrast (WCAG 2.2 AA)</span>
          </button>
          
          <Link href="/contact" className="btn btn-primary">
            Strategic Assessment
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div style={styles.mobileToggle}>
          <button 
            onClick={toggleHighContrast} 
            style={{...styles.contrastToggle, marginRight: '1rem'}}
            ARIA-label="Toggle High Contrast"
          >
            <Contrast size={20} />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} ARIA-label="Toggle Menu">
            {isOpen ? <X size={24} color="var(--text-primary)" /> : <Menu size={24} color="var(--text-primary)" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={styles.mobileMenu}>
          <MobileMenuLink href="/industries/utilities" onClick={() => setIsOpen(false)}>Industries</MobileMenuLink>
          <MobileMenuLink href="/capabilities/brim" onClick={() => setIsOpen(false)}>Capabilities</MobileMenuLink>
          <MobileMenuLink href="/ai-insights" onClick={() => setIsOpen(false)}>AI Insights</MobileMenuLink>
          <MobileMenuLink href="/company" onClick={() => setIsOpen(false)}>Company</MobileMenuLink>
          <Link href="/contact" style={styles.mobileMenuBtn} className="btn btn-primary" onClick={() => setIsOpen(false)}>
            Strategic Assessment
          </Link>
        </div>
      )}
    </nav>
  );
}

function MenuLink({ href, children }) {
  return (
    <Link href={href} style={styles.link}>
      {children}
    </Link>
  );
}

function MobileMenuLink({ href, onClick, children }) {
  return (
    <Link href={href} onClick={onClick} style={styles.mobileLink}>
      {children}
    </Link>
  );
}

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    backgroundColor: 'var(--bg-primary)',
    borderBottom: '1px solid var(--border-color)',
    padding: '1rem 0',
    transition: 'background-color 0.3s ease',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    fontFamily: 'var(--font-heading)',
    letterSpacing: '-0.02em',
  },
  logoAccent: {
    color: 'var(--trust-blue)',
  },
  desktopMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  link: {
    fontWeight: '500',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    transition: 'color 0.2s ease',
  },
  contrastToggle: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--text-secondary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem',
    borderRadius: '4px',
  },
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: '0',
  },
  mobileToggle: {
    display: 'none',
  },
  mobileMenu: {
    padding: '1rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    backgroundColor: 'var(--bg-secondary)',
    borderBottom: '1px solid var(--border-color)',
  },
  mobileLink: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
    padding: '0.5rem 0',
    borderBottom: '1px solid var(--border-color)',
  },
  mobileMenuBtn: {
    marginTop: '1rem',
    textAlign: 'center',
  }
};

// Simple global style for responsive Navbar
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @media (max-width: 768px) {
      .desktop-menu { display: none !important; }
      nav > .container > div:last-child { display: flex !important; align-items: center; }
    }
  `;
  document.head.appendChild(style);
}
