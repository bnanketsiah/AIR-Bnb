export const LOCATION = 'Anaji behind Nhyira hotel';

export const PHONE_1 = '233547238675'; // 0547238675 (Primary)
export const PHONE_2 = '233550638015'; // 0550638015 (Secondary)

export type RoomKey = 'room1' | 'room2' | 'both';

export const ROOM_DETAILS: Record<RoomKey, { name: string; features: string; ideal: string }> = {
  room1: {
    name: 'Room 1',
    features: '2 Bedrooms, Living Room, Dining Area, Air Conditioning, Free Wi-Fi',
    ideal: '1 - 4 Guests',
  },
  room2: {
    name: 'Room 2',
    features: '2 Bedrooms with TVs, Living Room, Dining Area, Rain Shower, Refrigerator',
    ideal: '1 - 4 Guests',
  },
  both: {
    name: 'Both Rooms (Room 1 & Room 2)',
    features: 'Full Property (4 Bedrooms, 2 Living Rooms, 2 Dining Areas, Ample Parking)',
    ideal: '4 - 8+ Guests',
  },
};

export type GalleryItem = {
  src: string;
  title: string;
  desc: string;
  tag: string;
  room: 'room1' | 'room2' | 'shared';
};

const S2 = '/assets/images/suite2';
const IMG = '/assets/images';

export const GALLERY_ITEMS: GalleryItem[] = [
  { src: `${S2}/suite2_living_room_main.jpg`, title: 'Room 2 – Living Room', desc: 'Room 2 • Italian black marble floors, chandelier, and comfortable sectional sofa.', tag: 'Room 2', room: 'room2' },
  { src: `${S2}/suite2_bedroom_master_king.jpg`, title: 'Room 2 – Master Bedroom', desc: 'Room 2 • King-sized bed, acoustic wood paneling, in-room TV, and ambient lighting.', tag: 'Room 2', room: 'room2' },
  { src: `${S2}/suite2_bedroom_deluxe_king.jpg`, title: 'Room 2 – Bedroom 2', desc: 'Room 2 • Second bedroom with king bed, in-room TV, and wardrobe storage.', tag: 'Room 2', room: 'room2' },
  { src: `${S2}/suite2_living_tv_wall.jpg`, title: 'Room 2 – TV & Soundbar', desc: 'Room 2 • Entertainment center with soundbar audio and acoustic wood slats.', tag: 'Room 2', room: 'room2' },
  { src: `${S2}/suite2_dining_main.jpg`, title: 'Room 2 – Dining Area', desc: 'Room 2 • 6-person dining table under overhead chandelier lighting.', tag: 'Room 2', room: 'room2' },
  { src: `${S2}/suite2_bedroom_master_tv.jpg`, title: 'Room 2 – Master Bedroom TV', desc: 'Room 2 • Wall-mounted TV with acoustic wood backdrop.', tag: 'Room 2', room: 'room2' },
  { src: `${S2}/suite2_bedroom_deluxe_lounge.jpg`, title: 'Room 2 – Bedroom Armchair Lounge', desc: 'Room 2 • Quiet bedroom seating corner with soft natural light.', tag: 'Room 2', room: 'room2' },
  { src: `${S2}/suite2_bedroom_deluxe_tv.jpg`, title: 'Room 2 – Bedroom 2 TV', desc: 'Room 2 • Private in-room TV in the second bedroom.', tag: 'Room 2', room: 'room2' },
  { src: `${S2}/suite2_living_lounge.jpg`, title: 'Room 2 – Living Room Seating', desc: 'Room 2 • Sectional sofa seating and coffee table.', tag: 'Room 2', room: 'room2' },
  { src: `${S2}/suite2_dining_alt.jpg`, title: 'Room 2 – Dining Table & Chandelier', desc: 'Room 2 • Dining area view showing pendant chandelier lighting.', tag: 'Room 2', room: 'room2' },
  { src: `${S2}/suite2_bathroom_shower.jpg`, title: 'Room 2 – Bathroom Shower', desc: 'Room 2 • Walk-in rainfall shower with hot and cold water.', tag: 'Room 2', room: 'room2' },
  { src: `${S2}/suite2_bathroom_vanity.jpg`, title: 'Room 2 – Bathroom Vanity', desc: 'Room 2 • Basin vanity with lighted grooming mirror.', tag: 'Room 2', room: 'room2' },
  { src: `${S2}/suite2_foyer_fridge.jpg`, title: 'Room 2 – Refrigerator & Foyer', desc: 'Room 2 • Full double-door refrigerator for drinks and groceries.', tag: 'Room 2', room: 'room2' },
  { src: `${S2}/suite2_ironing_station.jpg`, title: 'Room 2 – Ironing Station & Wardrobe', desc: 'Room 2 • Steam iron, full ironing board, and wardrobe storage.', tag: 'Room 2', room: 'room2' },
  { src: `${IMG}/bedroom_master.jpg`, title: 'Room 1 – Master Bedroom', desc: 'Room 1 • Comfortable master bedroom with queen bed and air conditioning.', tag: 'Room 1', room: 'room1' },
  { src: `${IMG}/bedroom_second.jpg`, title: 'Room 1 – Bedroom 2', desc: 'Room 1 • Second bedroom with queen bed and air conditioning.', tag: 'Room 1', room: 'room1' },
  { src: `${IMG}/dining_area.jpg`, title: 'Room 1 – Dining Area', desc: 'Room 1 • Dining table and four chairs for meals or work.', tag: 'Room 1', room: 'room1' },
  { src: `${IMG}/living_room.jpg`, title: 'Room 1 – Living Room', desc: 'Room 1 • Private living room with comfortable couch seating and TV.', tag: 'Room 1', room: 'room1' },
  { src: `${IMG}/exterior_villa.jpg`, title: 'Property Grounds & Parking', desc: 'Prime Suite • Gated property with boundary lighting and ample paved parking in Anaji.', tag: 'Grounds', room: 'shared' },
  { src: `${IMG}/prime_suite_flyer.png`, title: 'Official Prime Suite Flyer', desc: 'Official promotional flyer with amenities, contacts 0547238675 / 0550638015, and location in Anaji.', tag: 'Flyer', room: 'shared' },
];

// Index lookup so components reference photos by file instead of magic numbers.
export const galleryIndex = (file: string) => GALLERY_ITEMS.findIndex((item) => item.src.endsWith(`/${file}`));
