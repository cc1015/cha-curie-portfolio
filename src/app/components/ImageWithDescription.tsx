import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  title: string;
  credit: string;
};

function ImageWithDescription({ src, alt, title, credit }: ImageProps) {
  return (
    <div className="image-container relative flex">
      <Image
        src={src}
        alt={alt}
        layout="intrinsic"
        width={450}
        height={450}
      />
      <div className="overlay absolute h-full w-full opacity-0 transition-opacity bg-black/50 flex flex-col justify-end hover:opacity-100">
        <div className="text-center text-gray-300 mb-4 mx-2">
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
