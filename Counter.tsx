import React from "react";
interface Ex {
  name: string;
  age: number;
  city: string;
  isSingle: boolean;
}
interface Sim {
  provider: "tnt" | "globe" | "tm" | "smart" | "sun" | "dito";
  num: number;
}
interface User {
  Mlid?: number;
  name: string;
  isAdult: boolean;
  sim: Sim;
  pastGf: Array<Ex>;
  gender: "male" | "female" | "L" | "G" | "B" | "T";
  savings: number | null | undefined | "no savings";
  bloodType: any;
}

export default function Counter() {
  const trono: User = {
    name: "trono",
    isAdult: true,
    sim: {
      provider: "globe",
      num: 101010,
    },
    Mlid: 235427,
    pastGf: [
      {
        age: 19,
        city: "makati",
        isSingle: true,
        name: "Samantha",
      },
      {
        age: 45,
        city: "kasiglahan",
        isSingle: false,
        name: "lunox",
      },
    ],
    gender: "female",
    savings: "no savings",
    bloodType: "fg",
  };

  const jelson: User = {
    bloodType: "op",
    gender: "female",
    isAdult: true,
    name: "jelson",
    pastGf: [
      {
        age: 19,
        city: "Rodriguez",
        isSingle: false,
        name: "Shaira mae Tuazon Verano",
      },
      {
        age: 25,
        city: "Rodriguez",
        isSingle: true,
        name: "john mathew miting D. Hulk",
      },
    ],
    savings: "no savings",
    sim: {
      num: 4521933223,
      provider: "tnt",
    },
    Mlid: 56329,
  };
  console.log(jelson);

  return (
    <div>
      <h1>HAHAHHAAHAHAHAHAHAHAHAH</h1>
    </div>
  );
}
