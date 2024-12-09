export default function base() {
  return (
    <main className="flex items-center space-x-4 mx-8 sm:mx-16">
      <figure className="flex flex-col items-center sm:items-start">
        <img src='/bumblebee.jpg' alt="personal photo" className="w-100 h-100 object-contain"
        />
        <figcaption className="mt-2 text-sm italic ">
          Dream Caused by the Flight of a Bee Around a Pomegranate a Second Before Awakening, Dali
          <br />
          <br />
          Credit: © 2009 Salvador Dalí, Gala-Salvador Dalí Foundation / Artists Rights Society (ARS), New York, Courtesy of Art Resource, NY/Photo by Erich Lessing
        </figcaption>
      </figure>
      <div>
        <p className="text-justify">Hi, my name is Curie.</p>
        <br />
        <p className="text-justify">
          I am a student passionate about using software for social good and scientific research. My
          interests lie in computational modeling and software development in
          various applications of life sciences and healthcare. I am studying 
          computer science, biology, and math at Northeastern
          University. 
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
