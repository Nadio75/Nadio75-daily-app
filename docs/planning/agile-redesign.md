\# Agile Redesign — Critique of "TaskBoard Pro"



\## Three problems with the "TaskBoard Pro" brief



1\. No working software until week 9 violates the Manifesto value of working software over comprehensive documentation, and Principle 3 ("deliver working software frequently"). A 9-week gap between planning and any runnable version means the first real feedback on whether the design actually works comes far too late to cheaply fix anything.



2."No further requirement changes permitted once design begins" directly violates responding to change over following a plan and Principle 2 ("welcome changing requirements, even late in development"). Freezing requirements before any real usage has happened guarantees the team builds against assumptions instead of evidence.



3\. A single all-at-once QA phase across every feature simultaneously (Phase 4) violates Principle 1 ("continuous delivery of valuable software") and Principle 7 ("working software is the primary measure of progress"). Bugs found this late, across the whole system at once, are far more expensive to fix than bugs caught incrementally after each small piece ships.



\## Redesign — first two iterations for my Book Tracker



Iteration 1 (roughly 1 week): Build the smallest possible working slice a single board with hardcoded columns (Want to Read / Reading / Finished) and the ability to add a card with just a title and author. No auth, no persistence beyond local storage, no styling polish. The goal is a working, demoable thing on day one, not a complete spec.



Iteration 2 (roughly 1 week): Based on actually using Iteration 1 for a few days, add whatever friction I actually hit likely persistence (so cards don't vanish on refresh) and the ability to move a card between columns. I don't decide this in advance; I decide it based on what Iteration 1 revealed I was missing.

