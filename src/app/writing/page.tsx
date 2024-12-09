import Link from "next/link";

export default function base() {
  return (
      <main className="flex flex-col space-y-2 items-start mx-8 sm:mx-16">
        <Link href="/writing/turing" className="hover:text-yellow-300">
          Turing
        </Link>
        <Link href="/writing/cancer" className="hover:text-yellow-300">
          Contagious Cancer
        </Link>
        <Link href="/writing/synesthesia" className="hover:text-yellow-300">
          Synesthesia
        </Link>
        <br></br>
        <br></br>
        *[in the process of creating graphic visuals for these to break up the condensed words]
      </main>
  );
}
