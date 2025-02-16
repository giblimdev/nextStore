import React from 'react';
import Image from 'next/image';

type ItemDetailImageProps = {
  item: {
    name: string;
    mainImage: string;
  };
};

export default function ItemDetailImage({ item }: ItemDetailImageProps) {
  return (
    <div className='border-2'>
      <Image 
        src={item.mainImage}
        alt={item.name}
        width={340}
        height={340}
      />
    </div>
  );
}
/*
// Images et médias
  <p>mainImage: "/Capture d’écran 2025-02-12 094422.png",
  additionalImages: [
    "/Capture d’écran 2025-02-12 094422.png",
    "/Capture d’écran 2025-02-12 094422.png"
  ],</p>
*/
