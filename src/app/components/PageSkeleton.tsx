import ImageWithDescription from "./ImageWithDescription";

type ImageProps = {
  src: string;
  alt: string;
  title: string;
  credit: string;
};

type PageSkeletonProps = {
  children: React.ReactNode;
  imageProps?: ImageProps;
  imageFirst?: boolean;
};

function PageSkeleton({
  children,
  imageProps,
  imageFirst = false,
}: PageSkeletonProps) {
  if (!imageProps) {
    return <div className="w-full">{children}</div>;
  }

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div
        className={`flex flex-col space-y-1 w-full md:w-1/2 ${
          imageFirst ? "order-1" : "order-2"
        }`}
      >
        {children}
      </div>
      <div
        className={`relative flex group h-1/2 ${
          imageFirst ? "order-2" : "order-1"
        }`}
      >
        <ImageWithDescription {...imageProps} />
      </div>
    </div>
  );
}

export default PageSkeleton;
