export type Photo = {
  src: string;
  width: number;
  height: number;
  caption: string;
};

const landscape = { width: 4928, height: 3264 };
const portrait = { width: 3264, height: 4928 };
const web = { width: 2400, height: 1590 };

// Each slide is one landscape photo or two portraits side by side, shown in this order.
export const slides: Photo[][] = [
  [{ src: "/photos/paranal.jpg", ...web, caption: "Paranal Observatory, Chile" }],
  [{ src: "/photos/chile-10.jpg", ...web, caption: "Atacama, Chile" }],
  [{ src: "/photos/atacama.jpg", ...web, caption: "Atacama, Chile" }],
  [
    { src: "/DSC_0561.jpg", ...portrait, caption: "Khruangbin" },
    { src: "/DSC_0782.jpg", width: 3116, height: 4705, caption: "Khruangbin" },
  ],
  [{ src: "/CurieChaGraceBowersDSC_0229.jpg", ...landscape, caption: "Grace Bowers" }],
  [
    { src: "/DSC_0352.jpg", ...portrait, caption: "Maris" },
    { src: "/DSC_0565.jpg", ...portrait, caption: "Megan Thee Stallion" },
  ],
  [{ src: "/DSC_0323.jpg", ...landscape, caption: "Levitate Music Festival" }],
];

export const frameNumber = (i: number) => String(i + 1).padStart(2, "0");
