"use client";
import Image from 'next/image'

export default function Base() {
  const images = [
    "/DSC_0046.jpg",
    "/DSC_0047.jpg",
    "/DSC_0048.jpg",
    "/DSC_0323.jpg",
    "/CurieChaGraceBowersDSC_0229.jpg",
    "/DSC_0223.jpg",
    "/DSC_0352.jpg",
    "/DSC_0565.jpg",
    "/DSC_0650.jpg",
    "/DSC_0561.jpg",
    "/DSC_0782.jpg",
    "/DSC_0823.jpg",
  ];

  return (
    <main className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:mx-0">
      {images.map((src, index) => (
        <div key={index} className="w-full h-auto">
          <Image
            key={index}
            src={src}
            alt={`photo-${index + 1}`}
            className="object-contain"
            layout="intrinsic"
            width={500} 
            height={300}
          />
        </div>
      ))}
    </main>
  );
}
