# ADR 0001: Use a custom field for Epic instead of a tag

**Status**: Accepted

**Context**: In the task tracker (Asana), every task belongs to exactly
one epic (Book CRUD, Board & Columns, Search & Filter, Reading Progress,
Notes & Ratings). I needed a way to record that, and both tags and
custom fields were available options.

**Decision**: Use a custom field for Epic, not a tag.

**Consequences**: Custom fields enforce picking exactly one value, so a
task can't accidentally end up tagged with two epics or none — which
matters because filtered reports (e.g. "show me Book CRUD progress")
assume a task belongs to exactly one epic. If Epic had been a tag
instead, that one-to-one assumption could silently break. The tradeoff
is custom fields are slightly more rigid to set up than tags, but that
rigidity is exactly what this decision needed.