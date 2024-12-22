import Link from "next/link";

export default function base() {
  return (
    <main className="flex sm:items-start h-screen">
      <div className="flex flex-col space-y-1 items-start mx-8 sm:mx-16 w-1/2 overflow-y-auto">
        <Link
          href="/writing/turing"
          className="hover:text-yellow-300 text-right"
        >
          Turing
        </Link>
        <Link
          href="/writing/cancer"
          className="hover:text-yellow-300 text-right"
        >
          Contagious Cancer
        </Link>
        <Link
          href="/writing/synesthesia"
          className="hover:text-yellow-300"
        >
          Synesthesia
        </Link>
        <br></br>
        <br></br>
        *[in the process of creating graphic visuals for these to break up the
        condensed words]
      </div>
      <figure className="flex flex-col sm:items-start w-1/2 sticky top-0">
        <img src='/the_image_disappears.jpg' alt="personal photo" className="w-100 h-100 object-contain"
        />
        <figcaption className="mt-2 text-sm italic ">
        The Image Disappears, Dali
          <br />
          <br />
          Credit: © 2014 Salvador Dalí, Fundació Gala-Salvador Dalí, Figueres
        </figcaption>
      </figure>
    </main>
  );
}
