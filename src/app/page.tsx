export default function base() {
  return (
    <main className="flex space-x-8 mx-8 sm:mx-16 h-screen">
      <div className="flex flex-col items-center items-start w-1/2 top-0 relative group inline-block">
        <img
          src="/bumblebee.jpg"
          alt="dali painting"
          loading="lazy"
          className="block h-5/6"
        />
        <div
          className="absolute h-5/6 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end bg-black/50 p-4">
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
          I am a student excited about how software can inform and shape our
          understanding of the world. My interests lie in computational modeling
          and software development applied to various applications of life
          sciences and healthcare. I am studying computer science, biology, and
          math at Northeastern University.
        </p>
        <br />
        <p className="text-justify">
          In my free time, I like to explore other passions of music,
          photography, and enjoying the outdoors.
        </p>
      </div>
    </main>
  );
}
