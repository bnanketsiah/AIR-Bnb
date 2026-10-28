'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { RoomKey } from '@/lib/data';
import BookButton from './SiteButtons';

type Slide = {
  src: string;
  alt: string;
  tag: string;
  tagClass: string;
  icon: string;
  title: string;
  room: RoomKey;
  infoHref: string;
  infoIcon: string;
  infoLabel: string;
};

const SLIDES: Slide[] = [
  { src: '/assets/images/suite2/suite2_living_room_main.jpg', alt: 'Prime Suite Living Room', tag: 'Living Room', tagClass: 'tag-room2', icon: 'fa-couch', title: 'Living Room', room: 'room2', infoHref: '#rooms', infoIcon: 'fa-circle-info', infoLabel: 'View Rooms' },
  { src: '/assets/images/suite2/suite2_bedroom_master_king.jpg', alt: 'Prime Suite Master Bedroom', tag: 'Master Bedroom', tagClass: 'tag-room2', icon: 'fa-bed', title: 'Master Bedroom', room: 'room2', infoHref: '#rooms', infoIcon: 'fa-circle-info', infoLabel: 'View Rooms' },
  { src: '/assets/images/suite2/suite2_dining_main.jpg', alt: 'Prime Suite Dining Area', tag: 'Dining Area', tagClass: 'tag-room2', icon: 'fa-utensils', title: 'Dining Area', room: 'room2', infoHref: '#rooms', infoIcon: 'fa-circle-info', infoLabel: 'View Rooms' },
  { src: '/assets/images/exterior_villa.jpg', alt: 'Prime Suite Villa Exterior and Paved Parking', tag: 'Property Grounds', tagClass: 'tag-villa', icon: 'fa-shield-halved', title: 'Exterior & Paved Parking', room: 'both', infoHref: '#location', infoIcon: 'fa-location-dot', infoLabel: 'Location' },
];

const AUTOPLAY_MS = 4500;
const pad = (n: number) => String(n).padStart(2, '0');

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false); // toggled by the pause button
  const [hovered, setHovered] = useState(false);
  // Bumped on manual navigation so the autoplay timer restarts.
  const [timerKey, setTimerKey] = useState(0);
  const touchStartX = useRef(0);

  const go = useCallback((index: number) => {
    setCurrent((index + SLIDES.length) % SLIDES.length);
    setTimerKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (paused || hovered) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, hovered, timerKey]);

  return (
    <div className="hero-slider-container">
      <div
        className="hero-slider-wrap"
        id="heroSlider"
        aria-label="Prime Suite Photo Showcase"
        role="region"
        tabIndex={0}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={(e) => (touchStartX.current = e.changedTouches[0].screenX)}
        onTouchEnd={(e) => {
          const diffX = e.changedTouches[0].screenX - touchStartX.current;
          if (Math.abs(diffX) > 40) go(diffX < 0 ? current + 1 : current - 1);
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') go(current - 1);
          else if (e.key === 'ArrowRight') go(current + 1);
        }}
      >
        <div className="hero-slider-track" id="heroSliderTrack">
          {SLIDES.map((slide, i) => (
            <div key={slide.src} className={`hero-slide${i === current ? ' active' : ''}`} data-room={slide.room}>
              <img src={slide.src} alt={slide.alt} className="hero-slide-img" />
              <div className="hero-slide-overlay">
                <div className="hero-slide-top">
                  <span className={`hero-slide-tag ${slide.tagClass}`}>
                    <i className={`fa-solid ${slide.icon}`}></i> {slide.tag}
                  </span>
                  <span className="hero-slide-counter">
                    {pad(i + 1)} / {pad(SLIDES.length)}
                  </span>
                </div>
                <div className="hero-slide-bottom">
                  <h3 className="hero-slide-title">{slide.title}</h3>
                  <div className="hero-slide-actions">
                    <BookButton as="a" room={slide.room} className="btn-slide-book">
                      <i className="fa-solid fa-calendar-check"></i> Book Now
                    </BookButton>
                    <a href={slide.infoHref} className="btn-slide-info">
                      <i className={`fa-solid ${slide.infoIcon}`}></i> {slide.infoLabel}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-nav-btn prev" aria-label="Previous Slide" onClick={() => go(current - 1)}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="slider-nav-btn next" aria-label="Next Slide" onClick={() => go(current + 1)}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        <div className="slider-controls-bar">
          <div className="slider-dots" id="sliderDots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`slider-dot${i === current ? ' active' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <button
            className="slider-pause-btn"
            aria-label={paused ? 'Resume slideshow' : 'Pause slideshow'}
            onClick={() => setPaused((p) => !p)}
          >
            <i className={`fa-solid ${paused ? 'fa-play' : 'fa-pause'}`}></i>
          </button>
        </div>
      </div>

      <div className="hero-slider-footer">
        <div className="slider-footer-item">
          <i className="fa-solid fa-camera"></i>
          <span>100% Real Pictures</span>
        </div>
        <div className="slider-footer-item">
          <i className="fa-solid fa-location-dot"></i>
          <span className="property-location-text">Anaji behind Nhyira hotel</span>
        </div>
        <div className="slider-footer-item">
          <i className="fa-solid fa-phone"></i>
          <span>0547238675 / 0550638015</span>
        </div>
      </div>
    </div>
  );
}
