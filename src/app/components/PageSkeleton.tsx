import ImageWithDescription from "./ImageWithDescription";

type ImageProps = {
  src: string;
  alt: string;
  title: string;
  credit: string;
};

type PageSkeletonProps = {
  children: React.ReactNode;
  imageProps: ImageProps;
  imageFirst?: boolean;
};

function PageSkeleton({ children, imageProps, imageFirst }: PageSkeletonProps) {
  return (
    <main className="gap-8 md:flex sm:max-sm:flex-col">
      <div
        className={`flex-col flex space-y-1 w-full md:w-1/2 ${
          imageFirst ? "order-1" : "order-2"
        }`}
      >
        {children}
      </div>

      <div
        className={`flex w-full md:w-1/2 relative group ${
          imageFirst ? "order-2" : "order-1"
        }`}
      >
        <ImageWithDescription
          src={imageProps.src}
          alt={imageProps.alt}
          title={imageProps.title}
          credit={imageProps.credit}
        ></ImageWithDescription>
      </div>
    </main>
  );
}

export default PageSkeleton;
