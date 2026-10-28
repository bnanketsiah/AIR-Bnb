'use client';

import { useEffect, useState } from 'react';
import { LOCATION, PHONE_1, PHONE_2, ROOM_DETAILS, type RoomKey } from '@/lib/data';
import { useSite } from './SiteProvider';

type CarRental = 'none' | 'daily' | 'inquiry';

const CAR_SUMMARY: Record<CarRental, { text: string; color: string }> = {
  daily: { text: 'Yes – Added to Stay', color: '#10B981' },
  inquiry: { text: 'Inquire About Rates', color: '#D4AF37' },
  none: { text: 'None (Room Only)', color: '#64748B' },
};

const CAR_MESSAGE: Record<CarRental, string> = {
  daily: 'Yes – Please Add Car Rental Service',
  inquiry: 'Interested in Car Rental (Please send rates & vehicles)',
  none: 'Room Only (No car)',
};

const formatDate = (d: Date) => d.toISOString().split('T')[0];
const addDays = (d: Date, days: number) => {
  const copy = new Date(d);
  copy.setDate(d.getDate() + days);
  return copy;
};

function countNights(checkin: string, checkout: string) {
  if (!checkin || !checkout) return 2;
  const diffDays = Math.ceil((new Date(checkout).getTime() - new Date(checkin).getTime()) / 86_400_000);
  return diffDays > 0 ? diffDays : 1;
}

