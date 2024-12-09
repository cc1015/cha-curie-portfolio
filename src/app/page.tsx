export default function base() {
  return (
    <main className="flex items-center space-x-4 mx-8 sm:mx-16">
      {/* Image on the left */}
      <figure className="flex flex-col items-center sm:items-start">
        <img src='/PC260588.JPG' alt="personal photo" className="w-100 h-100 object-contain"
        />
        <figcaption className="mt-2 text-sm">
          halmoni appreciation:)
        </figcaption>
      </figure>
      <div>
        <p>Hi, I am Curie.</p>
        <br />
        <p>
          I am a student passionate about using software for social good and scientific research. My
          interests lie in computational modeling and software development in
          various applications of life sciences and healthcare. I am studying 
          computer science, biology, and math at Northeastern
          University. 
        </p>
        <br />
        <p>
          In my free time, I like to explore other passions of music,
          photography, and enjoying the outdoors.
        </p>
      </div>
    </main>
  );
}
