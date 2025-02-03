import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  title: string;
  credit: string;
};

function ImageWithDescription({ src, alt, title, credit }: ImageProps) {
  return (
    <div className="relative flex">
      <Image
        src={src}
        alt={alt}
        layout="intrinsic"
        width={500}
        height={300}
        objectFit="cover"
      />
      <div className="absolute inline h-full opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end bg-black/50 p-4">
        <div className="text-center text-gray-300">
          {title}
          <br />
          <br />
          {credit}
        </div>
      </div>
    </div>
  );
}

export default ImageWithDescription;
