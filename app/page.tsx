import BookingSection from '@/components/BookingSection';
import Header from '@/components/Header';
import { Amenities, Flyer, Footer, Hero, Location, Rooms, TopBar } from '@/components/Sections';
import SiteProvider from '@/components/SiteProvider';

export default function Home() {
  return (
    <SiteProvider>
      <TopBar />
      <Header />
      <Hero />
      <Rooms />
      <Amenities />
      <BookingSection />
      <Location />
      <Flyer />
      <Footer />
    </SiteProvider>
  );
}
