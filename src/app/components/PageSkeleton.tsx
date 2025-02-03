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
    <main className="flex sm:items-start h-screen">
      <div
        className={`flex flex-col space-y-1 w-1/2 overflow-y-auto ${
          imageFirst ? "order-1 sm:ml-16" : "order-2"
        }`}
      >
        {children}
      </div>

      <div
        className={`flex w-1/2 relative group ${
          imageFirst ? "order-2" : "order-1 sm:ml-16"
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
