import { galleryIndex, LOCATION, PHONE_1, PHONE_2, type RoomKey } from '@/lib/data';
import HeroSlider from './HeroSlider';
import BookButton, { GalleryButton, GalleryImage } from './SiteButtons';

const WHATSAPP_URL = `https://wa.me/${PHONE_1}`;

export function TopBar() {
  return (
    <div className="top-bar" id="topBar">
      <div className="container top-bar-inner">
        <div className="top-bar-location">
          <i className="fa-solid fa-location-dot"></i>
          <span>
            <strong>LOCATION:</strong> <span className="property-location-text">{LOCATION}</span>
          </span>
        </div>
        <div className="top-bar-perk">
          <i className="fa-solid fa-car-side"></i>
          <span>Car Rental Available</span>
        </div>
        <div className="top-bar-contacts">
          <div className="top-hotline">
            <i className="fa-solid fa-phone"></i>
            <span>CONTACTS:</span>
            <a href={`tel:+${PHONE_1}`}>0547238675</a>
            <span>/</span>
            <a href={`tel:+${PHONE_2}`}>0550638015</a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="top-whatsapp-btn"
            aria-label="Chat with Prime Suite on WhatsApp"
          >
            <i className="fa-brands fa-whatsapp"></i>
            <span>WhatsApp Chat</span>
          </a>
        </div>
      </div>
    </div>
  );
}

const HERO_PILLS = [
  { icon: 'fa-bed', label: 'Cozy Bedrooms' },
  { icon: 'fa-couch', label: 'Spacious Living Areas' },
  { icon: 'fa-wifi', label: 'Free Wi-Fi' },
  { icon: 'fa-shield-halved', label: 'Secure & Private' },
  { icon: 'fa-snowflake', label: 'Air Conditioned' },
];

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-overlay"></div>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fa-solid fa-star"></i>
              <span>AIR BnB RENTALS • 2 ROOMS • ANAJI</span>
            </div>

            <h1 className="hero-title">
              YOUR COMFORT
              <span>OUR PRIORITY</span>
            </h1>

            <div className="hero-script-tag">Feel at home, anywhere.</div>

            <p className="hero-description">
              Experience serene and private accommodation in Anaji. We offer two distinct, fully air-conditioned private
              units: <strong>Room 1</strong> and <strong>Room 2</strong>.
            </p>

            <div className="hero-location-pill">
              <i className="fa-solid fa-location-dot" style={{ color: 'var(--color-gold)' }}></i>
              <span>
                <strong>LOCATION:</strong> <span className="property-location-text">{LOCATION}</span>
              </span>
            </div>

            <div className="hero-amenity-pills">
              {HERO_PILLS.map(({ icon, label }) => (
                <span className="hero-pill" key={label}>
                  <span className="icon">
                    <i className={`fa-solid ${icon}`}></i>
                  </span>
                  <span>{label}</span>
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <a
                href="#rooms"
                className="btn-suite-filter"
                style={{ background: 'rgba(255,255,255,0.12)', color: '#FFF', borderColor: 'rgba(212,175,55,0.4)' }}
              >
                <i className="fa-solid fa-door-open"></i> View The Rooms
              </a>
              <a
                href="#booking"
                className="btn-suite-reserve"
                style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C59B27 100%)', color: '#071324' }}
              >
                <i className="fa-solid fa-calendar-check"></i> Book on WhatsApp
              </a>
            </div>
          </div>

          <HeroSlider />
        </div>
      </div>
    </section>
  );
}

type RoomCard = {
  key: Exclude<RoomKey, 'both'>;
  featured: boolean;
  cover: string;
  coverAlt: string;
  desc: string;
  specs: { icon: string; label: string }[];
  thumbs: { file: string; caption: string; title: string; src: string }[];
};

