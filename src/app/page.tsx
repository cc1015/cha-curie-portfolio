import Image from 'next/image'

export default function base() {
  return (
    <main className="flex space-x-8 mx-8 sm:mx-16 h-screen">
      <div className="flex flex-col items-center items-start w-1/2 h-5/6 top-0 relative group inline-block">
        <Image
          src="/bumblebee.jpg"
          alt="dali painting"
          className="block"
          layout="fill"
        />
        <div
          className="absolute h-full opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end bg-black/50 p-4">
          <div className="text-center text-gray-300">
            Dream Caused by the Flight of a Bee Around a Pomegranate a Second
            Before Awakening, Dali
            <br />
            <br />
            Credit: © 2009 Salvador Dalí, Gala-Salvador Dalí Foundation /
            Artists Rights Society (ARS), New York, Courtesy of Art Resource,
            NY/Photo by Erich Lessing
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <p className="text-justify">Hi, my name is Curie.</p>
        <br />
        <p className="text-justify">
          I am a student excited about how software can help us. 
          <br />
          <br />
          My interests lie in computational modeling
          and software development for various applications of life
          sciences, healthcare, and natural language. Through these passions, I hope
          to contribute to scientific and social progress.
          I am studying computer science, biology, and
          math at Northeastern University. 
          <br />
          <br />
          </p>
          <p>Lately, I have been digging into machine learning capabilities for drug discovery.
        </p>
      </div>
    </main>
  );
}
