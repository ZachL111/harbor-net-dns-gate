# harbor-net-dns-gate

`harbor-net-dns-gate` is a TypeScript project in networking. Its focus is to design a TypeScript verification harness for dns systems, covering policy evaluation, deny and allow fixtures, and failure-oriented tests.

## Why This Exists

The project exists to keep a narrow engineering decision visible and testable. For this repo, that decision is how packet span and route drift should influence a review result.

## Harbor Net DNS Gate Review Notes

`recovery` and `baseline` are the cases worth reading first. They show the optimistic and cautious ends of the fixture.

## Capabilities

- `fixtures/domain_review.csv` adds cases for packet span and retry pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/harbor-net-dns-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `socket risk` and `packet span`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Implementation Shape

The fixture data drives the tests. The code stays thin, while `metadata/domain-review.json` and `config/review-profile.json` explain what each case is meant to protect.

The added TypeScript path is deliberately direct, with fixtures doing most of the explaining.

## Local Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Verification

That command is also the regression path. It verifies the domain cases and catches mismatches between the CSV, metadata, and code.

## Roadmap

The fixture set is small enough to audit by hand. The next useful expansion is malformed input coverage, not extra surface area.
