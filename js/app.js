/**
 * PRIME SUITE - AIR BnB RENTALS
 * Main Application Script
 * Features: Mobile Nav, Sticky Header, Room Filtering, ScrollSpy, Flyer Modal
 * LOCATION: Anaji behind Nhyira hotel
 * CONTACTS: 0547238675 / 0550638015
 */

(function () {
  'use strict';

  // DOM Elements
  const header = document.getElementById('mainHeader');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const photoModal = document.getElementById('photoModal');
  const photoModalClose = document.getElementById('photoModalClose');
  const photoModalPrev = document.getElementById('photoModalPrev');
  const photoModalNext = document.getElementById('photoModalNext');
  const photoModalImg = document.getElementById('photoModalImg');
  const photoModalTitle = document.getElementById('photoModalTitle');
  const photoModalDesc = document.getElementById('photoModalDesc');
  const photoModalTag = document.getElementById('photoModalTag');
  const photoModalCounter = document.getElementById('photoModalCounter');
  const photoModalBookBtn = document.getElementById('photoModalBookBtn');

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

  // ==========================================================================
  // COMPREHENSIVE VERIFIED PHOTO GALLERY (20 CURATED LUXURY ASSETS)
  // ==========================================================================
  const GALLERY_ITEMS = [
    {
      src: 'assets/images/suite2/suite2_living_room_main.jpg',
      title: 'Room 2 – Living Room',
      desc: 'Room 2 • Italian black marble floors, chandelier, and comfortable sectional sofa.',
      tag: 'Room 2',
      room: 'room2',
      category: 'living'
    },
    {
      src: 'assets/images/suite2/suite2_bedroom_master_king.jpg',
      title: 'Room 2 – Master Bedroom',
      desc: 'Room 2 • King-sized bed, acoustic wood paneling, in-room TV, and ambient lighting.',
      tag: 'Room 2',
      room: 'room2',
      category: 'bedrooms'
    },
    {
      src: 'assets/images/suite2/suite2_bedroom_deluxe_king.jpg',
      title: 'Room 2 – Bedroom 2',
      desc: 'Room 2 • Second bedroom with king bed, in-room TV, and wardrobe storage.',
      tag: 'Room 2',
      room: 'room2',
      category: 'bedrooms'
    },
    {
      src: 'assets/images/suite2/suite2_living_tv_wall.jpg',
      title: 'Room 2 – TV & Soundbar',
      desc: 'Room 2 • Entertainment center with soundbar audio and acoustic wood slats.',
      tag: 'Room 2',
      room: 'room2',
      category: 'living'
    },
    {
      src: 'assets/images/suite2/suite2_dining_main.jpg',
      title: 'Room 2 – Dining Area',
      desc: 'Room 2 • 6-person dining table under overhead chandelier lighting.',
      tag: 'Room 2',
      room: 'room2',
      category: 'living'
    },
    {
      src: 'assets/images/suite2/suite2_bedroom_master_tv.jpg',
      title: 'Room 2 – Master Bedroom TV',
      desc: 'Room 2 • Wall-mounted TV with acoustic wood backdrop.',
      tag: 'Room 2',
      room: 'room2',
      category: 'bedrooms'
    },
    {
      src: 'assets/images/suite2/suite2_bedroom_deluxe_lounge.jpg',
      title: 'Room 2 – Bedroom Armchair Lounge',
      desc: 'Room 2 • Quiet bedroom seating corner with soft natural light.',
      tag: 'Room 2',
      room: 'room2',
      category: 'bedrooms'
    },
    {
      src: 'assets/images/suite2/suite2_bedroom_deluxe_tv.jpg',
      title: 'Room 2 – Bedroom 2 TV',
      desc: 'Room 2 • Private in-room TV in the second bedroom.',
      tag: 'Room 2',
      room: 'room2',
      category: 'bedrooms'
    },
    {
      src: 'assets/images/suite2/suite2_living_lounge.jpg',
      title: 'Room 2 – Living Room Seating',
      desc: 'Room 2 • Sectional sofa seating and coffee table.',
      tag: 'Room 2',
      room: 'room2',
      category: 'living'
    },
    {
      src: 'assets/images/suite2/suite2_dining_alt.jpg',
      title: 'Room 2 – Dining Table & Chandelier',
      desc: 'Room 2 • Dining area view showing pendant chandelier lighting.',
      tag: 'Room 2',
      room: 'room2',
      category: 'living'
    },
    {
      src: 'assets/images/suite2/suite2_bathroom_shower.jpg',
      title: 'Room 2 – Bathroom Shower',
      desc: 'Room 2 • Walk-in rainfall shower with hot and cold water.',
      tag: 'Room 2',
      room: 'room2',
      category: 'amenities'
    },
    {
      src: 'assets/images/suite2/suite2_bathroom_vanity.jpg',
      title: 'Room 2 – Bathroom Vanity',
      desc: 'Room 2 • Basin vanity with lighted grooming mirror.',
      tag: 'Room 2',
      room: 'room2',
      category: 'amenities'
    },
    {
      src: 'assets/images/suite2/suite2_foyer_fridge.jpg',
      title: 'Room 2 – Refrigerator & Foyer',
      desc: 'Room 2 • Full double-door refrigerator for drinks and groceries.',
      tag: 'Room 2',
      room: 'room2',
      category: 'amenities'
    },
    {
      src: 'assets/images/suite2/suite2_ironing_station.jpg',
      title: 'Room 2 – Ironing Station & Wardrobe',
      desc: 'Room 2 • Steam iron, full ironing board, and wardrobe storage.',
      tag: 'Room 2',
      room: 'room2',
      category: 'amenities'
    },
    {
      src: 'assets/images/bedroom_master.jpg',
      title: 'Room 1 – Master Bedroom',
      desc: 'Room 1 • Comfortable master bedroom with queen bed and air conditioning.',
      tag: 'Room 1',
      room: 'room1',
      category: 'bedrooms'
    },
    {
      src: 'assets/images/bedroom_second.jpg',
      title: 'Room 1 – Bedroom 2',
      desc: 'Room 1 • Second bedroom with queen bed and air conditioning.',
      tag: 'Room 1',
      room: 'room1',
      category: 'bedrooms'
    },
    {
      src: 'assets/images/dining_area.jpg',
      title: 'Room 1 – Dining Area',
      desc: 'Room 1 • Dining table and four chairs for meals or work.',
      tag: 'Room 1',
      room: 'room1',
      category: 'living'
    },
    {
      src: 'assets/images/living_room.jpg',
      title: 'Room 1 – Living Room',
      desc: 'Room 1 • Private living room with comfortable couch seating and TV.',
      tag: 'Room 1',
      room: 'room1',
      category: 'living'
    },
    {
      src: 'assets/images/exterior_villa.jpg',
      title: 'Property Grounds & Parking',
      desc: 'Prime Suite • Gated property with boundary lighting and ample paved parking in Anaji.',
      tag: 'Grounds',
      room: 'shared',
      category: 'amenities'
    },
    {
      src: 'assets/images/prime_suite_flyer.png',
      title: 'Official Prime Suite Flyer',
      desc: 'Official promotional flyer with amenities, contacts 0547238675 / 0550638015, and location in Anaji.',
      tag: 'Flyer',
      room: 'shared',
      category: 'amenities'
    }
  ];

  let currentGalleryIndex = 0;

  // Open Lightbox at specific index
  function openGalleryLightbox(index) {
    if (!photoModal || !photoModalImg) return;
    const total = GALLERY_ITEMS.length;
    currentGalleryIndex = (index + total) % total;
    const item = GALLERY_ITEMS[currentGalleryIndex];

    photoModalImg.src = item.src;
    photoModalImg.alt = item.title;
    if (photoModalTitle) photoModalTitle.textContent = item.title;
    if (photoModalDesc) photoModalDesc.textContent = item.desc;
    if (photoModalTag) photoModalTag.textContent = item.tag;
    if (photoModalCounter) photoModalCounter.textContent = `${currentGalleryIndex + 1} / ${total}`;

    photoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function nextGalleryPhoto() {
    openGalleryLightbox(currentGalleryIndex + 1);
  }

  function prevGalleryPhoto() {
    openGalleryLightbox(currentGalleryIndex - 1);
  }

  function closePhotoModal() {
    if (photoModal) {
      photoModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function openFlyerModal() {
    openGalleryLightbox(19);
  }

  function openCurrentHeroSlideLightbox() {
    if (currentSlideIndex === 0) {
      openGalleryLightbox(0); // Living room
    } else if (currentSlideIndex === 1) {
      openGalleryLightbox(1); // Master bedroom
    } else if (currentSlideIndex === 2) {
      openGalleryLightbox(4); // Dining area
    } else if (currentSlideIndex === 3) {
      openGalleryLightbox(18); // Property grounds
    } else {
      openGalleryLightbox(0);
    }
  }

  function initPhotoModal() {
    if (photoModalClose) photoModalClose.addEventListener('click', closePhotoModal);
    if (photoModalPrev) photoModalPrev.addEventListener('click', prevGalleryPhoto);
    if (photoModalNext) photoModalNext.addEventListener('click', nextGalleryPhoto);

    if (photoModalBookBtn) {
      photoModalBookBtn.addEventListener('click', () => {
        closePhotoModal();
      });
    }

    if (photoModal) {
      photoModal.addEventListener('click', (e) => {
        if (e.target === photoModal) closePhotoModal();
      });
    }

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
      if (!photoModal?.classList.contains('active')) return;
      if (e.key === 'Escape') {
        closePhotoModal();
      } else if (e.key === 'ArrowRight') {
        nextGalleryPhoto();
      } else if (e.key === 'ArrowLeft') {
        prevGalleryPhoto();
      }
    });

    // Touch Swipe Navigation on Lightbox
    let modalTouchStartX = 0;
    let modalTouchEndX = 0;

    photoModal?.addEventListener('touchstart', (e) => {
      modalTouchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    photoModal?.addEventListener('touchend', (e) => {
      modalTouchEndX = e.changedTouches[0].screenX;
      const diffX = modalTouchEndX - modalTouchStartX;
      if (Math.abs(diffX) > 40) {
        if (diffX < 0) {
          nextGalleryPhoto();
        } else {
          prevGalleryPhoto();
        }
      }
    }, { passive: true });
  }

  // Filter Tabs for Gallery
  function filterRooms(filter) {
    const filterBtns = document.querySelectorAll('.space-tab-btn');
    const cards = document.querySelectorAll('.space-card');

    filterBtns.forEach(btn => {
      if (btn.getAttribute('data-filter') === filter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    cards.forEach(card => {
      const room = card.getAttribute('data-room');
      const cat = card.getAttribute('data-category');
      if (filter === 'all' || room === filter || cat === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function initRoomFilters() {
    const filterBtns = document.querySelectorAll('.space-tab-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        filterRooms(filter);
      });
    });
  }

  // ==========================================================================
  // HERO SHOWCASE SLIDESHOW (AUTOPLAY, TOUCH SWIPE, PAUSE ON HOVER, DOTS)
  // ==========================================================================
  let currentSlideIndex = 0;
  let slideTimer = null;
  let isSlidePaused = false;
  let slides = [];
  let dots = [];

  function goToSlide(index) {
    if (!slides.length) return;
    const total = slides.length;
    const nextIndex = (index + total) % total;

    slides[currentSlideIndex]?.classList.remove('active');
    dots[currentSlideIndex]?.classList.remove('active');

    currentSlideIndex = nextIndex;

    slides[currentSlideIndex]?.classList.add('active');
    dots[currentSlideIndex]?.classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlideIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentSlideIndex - 1);
  }

  function startSlideTimer() {
    stopSlideTimer();
    if (!isSlidePaused) {
      slideTimer = setInterval(nextSlide, 4500);
    }
  }

  function stopSlideTimer() {
    if (slideTimer) {
      clearInterval(slideTimer);
      slideTimer = null;
    }
  }

  function initHeroSlider() {
    const sliderWrap = document.getElementById('heroSlider');
    const dotsContainer = document.getElementById('sliderDots');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');
    const pauseBtn = document.getElementById('sliderPauseBtn');

    slides = Array.from(document.querySelectorAll('.hero-slide'));
    if (!sliderWrap || !slides.length) return;

    // Build Dots
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => {
          goToSlide(i);
          startSlideTimer();
        });
        dotsContainer.appendChild(dot);
      });
      dots = Array.from(dotsContainer.querySelectorAll('.slider-dot'));
    }

    // Arrows
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        startSlideTimer();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        startSlideTimer();
      });
    }

    // Pause / Play Toggle Button
    if (pauseBtn) {
      pauseBtn.addEventListener('click', () => {
        isSlidePaused = !isSlidePaused;
        const icon = pauseBtn.querySelector('i');
        if (isSlidePaused) {
          stopSlideTimer();
          pauseBtn.setAttribute('aria-label', 'Resume slideshow');
          if (icon) icon.className = 'fa-solid fa-play';
        } else {
          startSlideTimer();
          pauseBtn.setAttribute('aria-label', 'Pause slideshow');
          if (icon) icon.className = 'fa-solid fa-pause';
        }
      });
    }

    // Pause on Hover
    sliderWrap.addEventListener('mouseenter', () => {
      if (!isSlidePaused) stopSlideTimer();
    });

    sliderWrap.addEventListener('mouseleave', () => {
      if (!isSlidePaused) startSlideTimer();
    });

    // Touch Swipe
    let touchStartX = 0;
    let touchEndX = 0;

    sliderWrap.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderWrap.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diffX = touchEndX - touchStartX;
      if (Math.abs(diffX) > 40) {
        if (diffX < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        startSlideTimer();
      }
    }, { passive: true });

    // Keyboard Arrow navigation when hovering slider
    sliderWrap.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        startSlideTimer();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        startSlideTimer();
      }
    });

    // Start Autoplay
    startSlideTimer();
  }

  // Jump to specific slide and scroll to hero
  function jumpToHeroSlide(index) {
    goToSlide(index);
    startSlideTimer();
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // ScrollSpy for Nav Links
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
    try {
      localStorage.removeItem('prime_suite_location');
      localStorage.removeItem('prime_suite_coords');
    } catch (e) {}

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    initMobileMenu();
    initPhotoModal();
    initHeroSlider();
    initRoomFilters();
    initScrollSpy();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.openGalleryLightbox = openGalleryLightbox;
  window.nextGalleryPhoto = nextGalleryPhoto;
  window.prevGalleryPhoto = prevGalleryPhoto;
  window.closePhotoModal = closePhotoModal;
  window.openPhotoLightbox = openGalleryLightbox;
  window.openFlyerModal = openFlyerModal;
  window.openCurrentHeroSlideLightbox = openCurrentHeroSlideLightbox;
  window.filterRooms = filterRooms;
  window.jumpToHeroSlide = jumpToHeroSlide;
})();