const ROOM_CARDS: RoomCard[] = [
  {
    key: 'room1',
    featured: false,
    cover: '/assets/images/bedroom_master.jpg',
    coverAlt: 'Room 1 Master Bedroom',
    desc: 'Cozy, restful, and peaceful private suite with two air-conditioned bedrooms, dedicated living room with comfortable seating and TV, and a 4-seater dining space.',
    specs: [
      { icon: 'fa-bed', label: '2 Bedrooms (Queen Beds)' },
      { icon: 'fa-couch', label: 'Private Living Room & TV' },
      { icon: 'fa-utensils', label: '4-Seater Dining Area' },
      { icon: 'fa-snowflake', label: 'Air Conditioned Rooms' },
      { icon: 'fa-wifi', label: 'Free High-Speed Wi-Fi' },
      { icon: 'fa-square-parking', label: 'Ample Paved Parking' },
    ],
    thumbs: [
      { file: 'bedroom_master.jpg', caption: 'Master Bed', title: 'Master Bedroom', src: '/assets/images/bedroom_master.jpg' },
      { file: 'bedroom_second.jpg', caption: 'Bedroom 2', title: 'Bedroom 2', src: '/assets/images/bedroom_second.jpg' },
      { file: 'living_room.jpg', caption: 'Living Room', title: 'Living Room', src: '/assets/images/living_room.jpg' },
      { file: 'dining_area.jpg', caption: 'Dining', title: 'Dining Area', src: '/assets/images/dining_area.jpg' },
      { file: 'exterior_villa.jpg', caption: 'Grounds', title: 'Property Grounds', src: '/assets/images/exterior_villa.jpg' },
    ],
  },
  {
    key: 'room2',
    featured: true,
    cover: '/assets/images/suite2/suite2_living_room_main.jpg',
    coverAlt: 'Room 2 Living Room',
    desc: 'Spacious, fully air-conditioned suite with Italian black marble floors, chandelier dining, private living room with TV wall and soundbar, walk-in rainfall shower, and two king bedrooms.',
    specs: [
      { icon: 'fa-bed', label: '2 Bedrooms (King Beds)' },
      { icon: 'fa-tv', label: 'In-Room Mounted TVs' },
      { icon: 'fa-utensils', label: '6-Seater Dining Area' },
      { icon: 'fa-shower', label: 'Rainfall Walk-In Shower' },
      { icon: 'fa-snowflake', label: 'Dedicated Refrigerator' },
      { icon: 'fa-shield-halved', label: 'Private & Air Conditioned' },
    ],
    thumbs: [
      { file: 'suite2_living_room_main.jpg', caption: 'Living Room', title: 'Living Room', src: '/assets/images/suite2/suite2_living_room_main.jpg' },
      { file: 'suite2_bedroom_master_king.jpg', caption: 'Master Bed', title: 'Master Bedroom', src: '/assets/images/suite2/suite2_bedroom_master_king.jpg' },
      { file: 'suite2_bedroom_deluxe_king.jpg', caption: 'Bedroom 2', title: 'Bedroom 2', src: '/assets/images/suite2/suite2_bedroom_deluxe_king.jpg' },
      { file: 'suite2_dining_main.jpg', caption: 'Dining', title: 'Dining Area', src: '/assets/images/suite2/suite2_dining_main.jpg' },
      { file: 'suite2_bathroom_shower.jpg', caption: 'Shower', title: 'Shower', src: '/assets/images/suite2/suite2_bathroom_shower.jpg' },
    ],
  },
];

const BOTH_ROOMS_PERKS = [
  { icon: 'fa-check', label: '4 Private Bedrooms' },
  { icon: 'fa-check', label: '2 Full Living Rooms' },
  { icon: 'fa-check', label: '2 Dining Areas' },
  { icon: 'fa-check', label: 'Ample Paved Parking' },
  { icon: 'fa-car-side', label: 'Car Rental Available' },
  { icon: 'fa-check', label: '24/7 Host Support' },
];