export default function BookingSection() {
  const { room, setRoom } = useSite();
  const [carRental, setCarRental] = useState<CarRental>('daily');
  const [minDate, setMinDate] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [guests, setGuests] = useState('2');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [notes, setNotes] = useState('');

  // Default dates are set on the client so they use the visitor's "today".
  useEffect(() => {
    const today = new Date();
    setMinDate(formatDate(today));
    setCheckin(formatDate(addDays(today, 1)));
    setCheckout(formatDate(addDays(today, 3)));
  }, []);

  const nights = countNights(checkin, checkout);
  const nightsLabel = `${nights} night${nights > 1 ? 's' : ''}`;
  const info = ROOM_DETAILS[room];
  const car = CAR_SUMMARY[carRental];

  const sendWhatsApp = (phone: string) => {
    let message = `Hello Prime Suite, I would like to inquire about reserving:\n\n`;
    message += `*Accommodation:* ${info.name}\n`;
    message += `*Car Rental Service:* ${CAR_MESSAGE[carRental]}\n`;
    if (checkin && checkout) message += `*Dates:* ${checkin} to ${checkout} (${nightsLabel})\n`;
    message += `*Guests:* ${guests} Person${guests === '1' ? '' : 's'}\n`;
    if (guestName.trim()) message += `*Full Name:* ${guestName.trim()}\n`;
    if (guestPhone.trim()) message += `*Contact Phone:* ${guestPhone.trim()}\n`;
    if (notes.trim()) message += `*Notes / Inquiries:* ${notes.trim()}\n`;
    message += `*Location:* ${LOCATION}\n\n`;
    message += `Please confirm availability and booking details. Thank you!`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="section booking-section" id="booking">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle-badge">
            <i className="fa-solid fa-calendar-check"></i> Reservations
          </div>
          <h2 className="section-title">Book Now</h2>
          <span className="cursive-accent">and experience comfort like never before!</span>
          <p className="section-description">
            Reserve your preferred room directly with the host on WhatsApp, or call our official contact numbers anytime.
          </p>
        </div>

        <div className="booking-box">
          <div className="booking-header-bar">
            <div className="booking-header-title">
              <h3>PRIME SUITE AIR BnB RENTALS</h3>
              <p>
                LOCATION: <span className="property-location-text">{LOCATION}</span> • CONTACTS: 0547238675 / 0550638015
              </p>
            </div>
          </div>

          <div className="booking-grid">
            {/* Left: Input Form */}
            <div className="booking-form-wrap">
              <div className="step-title">
                <span className="number">1</span> Select Room
              </div>
              <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="bookingRoom">Choose Room</label>
                  <select
                    id="bookingRoom"
                    className="form-select"
                    value={room}
                    onChange={(e) => setRoom(e.target.value as RoomKey)}
                  >
                    <option value="room1">Room 1</option>
                    <option value="room2">Room 2</option>
                    <option value="both">Both Rooms (Room 1 &amp; Room 2)</option>
                  </select>
                </div>
              </div>

              <div className="step-title">
                <span className="number">2</span> Car Rental Service
              </div>
              <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="bookingCarRental">
                    <i className="fa-solid fa-car-side" style={{ color: 'var(--color-gold)' }}></i> Add Car Rental
                    Service to your Stay?
                  </label>
                  <select
                    id="bookingCarRental"
                    className="form-select"
                    value={carRental}
                    onChange={(e) => setCarRental(e.target.value as CarRental)}
                  >
                    <option value="none">No, Room Only</option>
                    <option value="daily">Yes – Add Car Rental Service</option>
                    <option value="inquiry">Yes – Inquire About Rates &amp; Vehicle Options</option>
                  </select>
                  <small style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '0.35rem', display: 'block' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: '#10B981' }}></i> Air-conditioned private
                    vehicles available for daily city trips upon request.
                  </small>
                </div>
              </div>

              <div className="step-title">
                <span className="number">3</span> Reservation Dates
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="bookingCheckin">Check-in Date</label>
                  <input
                    type="date"
                    id="bookingCheckin"
                    className="form-input"
                    required
                    min={minDate}
                    value={checkin}
                    onChange={(e) => setCheckin(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="bookingCheckout">Check-out Date</label>
                  <input
                    type="date"
                    id="bookingCheckout"
                    className="form-input"
                    required
                    min={checkin || minDate}
                    value={checkout}
                    onChange={(e) => setCheckout(e.target.value)}
                  />
                </div>
              </div>

              <div className="step-title">
                <span className="number">4</span> Guest Information
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="guestName">Your Full Name</label>
                  <input
                    type="text"
                    id="guestName"
                    className="form-input"
                    placeholder="e.g. Samuel Mensah"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="guestPhone">Your Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    id="guestPhone"
                    className="form-input"
                    placeholder="e.g. 0547238675"
                    required
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="bookingGuests">Number of Guests</label>
                  <select
                    id="bookingGuests"
                    className="form-select"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5+">5+ Persons</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="guestNotes">Special Notes or Questions</label>
                  <input
                    type="text"
                    id="guestNotes"
                    className="form-input"
                    placeholder="Arrival time, inquiries, etc."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Right: Summary & Direct WhatsApp/Call CTAs */}
            <div className="booking-summary-wrap">
              <h4
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.3rem',
                  marginBottom: '1rem',
                  color: 'var(--color-navy-deep)',
                }}
              >
                Reservation Summary
              </h4>

              <div className="summary-card">
                <div className="summary-row">
                  <span>Selected:</span>
                  <strong>{info.name}</strong>
                </div>
                <div className="summary-row">
                  <span>Car Rental:</span>
                  <strong style={{ color: car.color, fontWeight: 700 }}>{car.text}</strong>
                </div>
                <div className="summary-row">
                  <span>Included:</span>
                  <strong style={{ fontSize: '0.8rem', textAlign: 'right', maxWidth: '60%' }}>{info.features}</strong>
                </div>
                <div className="summary-row">
                  <span>Duration:</span>
                  <strong>{nightsLabel}</strong>
                </div>
                <div className="summary-row">
                  <span>Location:</span>
                  <strong className="property-location-text">{LOCATION}</strong>
                </div>
                <div className="summary-row">
                  <span>Support:</span>
                  <strong>24/7 Available</strong>
                </div>
              </div>

              <button type="button" className="btn-whatsapp-reserve" onClick={() => sendWhatsApp(PHONE_1)}>
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.35rem' }}></i>
                <span>Send Reservation to WhatsApp</span>
              </button>

              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                <a href={`tel:+${PHONE_1}`} className="btn-call-direct" style={{ flex: 1 }}>
                  <i className="fa-solid fa-phone"></i> Call 0547238675
                </a>
                <a href={`tel:+${PHONE_2}`} className="btn-call-direct" style={{ flex: 1 }}>
                  <i className="fa-solid fa-phone"></i> Call 0550638015
                </a>
              </div>

              <div className="booking-guarantee">
                <i className="fa-solid fa-shield-halved" style={{ color: 'var(--color-gold)' }}></i>
                <span>Direct Host Contact • 24/7 Support • Fast Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
