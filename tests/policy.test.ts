function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
  {
    "name": "case_1",
    "demand": 59,
    "capacity": 103,
    "latency": 11,
    "risk": 5,
    "weight": 10,
    "score": 202,
    "decision": "accept"
  },
  {
    "name": "case_2",
    "demand": 71,
    "capacity": 81,
    "latency": 26,
    "risk": 7,
    "weight": 5,
    "score": 109,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 86,
    "capacity": 98,
    "latency": 10,
    "risk": 16,
    "weight": 7,
    "score": 185,
    "decision": "accept"
  }
];

for (const item of cases) {
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
