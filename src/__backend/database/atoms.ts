import { Collection } from "@msw/data";

import { AtomSchema } from "#/api/schemas";
import { uuid } from "#/utils";

export const atoms = new Collection({ schema: AtomSchema });

const data = [
  { number: 6, name: "Carbon", symbol: "C", mass: 12.011 },
  { number: 7, name: "Nitrogen", symbol: "N", mass: 14.007 },
  { number: 39, name: "Yttrium", symbol: "Y", mass: 88.906 },
  { number: 56, name: "Barium", symbol: "Ba", mass: 137.33 },
  { number: 58, name: "Cerium", symbol: "Ce", mass: 140.12 },
];

await atoms.createMany(data.length, (i) => ({ id: uuid(), ...data[i] }));
