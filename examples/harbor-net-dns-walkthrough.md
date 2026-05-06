# Harbor Net DNS Gate Walkthrough

This note is the quickest way to read the extra review model in `harbor-net-dns-gate`.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | packet span | 105 | watch |
| stress | retry pressure | 196 | ship |
| edge | route drift | 182 | ship |
| recovery | socket risk | 234 | ship |
| stale | packet span | 170 | ship |

Start with `recovery` and `baseline`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The useful comparison is `socket risk` against `packet span`, not the raw score alone.
