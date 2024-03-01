interface IStudent {
  name: string;
  age: number;
  marks?: number[];
}

type TRequiredUtility = Required<IStudent>; // it will make all to essentail required
type TPartialUtility = Partial<IStudent>; // it will make all to essentail optional

const PartailObject1: TPartialUtility = {
  name: "readonly",
  age: 34,
};

PartailObject1.age = 34;
// readonly types
type IReadonlyUtility = Readonly<IStudent>; // it will make the object only readonly

const ReadonlyObject1: IReadonlyUtility = {
  name: "readonly",
  age: 34,
};

// ReadonlyObject1.name  = "changed"

// Record Utility
interface ICar {
  name: string;
  model: string;
}

type TCar = "honda" | "yamaha";

const carObject1: Record<TCar, ICar> = {
  honda: { model: "h500", name: "honda" },
  yamaha: { model: "y500", name: "yamaha" },
};

// pick utility
// pick a specific keys and remove the others

interface IGlobalUtility {
  name: string;
  age: number;
  description: string;
  id: number;
}

type TpickUtility = Pick<IGlobalUtility, "name" | "description">;
const Student1: TpickUtility = {
  description: "Student 1",
  name: "Student 1",
};



// omit utility
// ignore the selected keys and can remian the others
type TomitUtility = Omit<IGlobalUtility, "name" | "description">;
