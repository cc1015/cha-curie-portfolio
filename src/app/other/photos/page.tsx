import PhotoRow from "../components/PhotoRow";

const rows = [
  {
    images: ["/DSC_0352.jpg", "/DSC_0565.jpg", "/DSC_0650.jpg"],
    desc: "maris // megan thee stallion // leon bridges",
  },
  {
    images: ["/DSC_0561.jpg", "/DSC_0782.jpg", "/DSC_0823.jpg"],
    desc: "khruangbin",
  },
  {
    images: [
      "/DSC_0323.jpg",
      "/CurieChaGraceBowersDSC_0229.jpg",
      "/DSC_0223.jpg",
    ],
    desc: "levitate music festival // grace bowers",
  },
  {
    images: ["/DSC_0046.jpg", "/DSC_0047.jpg", "/DSC_0048.jpg"],
    desc: "costa rica",
  },
];

export default function Base() {
  return (
    <main>
      {rows.map((row) => (
        <PhotoRow key={row.desc} images={row.images} desc={row.desc} />
      ))}
    </main>
  );
}