export function Rooms() {
  return (
    <section className="section suites-overview" id="rooms">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle-badge">
            <i className="fa-solid fa-bed"></i> Accommodations
          </div>
          <h2 className="section-title">Our Rooms</h2>
          <span className="cursive-accent">Feel at home, anywhere.</span>
          <p className="section-description">
            Prime Suite features two separate, fully furnished, air-conditioned private rooms in Anaji. Choose Room 1,
            Room 2, or reserve both together.
          </p>
        </div>

        <div className="suites-showcase-grid">
          {ROOM_CARDS.map((card) => {
            const name = card.key === 'room1' ? 'Room 1' : 'Room 2';
            const firstPhoto = galleryIndex(card.thumbs[0].file);
            return (
              <article
                key={card.key}
                className={`suite-feature-card${card.featured ? ' featured-suite' : ''}`}
                id={card.key === 'room1' ? 'suiteRoom1' : 'suiteRoom2'}
              >
                <div
                  className="suite-card-ribbon"
                  style={
                    card.featured
                      ? undefined
                      : {
                          background: 'linear-gradient(135deg, #10223A 0%, #1E3E62 100%)',
                          color: 'var(--color-gold-light)',
                          border: '1px solid var(--color-gold)',
                        }
                  }
                >
                  <i className="fa-solid fa-bed"></i> {name}
                </div>

                <div className="suite-card-cover">
                  <img
                    src={card.cover}
                    alt={card.coverAlt}
                    className={`suite-cover-img suite-cover-${card.key}`}
                    loading="lazy"
                  />
                  <div className="suite-card-cover-overlay">
                    <span className={`suite-badge-pill ${card.key === 'room1' ? 'suite1' : 'suite2'}`}>
                      <i className="fa-solid fa-door-open"></i> {name}
                    </span>
                    <h3 className="suite-card-cover-title">{name}</h3>
                  </div>
                </div>

                <div className="suite-card-body">
                  <div className="suite-card-subtitle">2 Bedrooms • Living Room • Dining Area</div>
                  <p className="suite-card-desc">{card.desc}</p>

                  <div className="suite-spec-grid">
                    {card.specs.map(({ icon, label }) => (
                      <div className="suite-spec-item" key={label}>
                        <i className={`fa-solid ${icon}`}></i>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="suite-gallery-preview">
                    <span className="suite-gallery-label">
                      <i className="fa-solid fa-images"></i> Click to preview photos:
                    </span>
                    <div className="suite-thumb-row">
                      {card.thumbs.map((thumb) => (
                        <GalleryButton
                          key={thumb.file}
                          index={galleryIndex(thumb.file)}
                          className="suite-thumb-btn"
                          title={`View ${thumb.title} in Lightbox`}
                        >
                          <img src={thumb.src} alt={`${thumb.title} thumbnail`} />
                          <span className="thumb-caption">{thumb.caption}</span>
                        </GalleryButton>
                      ))}
                    </div>
                  </div>

                  <div className="suite-card-actions">
                    <GalleryButton index={firstPhoto} className="btn-suite-filter">
                      <i className="fa-solid fa-images"></i> View Photos
                    </GalleryButton>
                    <BookButton room={card.key} className="btn-suite-reserve">
                      <i className="fa-brands fa-whatsapp"></i> Book {name}
                    </BookButton>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="villa-full-banner">
          <div className="villa-full-inner">
            <div className="villa-full-content">
              <span className="villa-full-tag">
                <i className="fa-solid fa-house-chimney"></i> Both Rooms
              </span>
              <h3>Need More Space? Reserve Both Rooms Together</h3>
              <p>
                Enjoy the entire 4-bedroom property with 2 separate living rooms, 2 dining areas, secure perimeter
                fencing, and ample paved on-site parking in {LOCATION}. Perfect for families, groups, and business trips.
              </p>
              <div className="villa-full-perks">
                {BOTH_ROOMS_PERKS.map(({ icon, label }) => (
                  <span key={label}>
                    <i className={`fa-solid ${icon}`}></i> {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="villa-full-action">
              <BookButton room="both" className="btn-villa-book">
                <i className="fa-brands fa-whatsapp"></i> Reserve Both Rooms
              </BookButton>
              <a href={`tel:+${PHONE_1}`} className="btn-villa-call">
                <i className="fa-solid fa-phone"></i> Call 0547238675
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const AMENITIES = [
  { icon: 'fa-car-side', name: 'Car Rental Available', detail: 'Convenient private car rental service available on-demand for easy trips around Takoradi, Anaji, and beyond.' },
  { icon: 'fa-bed', name: 'Cozy Bedrooms', detail: 'Comfortable, quiet, and elegantly prepared bedrooms for restful relaxation.' },
  { icon: 'fa-couch', name: 'Spacious Living Areas', detail: 'Generous and stylish living space designed for comfort and leisure.' },
  { icon: 'fa-wifi', name: 'Free Wi-Fi', detail: 'Reliable wireless internet access throughout the property.' },
  { icon: 'fa-shield-halved', name: 'Secure & Private', detail: 'A safe, gated, and private environment ensuring complete peace of mind.' },
  { icon: 'fa-broom', name: 'Clean & Comfortable', detail: 'Pristine cleanliness and utmost comfort maintained across every room.' },
  { icon: 'fa-snowflake', name: 'Air Conditioned Rooms', detail: 'Cool and comfortable air conditioning in the rooms.' },
  { icon: 'fa-square-parking', name: 'Ample Parking', detail: 'Spacious and secure parking space available on premises.' },
  { icon: 'fa-headset', name: '24/7 Support', detail: 'Round-the-clock host assistance whenever you need it.' },
];

export function Amenities() {
  return (
    <section className="section amenities-section" id="amenities">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle-badge">
            <i className="fa-solid fa-check"></i> Amenities
          </div>
          <h2 className="section-title">Amenities Included</h2>
          <span className="cursive-accent" style={{ color: 'var(--color-gold)' }}>
            Your Comfort Our Priority
          </span>
          <p className="section-description">
            Enjoy a cozy and elegant stay in a serene environment with all the amenities and comforts you need.
          </p>
        </div>

        <div className="amenities-grid">
          {AMENITIES.map(({ icon, name, detail }) => (
            <div className="amenity-card" key={name}>
              <div className="amenity-icon-box">
                <i className={`fa-solid ${icon}`}></i>
              </div>
              <h3 className="amenity-name">{name}</h3>
              <p className="amenity-detail">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Location() {
  const strongText = { fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-navy-deep)' } as const;
  return (
    <section className="section location-section" id="location">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle-badge">
            <i className="fa-solid fa-location-dot"></i> Property Location
          </div>
          <h2 className="section-title">Location &amp; Contacts</h2>
          <span className="cursive-accent">Feel at home, anywhere.</span>
        </div>

        <div className="location-grid">
          <div className="location-info-card">
            <div className="location-address-box">
              <div className="location-icon-circle">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h4>LOCATION:</h4>
                <p className="property-location-text" style={strongText}>
                  {LOCATION}
                </p>
              </div>
            </div>

            <div
              className="location-address-box"
              style={{ background: 'rgba(11, 25, 44, 0.05)', borderColor: 'rgba(11, 25, 44, 0.15)' }}
            >
              <div className="location-icon-circle">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h4>CONTACTS:</h4>
                <p style={strongText}>
                  <a href={`tel:+${PHONE_1}`} style={{ color: 'inherit' }}>
                    0547238675
                  </a>{' '}
                  /{' '}
                  <a href={`tel:+${PHONE_2}`} style={{ color: 'inherit' }}>
                    0550638015
                  </a>
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-open-maps"
                style={{ background: 'var(--color-whatsapp)', color: '#FFFFFF' }}
              >
                <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
              </a>
              <a href={`tel:+${PHONE_1}`} className="btn-open-maps">
                <i className="fa-solid fa-phone"></i> Call Host (0547238675)
              </a>
            </div>
          </div>

          <div className="map-visual-card">
            <img src="/assets/images/exterior_villa.jpg" alt={`Prime Suite ${LOCATION}`} className="map-bg-image" />
            <div className="map-overlay-content">
              <div className="map-pin-pulse">
                <div className="map-pin-inner">
                  <i className="fa-solid fa-house"></i>
                </div>
              </div>
              <h3>PRIME SUITE AIR BnB</h3>
              <p className="property-location-text" style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '1.1rem' }}>
                {LOCATION}
              </p>
              <p>CONTACTS: 0547238675 / 0550638015</p>
              <a
                href="https://maps.google.com/?q=Anaji+behind+Nhyira+hotel"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-open-maps"
                style={{ marginTop: '1rem' }}
              >
                <i className="fa-solid fa-map-location-dot"></i> View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Flyer() {
  const flyerIndex = galleryIndex('prime_suite_flyer.png');
  return (
    <section className="flyer-section" id="flyer-section">
      <div className="container">
        <div className="flyer-card-wrapper">
          <div className="flyer-text-col">
            <div className="section-subtitle-badge" style={{ color: 'var(--color-gold)' }}>
              <i className="fa-solid fa-certificate"></i> Official Flyer
            </div>
            <h3>Prime Suite Air BnB Rentals</h3>
            <p>The exact pictures and verified information from our official promotional flyer.</p>
            <div className="flyer-action-row">
              <GalleryButton index={flyerIndex} className="btn-view-flyer">
                <i className="fa-solid fa-eye"></i> View Full Flyer
              </GalleryButton>
              <a
                href="/assets/images/prime_suite_flyer.png"
                download="Prime_Suite_Flyer.png"
                className="btn-download-flyer"
              >
                <i className="fa-solid fa-download"></i> Download Flyer
              </a>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <GalleryImage
              index={flyerIndex}
              src="/assets/images/prime_suite_flyer.png"
              alt="Official Prime Suite Flyer"
              className="flyer-img-preview"
              title="Click to view flyer"
            />
            <small style={{ color: '#94A3B8', display: 'block', marginTop: '0.75rem', fontSize: '0.75rem' }}>
              Click to view flyer
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <>
      <div className="slogan-banner">
        <div className="container">
          <div className="slogan-banner-text">Prime Comfort, Prime Location, Prime Experience.</div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid" style={{ gridTemplateColumns: '1.5fr 1fr 1fr' }}>
            <div className="footer-brand-col">
              <div className="footer-logo">
                <img src="/assets/images/logo_white.svg" alt="Prime Suite Logo" />
                <div>
                  <div className="footer-brand-title">PRIME SUITE</div>
                  <div className="footer-brand-sub">AIR BnB RENTALS</div>
                </div>
              </div>
              <p className="footer-desc">
                Your Comfort Our Priority. Feel at home, anywhere. Enjoy a cozy and elegant stay in a serene
                environment with all the amenities you need.
              </p>
              <div style={{ fontFamily: 'var(--font-script)', fontSize: '1.6rem', color: 'var(--color-gold)' }}>
                &quot;Prime Comfort, Prime Location, Prime Experience.&quot;
              </div>
            </div>

            <div className="footer-col">
              <h4>Navigation</h4>
              <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#rooms">The Rooms</a>
                <a href="#amenities">Amenities</a>
                <a href="#booking">Book Now</a>
                <a href="#location">Location &amp; Contacts</a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Contacts &amp; Location</h4>
              <div className="footer-contact-items">
                <div className="footer-contact-row">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>
                    <strong>LOCATION:</strong> <span className="property-location-text">{LOCATION}</span>
                  </span>
                </div>
                <div className="footer-contact-row">
                  <i className="fa-solid fa-phone"></i>
                  <div>
                    <strong>CONTACTS:</strong>
                    <br />
                    <a href={`tel:+${PHONE_1}`}>0547238675</a> / <a href={`tel:+${PHONE_2}`}>0550638015</a>
                  </div>
                </div>
                <div className="footer-contact-row">
                  <i className="fa-brands fa-whatsapp"></i>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    WhatsApp: 0547238675 / 0550638015
                  </a>
                </div>
                <div className="footer-contact-row">
                  <i className="fa-solid fa-headset"></i>
                  <span>24/7 Host Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              © 2026 <strong>Prime Suite – Air BnB Rentals</strong>. Location:{' '}
              <span className="property-location-text">{LOCATION}</span>.
            </div>
            <div>
              <span>Contacts: 0547238675 / 0550638015</span>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Direct WhatsApp Chat with Prime Suite Host"
        title="Chat with Host on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}
