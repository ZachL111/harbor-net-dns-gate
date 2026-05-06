import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 64, slack: 20, drag: 31, confidence: 50 };
assert.equal(domainReviewScore(item), 105);
assert.equal(domainReviewLane(item), "watch");
