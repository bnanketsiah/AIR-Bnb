'use client';

import type { ReactNode } from 'react';
import type { RoomKey } from '@/lib/data';
import { useSite } from './SiteProvider';

/** Link or button that selects a room in the booking form and scrolls to it. */
export default function BookButton({
  room,
  className,
  as = 'button',
  children,
}: {
  room: RoomKey;
  className?: string;
  as?: 'button' | 'a';
  children: ReactNode;
}) {
  const { bookRoom } = useSite();
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    bookRoom(room);
  };
  return as === 'a' ? (
    <a href="#booking" className={className} onClick={onClick}>
      {children}
    </a>
  ) : (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

/** Button that opens the photo lightbox at a given gallery index. */
export function GalleryButton({
  index,
  className,
  title,
  children,
}: {
  index: number;
  className?: string;
  title?: string;
  children: ReactNode;
}) {
  const { openGallery } = useSite();
  return (
    <button type="button" className={className} title={title} onClick={() => openGallery(index)}>
      {children}
    </button>
  );
}

/** Image that opens the photo lightbox when clicked. */
export function GalleryImage({ index, ...imgProps }: { index: number } & React.ImgHTMLAttributes<HTMLImageElement>) {
  const { openGallery } = useSite();
  return <img {...imgProps} onClick={() => openGallery(index)} style={{ cursor: 'pointer', ...imgProps.style }} />;
}
