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
    <main className="md:flex sm:flex-col lg:flex-row sm:items-start gap-8">
      <div
        className={`flex flex-col space-y-1 w-1/2 overflow-y-auto ${
          imageFirst ? "order-1" : "order-2"
        }`}
      >
        {children}
      </div>

      <div
        className={`flex w-1/2 relative group ${
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
