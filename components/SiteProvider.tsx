'use client';

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { RoomKey } from '@/lib/data';
import PhotoLightbox from './PhotoLightbox';

type SiteContextValue = {
  room: RoomKey;
  setRoom: (room: RoomKey) => void;
  /** Select a room in the booking form and scroll to it. */
  bookRoom: (room: RoomKey) => void;
  openGallery: (index: number) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSite must be used inside <SiteProvider>');
  return ctx;
}

export default function SiteProvider({ children }: { children: ReactNode }) {
  const [room, setRoom] = useState<RoomKey>('room1');
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  const bookRoom = useCallback((key: RoomKey) => {
    setRoom(key);
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const value = useMemo(
    () => ({ room, setRoom, bookRoom, openGallery: setGalleryIndex }),
    [room, bookRoom],
  );

  return (
    <SiteContext.Provider value={value}>
      {children}
      <PhotoLightbox index={galleryIndex} onChange={setGalleryIndex} onClose={() => setGalleryIndex(null)} />
    </SiteContext.Provider>
  );
}
