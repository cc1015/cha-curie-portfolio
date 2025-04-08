import PageSkeleton from "./components/PageSkeleton";

const image = {
  src: "/railway.jpg",
  alt: "Dali's Ossification prématurée d'une gare",
  title: "Ossification prématurée d'une gare, Dali",
  credit:
    "Credit: © Salvador Dalí, Fundació Gala-Salvador Dalí, Figueres, 2007",
};

export default function Base() {
  return (
    <PageSkeleton imageProps={image} imageFirst={false}>
      <p>Hi, my name is Curie.</p>
      <br />
      <p>
        My interests lie in computational modeling and software development for
        various applications of life sciences, healthcare, and natural language.
        Through these passions, I hope to contribute to scientific and social
        progress. I am studying computer science, biology, and math at
        Northeastern University.
        <br />
        <br />
      </p>
      <p>
        Lately, I have been digging into machine learning capabilities for drug
        discovery.
      </p>
    </PageSkeleton>
  );
}
