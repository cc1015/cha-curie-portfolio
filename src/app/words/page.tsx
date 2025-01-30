import Link from "next/link";
import Image from 'next/image'


export default function base() {
  return (
    <main className="flex sm:items-start h-screen">
      <div className="flex flex-col space-y-1 items-start mx-8 sm:mx-16 w-1/2 overflow-y-auto">
        <Link
          href="/writing/turing"
          className="hover:text-yellow-300 text-right underline"
        >
          turing
        </Link>
        <Link
          href="/writing/cancer"
          className="hover:text-yellow-300 text-right underline"
        >
          contagious cancer
        </Link>
        <Link href="/writing/synesthesia" className="hover:text-yellow-300 underline">
          synesthesia
        </Link>
        <br></br>
        <br></br>
        *[in the process of creating graphic visuals for these to break up the
        condensed words]
      </div>
      <div className="flex flex-col sm:items-start w-1/2 sticky top-0 relative group inline-block">
        <Image
          src="/the_image_disappears.jpg"
          alt="personal photo"
          className="object-contain w-2/3 h-100"
          layout="instrinsic"
          width={500} 
          height={300}
        />
        <div className="absolute h-full w-2/3 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end bg-black/50 p-4">
          <div className="text-center text-gray-300">
            The Image Disappears, Dali
            <br />
            <br />
            Credit: © 2014 Salvador Dalí, Fundació Gala-Salvador Dalí, Figueres
          </div>
        </div>
      </div>
    </main>
  );
}
