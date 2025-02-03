import Link from "next/link";
import PageSkeleton from "../components/PageSkeleton";

const image = {
  src: "/the_image_disappears.jpg",
  alt: "Dali's The Image Disappears",
  title: "The Image Disappears, Dali",
  credit: "Credit: © 2014 Salvador Dalí, Fundació Gala-Salvador Dalí, Figueres",
};

export default function base() {
  return (
    <PageSkeleton imageProps={image} imageFirst={true}>
      <Link
        href="/words/turing"
        className="hover:text-yellow-400 underline"
      >
        turing
      </Link>
      <Link
        href="/words/cancer"
        className="hover:text-yellow-400 underline"
      >
        contagious cancer
      </Link>
      <Link
        href="/words/synesthesia"
        className="hover:text-yellow-400 underline"
      >
        synesthesia
      </Link>
      <br></br>
      <br></br>
      *[in the process of creating graphic visuals for these to break up the
      condensed words]
    </PageSkeleton>
  );
}
