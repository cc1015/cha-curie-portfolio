import PhotoRow from "../components/PhotoRow";

export default function Base() {
  const row_1 = {
    images: ["/DSC_0046.jpg", "/DSC_0047.jpg", "/DSC_0048.jpg"],
    desc: "costa rica",
  };

  const row_2 = {
    images: [
      "/DSC_0323.jpg",
      "/CurieChaGraceBowersDSC_0229.jpg",
      "/DSC_0223.jpg",
    ],
    desc: "levitate music festival // grace bowers shredding",
  };

  const row_3 = {
    images: ["/DSC_0352.jpg", "/DSC_0565.jpg", "/DSC_0650.jpg"],
    desc: "maris // megan thee stallion // leon bridges",
  };

  const row_4 = {
    images: ["/DSC_0561.jpg", "/DSC_0782.jpg", "/DSC_0823.jpg"],
    desc: "khruangbin!!",
  };

  return (
    <main>
      <PhotoRow images={row_1.images} desc={row_1.desc}></PhotoRow>
      <PhotoRow images={row_2.images} desc={row_2.desc}></PhotoRow>
      <PhotoRow images={row_3.images} desc={row_3.desc}></PhotoRow>
      <PhotoRow images={row_4.images} desc={row_4.desc}></PhotoRow>
    </main>
  );
}
