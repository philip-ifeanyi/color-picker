type Color = {
  color: string;
  imageSrc: string;
  details: string;
  code: number;
};

export const colors: Color[] = [
  {
    color: "Green",
    imageSrc: "/light.png",
    details: "Light green, Dark green, Army",
    code: 100,
  },
  {
    color: "Red",
    imageSrc: "/light.png",
    details: "Crimson, Scarlet, Firebrick",
    code: 101,
  },
  {
    color: "Blue",
    imageSrc: "/dark.png",
    details: "Sky blue, Navy blue, Royal blue",
    code: 102,
  },
  {
    color: "Yellow",
    imageSrc: "/light.png",
    details: "Canary, Mustard yellow, Golden",
    code: 103,
  },
  {
    color: "Purple",
    imageSrc: "/dark.png",
    details: "Lavender, Violet, Plum",
    code: 104,
  },
];
