'use client';

import { useEffect, useRef, useState } from 'react';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'rooms', label: 'The Rooms' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'booking', label: 'Book Now' },
  { id: 'location', label: 'Location' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const menuRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Sticky header + scroll spy
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      for (const section of document.querySelectorAll<HTMLElement>('section[id]')) {
        const top = section.offsetTop - 120;
        if (y > top && y <= top + section.offsetHeight) {
          setActiveId(section.id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!menuRef.current?.contains(target) && !hamburgerRef.current?.contains(target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <header className={`main-header${scrolled ? ' scrolled' : ''}`} id="mainHeader">
      <div className="container nav-container">
        <a href="#home" className="brand-logo-link" aria-label="Prime Suite Home">
          <img src="/assets/images/logo.svg" alt="Prime Suite Air BnB Logo" className="brand-logo-img" />
          <div className="brand-title-wrap">
            <span className="brand-name">PRIME SUITE</span>
            <span className="brand-tagline">AIR BnB RENTALS</span>
          </div>
        </a>

        <nav className={`nav-menu${menuOpen ? ' active' : ''}`} id="navMenu" ref={menuRef}>
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link${activeId === id ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="#booking" className="nav-cta-btn" id="navCtaBook">
            <i className="fa-solid fa-calendar-check"></i>
            <span>Book Now</span>
          </a>

          <button
            ref={hamburgerRef}
            className={`hamburger-btn${menuOpen ? ' active' : ''}`}
            id="hamburgerBtn"
            aria-label="Toggle Navigation Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
