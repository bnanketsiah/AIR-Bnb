/**
 * PRIME SUITE - AIR BnB RENTALS
 * Direct Reservation & WhatsApp Dispatcher
 * LOCATION: Anaji behind Nhyira hotel
 * CONTACTS: 0550638015 / 0547238675
 */

(function () {
  'use strict';

  // Primary contacts from flyer & user request
  const PHONE_1 = '233550638015'; // 0550638015
  const PHONE_2 = '233547238675'; // 0547238675

  // DOM Elements
  const checkinInput = document.getElementById('bookingCheckin');
  const checkoutInput = document.getElementById('bookingCheckout');
  const guestsInput = document.getElementById('bookingGuests');
  const guestNameInput = document.getElementById('guestName');
  const guestPhoneInput = document.getElementById('guestPhone');
  const guestNotesInput = document.getElementById('guestNotes');
  const summaryNightsEl = document.getElementById('summaryNights');

  // WhatsApp Buttons
  const btnWhatsapp1 = document.getElementById('btnWhatsappBook');
  const btnWhatsapp2 = document.getElementById('btnWhatsappBook2');

  // Initialize Default Dates
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

  // Calculate Duration in Nights
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

  // Update Summary UI
  function updateSummary() {
    const nights = getNights();
    if (summaryNightsEl) {
      summaryNightsEl.textContent = `${nights} night${nights > 1 ? 's' : ''}`;
    }
  }

  // WhatsApp Reservation Sender
  function sendWhatsAppBooking(targetPhone) {
    const nights = getNights();
    const guestName = guestNameInput ? guestNameInput.value.trim() : '';
    const guestPhone = guestPhoneInput ? guestPhoneInput.value.trim() : '';
    const guests = guestsInput ? guestsInput.value : '2';
    const checkin = checkinInput ? checkinInput.value : '';
    const checkout = checkoutInput ? checkoutInput.value : '';
    const notes = guestNotesInput ? guestNotesInput.value.trim() : '';

    let message = 'Hello, I would like to inquire about booking Prime Suite';
    if (checkin && checkout) {
      message += ` for ${nights} night(s) from ${checkin} to ${checkout} (${guests} guest${guests === '1' ? '' : 's'})`;
    }
    message += '.';

    if (guestName) {
      message += ` My name is ${guestName}.`;
    }
    if (guestPhone) {
      message += ` Contact: ${guestPhone}.`;
    }
    if (notes) {
      message += ` Note: ${notes}`;
    }

    const phoneToSend = targetPhone || PHONE_1;
    const waUrl = `https://wa.me/${phoneToSend}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  }

  function init() {
    initDates();

    [checkinInput, checkoutInput, guestsInput].forEach(el => {
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

    updateSummary();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.PrimeBooking = {
    sendWhatsAppBooking
  };
})();
