import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
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
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
