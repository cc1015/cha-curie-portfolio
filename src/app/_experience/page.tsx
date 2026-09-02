"use client";
import Link from "next/link";
import PageSkeleton from "../components/PageSkeleton";

type Item = {
  role: string;
  org: string;
  href?: string;
};

const education = {
  degree: "B.S. Computer Science and Biology, Minor in Math",
  school: "Northeastern University",
};

const items: Item[] = [
  {
    role: "Undergraduate Researcher",
    org: "Vázquez-García Lab",
    href: "https://vazquezgarcialab.mgh.harvard.edu/",
  },
  {
    role: "Computational Biology Co-op (Antibody Engineering)",
    org: "Takeda Pharmaceuticals",
  },
  {
    role: "Research Assistant",
    org: "Gyori Lab for Computational Biomedicine",
    href: "https://gyorilab.github.io/",
  },
  {
    role: "Research Informatics Co-op",
    org: "Tango Therapeutics",
  },
  {
    role: "Lab Manager",
    org: "Language and Mind Lab",
    href: "https://berentlab.sites.northeastern.edu/",
  },
];

const image = {
  src: "/galatea.jpg",
  alt: "personal photo",
  title: "Galatea of the Spheres, Dali",
  credit: "Credit: © 2014 Salvador Dalí, Fundació Gala-Salvador Dalí, Figueres",
};

function Org({ org, href }: { org: string; href?: string }) {
  if (!href) return <span className="italic">{org}</span>;
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="italic underline decoration-dotted underline-offset-4 hover:text-yellow-400"
    >
      {org}
    </Link>
  );
}

export default function Base() {
  return (
    <PageSkeleton imageProps={image} imageFirst={true}>
      <div className="text-sm sm:text-base leading-relaxed">
        <div>
          <div>{education.degree}</div>
          <div className="opacity-70">
            <Org org={education.school} />
          </div>
        </div>

        <hr className="opacity-20 my-6" />

        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i}>
              <div>{item.role}</div>
              <div className="opacity-70">
                <Org org={item.org} href={item.href} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageSkeleton>
  );
}
