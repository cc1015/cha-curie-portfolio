"use client";
import Link from "next/link";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import PageSkeleton from "../components/PageSkeleton";

const workitems = [
  {
    id: 1,
    title: "Computational Biology Co-op (Antibody Engineering), Takeda Pharmaceuticals",
  },
  {
    id: 2,
    title: "Reseach Assistant, Gyori Lab for Computational Biomedicine",
    href: "https://gyorilab.github.io/",
  },
  {
    id: 3,
    title: "Research Informatics Co-op, Tango Therapeutics",
  },
  {
    id: 4,
    title: "Lab Manager, Language and Mind Lab",
    href: "https://berentlab.sites.northeastern.edu/",
  },
];

const leaderitems = [
  {
    id: 4,
    title: "Tech Lead, ViTAL Healthcare Hackathon Organizing Team",
  },
];

const teachingitems = [
  {
    id: 5,
    title: "Teaching Assistant/Peer Tutor",
  },
];

const image = {
  src: "/galatea.jpg",
  alt: "personal photo",
  title: "Galatea of the Spheres, Dali",
  credit: "Credit: © 2014 Salvador Dalí, Fundació Gala-Salvador Dalí, Figueres",
};

export default function Base() {
  return (
    <PageSkeleton imageProps={image} imageFirst={true}>
      <div>Work</div>
      {workitems.map((workitem) => (
        <div
          key={workitem.id}
          className="flex mb-4 pb-4 whitespace-pre-line px-2"
        >
          <span className="flex">
            {workitem.title}
            {workitem.href && (
              <Link href={workitem.href} target="_blank" className="ml-1">
                <BoxArrowUpRight size={10} />
              </Link>
            )}
          </span>
        </div>
      ))}

      <div>Leadership</div>
      {leaderitems.map((leaderitem) => (
        <div key={leaderitem.id} className="mb-4 pb-4 whitespace-pre-line px-2">
          {leaderitem.title}
        </div>
      ))}

      <div>Teaching</div>
      {teachingitems.map((teachitem) => (
        <div key={teachitem.id} className="mb-4 pb-4 whitespace-pre-line px-2">
          {teachitem.title}
        </div>
      ))}
    </PageSkeleton>
  );
}
