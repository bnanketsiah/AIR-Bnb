/**
 * PRIME SUITE - AIR BnB RENTALS
 * Direct Reservation & WhatsApp Dispatcher
 * LOCATION: Anaji behind Nhyira hotel
 * CONTACTS: 0547238675 / 0550638015
 */

(function () {
  'use strict';

  const PHONE_1 = '233547238675'; // 0547238675 (Primary)
  const PHONE_2 = '233550638015'; // 0550638015 (Secondary)

  const ROOM_DETAILS = {
    room1: {
      name: 'Room 1',
      features: '2 Bedrooms, Living Room, Dining Area, Air Conditioning, Free Wi-Fi',
      ideal: '1 - 4 Guests'
    },
    room2: {
      name: 'Room 2',
      features: '2 Bedrooms with TVs, Living Room, Dining Area, Rain Shower, Refrigerator',
      ideal: '1 - 4 Guests'
    },
    both: {
      name: 'Both Rooms (Room 1 & Room 2)',
      features: 'Full Property (4 Bedrooms, 2 Living Rooms, 2 Dining Areas, Ample Parking)',
      ideal: '4 - 8+ Guests'
    }
  };

  // DOM Elements
  const roomSelect = document.getElementById('bookingRoom');
  const carRentalSelect = document.getElementById('bookingCarRental');
  const checkinInput = document.getElementById('bookingCheckin');
  const checkoutInput = document.getElementById('bookingCheckout');
  const guestsInput = document.getElementById('bookingGuests');
  const guestNameInput = document.getElementById('guestName');
  const guestPhoneInput = document.getElementById('guestPhone');
  const guestNotesInput = document.getElementById('guestNotes');

  // Summary Elements
  const summaryRoomEl = document.getElementById('summaryRoom');
  const summaryCarRentalEl = document.getElementById('summaryCarRental');
  const summaryFeaturesEl = document.getElementById('summaryFeatures');
  const summaryNightsEl = document.getElementById('summaryNights');

  // WhatsApp Buttons
  const btnWhatsapp1 = document.getElementById('btnWhatsappBook');
  const btnWhatsapp2 = document.getElementById('btnWhatsappBook2');

  function initDates() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dayAfter = new Date(today);
    dayAfter.setDate(today.getDate() + 3);

    const formatDate = (d) => d.toISOString().split('T')[0];

    const minDateStr = formatDate(today);
    const tomorrowStr = formatDate(tomorrow);
    const dayAfterStr = formatDate(dayAfter);

    if (checkinInput && checkoutInput) {
      checkinInput.min = minDateStr;
      checkinInput.value = tomorrowStr;
      checkoutInput.min = tomorrowStr;
      checkoutInput.value = dayAfterStr;
    }
  }

  function getNights() {
    if (!checkinInput || !checkoutInput || !checkinInput.value || !checkoutInput.value) {
      return 2;
    }
    const cin = new Date(checkinInput.value);
    const cout = new Date(checkoutInput.value);
    const diffTime = cout - cin;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  }

  function updateSummary() {
    const nights = getNights();
    if (summaryNightsEl) {
      summaryNightsEl.textContent = `${nights} night${nights > 1 ? 's' : ''}`;
    }

    const currentKey = roomSelect ? roomSelect.value : 'room1';
    const info = ROOM_DETAILS[currentKey] || ROOM_DETAILS.room1;

    if (summaryRoomEl) {
      summaryRoomEl.textContent = info.name;
    }
    if (summaryFeaturesEl) {
      summaryFeaturesEl.textContent = info.features;
    }

    const carVal = carRentalSelect ? carRentalSelect.value : 'daily';
    if (summaryCarRentalEl) {
      if (carVal === 'daily') {
        summaryCarRentalEl.textContent = 'Yes – Added to Stay';
        summaryCarRentalEl.style.color = '#10B981';
      } else if (carVal === 'inquiry') {
        summaryCarRentalEl.textContent = 'Inquire About Rates';
        summaryCarRentalEl.style.color = '#D4AF37';
      } else {
        summaryCarRentalEl.textContent = 'None (Room Only)';
        summaryCarRentalEl.style.color = '#64748B';
      }
    }

    const summaryLocationEl = document.getElementById('summaryLocation');
    if (summaryLocationEl) {
      summaryLocationEl.textContent = 'Anaji behind Nhyira hotel';
    }
  }

  function sendWhatsAppBooking(targetPhone) {
    const nights = getNights();
    const currentKey = roomSelect ? roomSelect.value : 'room1';
    const info = ROOM_DETAILS[currentKey] || ROOM_DETAILS.room1;

    const guestName = guestNameInput ? guestNameInput.value.trim() : '';
    const guestPhone = guestPhoneInput ? guestPhoneInput.value.trim() : '';
    const guests = guestsInput ? guestsInput.value : '2';
    const checkin = checkinInput ? checkinInput.value : '';
    const checkout = checkoutInput ? checkoutInput.value : '';
    const notes = guestNotesInput ? guestNotesInput.value.trim() : '';

    const carVal = carRentalSelect ? carRentalSelect.value : 'none';
    let carText = 'Room Only (No car)';
    if (carVal === 'daily') carText = 'Yes – Please Add Car Rental Service';
    else if (carVal === 'inquiry') carText = 'Interested in Car Rental (Please send rates & vehicles)';

    let message = `Hello Prime Suite, I would like to inquire about reserving:\n\n`;
    message += `*Accommodation:* ${info.name}\n`;
    message += `*Car Rental Service:* ${carText}\n`;
    if (checkin && checkout) {
      message += `*Dates:* ${checkin} to ${checkout} (${nights} night${nights > 1 ? 's' : ''})\n`;
    }
    message += `*Guests:* ${guests} Person${guests === '1' ? '' : 's'}\n`;

    if (guestName) {
      message += `*Full Name:* ${guestName}\n`;
    }
    if (guestPhone) {
      message += `*Contact Phone:* ${guestPhone}\n`;
    }
    if (notes) {
      message += `*Notes / Inquiries:* ${notes}\n`;
    }
    message += `*Location:* Anaji behind Nhyira hotel\n\n`;
    message += `Please confirm availability and booking details. Thank you!`;

    const phoneToSend = targetPhone || PHONE_1;
    const waUrl = `https://wa.me/${phoneToSend}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  }

  function selectRoomAndBook(roomKey) {
    if (roomSelect && ROOM_DETAILS[roomKey]) {
      roomSelect.value = roomKey;
      updateSummary();
    }
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function init() {
    initDates();

    [roomSelect, carRentalSelect, checkinInput, checkoutInput, guestsInput].forEach(el => {
      if (el) el.addEventListener('change', updateSummary);
    });

    if (btnWhatsapp1) {
      btnWhatsapp1.addEventListener('click', (e) => {
        e.preventDefault();
        sendWhatsAppBooking(PHONE_1);
      });
    }

    if (btnWhatsapp2) {
      btnWhatsapp2.addEventListener('click', (e) => {
        e.preventDefault();
        sendWhatsAppBooking(PHONE_2);
      });
    }

    document.querySelectorAll('[data-book-room]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const room = btn.getAttribute('data-book-room');
        selectRoomAndBook(room);
      });
    });



    updateSummary();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.selectRoomAndBook = selectRoomAndBook;
  window.PrimeBooking = {
    sendWhatsAppBooking,
    selectRoomAndBook
  };
})();
