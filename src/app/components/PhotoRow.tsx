import Image from "next/image";

type rowProps = {
  images: string[];
  desc: string;
};

const PhotoRow = ({ images, desc }: rowProps) => {
  return (
    <div>
      <h4 className="text-xs sm:text-base">{desc}</h4>
      <div className="flex grid-cols-3 gap-2 mb-2">
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
      </div>
    </div>
  );
};

export default PhotoRow;
