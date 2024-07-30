const colorQ = {
  AshGray: "#cad5ca",
  ElectricIndigo: "#6320ee",
  White: "#ffffff",
  RoseBright: "#f8f0fb",
};

let offset = -1;

export function changeColor() {
  return colorQ[
    Object.keys(colorQ)[
      (offset = ++offset < Object.keys(colorQ).length ? offset : 0)
    ]
  ];
}
