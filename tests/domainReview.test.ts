function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 64, slack: 20, drag: 31, confidence: 50 };
equal(domainReviewScore(item), 105);
equal(domainReviewLane(item), "watch");
