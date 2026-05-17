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
      <p>
        My interests lie in computational modeling and software development for life sciences. I'm currently at the{' '} 
        <a href="https://vazquezgarcialab.mgh.harvard.edu/" target="_blank" className="underline hover:text-yellow-400">Vázquez-García Lab</a> exploring
        spatio-temporal tumor evolution.
      </p> 
    </PageSkeleton>
  );
}
