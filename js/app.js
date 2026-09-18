/**
 * PRIME SUITE - AIR BnB RENTALS
 * Main Application Script
 * Features: Mobile Nav, Lightbox Gallery, Category Filtering, Sticky Nav
 * LOCATION: Anaji behind Nhyira hotel
 * CONTACTS: 0550638015 / 0547238675
 */

(function () {
  'use strict';

  // Gallery dataset matching exact flyer labels and photos
  const GALLERY_DATA = [
    {
      id: 'exterior',
      category: 'exterior',
      title: 'Prime Suite Exterior',
      subtitle: 'Anaji behind Nhyira hotel',
      src: 'assets/images/exterior_villa.jpg',
      features: ['Serene Environment', 'Ample Parking', 'Secure & Private', '24/7 Support']
    },
    {
      id: 'bedroom_master',
      category: 'bedrooms',
      title: 'Bedroom',
      subtitle: 'Cozy, Clean & Comfortable',
      src: 'assets/images/bedroom_master.jpg',
      features: ['Cozy Bedroom', 'Air Conditioned', 'Free Wi-Fi', 'Clean & Comfortable']
    },
    {
      id: 'living_room',
      category: 'living',
      title: 'Living Room',
      subtitle: 'Spacious Living Area',
      src: 'assets/images/living_room.jpg',
      features: ['Spacious Living Area', 'Air Conditioned', 'Free Wi-Fi', 'Clean & Comfortable']
    },
    {
      id: 'bedroom_second',
      category: 'bedrooms',
      title: 'Another Bedroom',
      subtitle: 'Cozy & Serene',
      src: 'assets/images/bedroom_second.jpg',
      features: ['Cozy Bedroom', 'Air Conditioned', 'Secure & Private', 'Clean & Comfortable']
    },
    {
      id: 'dining_area',
      category: 'living',
      title: 'Dining Area',
      subtitle: 'Clean & Comfortable Dining',
      src: 'assets/images/dining_area.jpg',
      features: ['Dining Table & Chairs', 'Clean & Comfortable', 'Free Wi-Fi']
    },
    {
      id: 'flyer',
      category: 'flyer',
      title: 'Official Prime Suite Flyer',
      subtitle: 'Location: Anaji behind Nhyira hotel | Contacts: 0550638015 / 0547238675',
      src: 'assets/images/prime_suite_flyer.png',
      features: ['YOUR COMFORT OUR PRIORITY', 'Feel at home, anywhere.', 'Contacts: 0550638015 / 0547238675']
    }
  ];

  let currentLightboxIndex = 0;

  // DOM Elements
  const header = document.getElementById('mainHeader');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  // Sticky Header on Scroll
  function handleScroll() {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }

  // Mobile Menu Toggle
  function initMobileMenu() {
    if (!hamburgerBtn || !navMenu) return;

    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburgerBtn.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburgerBtn.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburgerBtn.classList.remove('active');
      }
    });
  }

  // Official Flyer Modal Functionality
  function openFlyerModal() {
    if (lightboxImg) lightboxImg.src = 'assets/images/prime_suite_flyer.png';
    if (lightboxTitle) lightboxTitle.textContent = 'Official Prime Suite Flyer';
    if (lightboxDesc) lightboxDesc.textContent = 'Location: Anaji behind Nhyira hotel • Contacts: 0550638015 / 0547238675';

    if (lightboxModal) {
      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function initLightbox() {
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

    if (lightboxModal) {
      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) closeLightbox();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (!lightboxModal?.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // Filter Tabs for Spaces
  function initGalleryFilters() {
    const filterBtns = document.querySelectorAll('.space-tab-btn');
    const cards = document.querySelectorAll('.space-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        cards.forEach(card => {
          const cat = card.getAttribute('data-category');
          if (filter === 'all' || cat === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Smooth Active Nav Highlight on Scroll
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 120;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (link) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    });
  }

  function init() {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    initMobileMenu();
    initLightbox();
    initGalleryFilters();
    initScrollSpy();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.openFlyerModal = openFlyerModal;
})();
