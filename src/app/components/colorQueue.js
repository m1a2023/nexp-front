const colorQ = {
  AshGray: "#cad5ca",
  MediumStateBlue: "#8075ff",
  Rose: "#fda4af",
};

let offset = -1;

export function changeColor() {
  return colorQ[
    Object.keys(colorQ)[
      (offset = ++offset < Object.keys(colorQ).length ? offset : 0)
    ]
  ];
}
