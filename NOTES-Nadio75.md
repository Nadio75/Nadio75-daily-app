Question 1: Scrum or Kanban, for two different contexts

For my Daily App (solo, short sessions, evolving scope), I'd run it as Kanban rather than Scrum. Scrum's structure fixed sprints, sprint planning, retros, a defined backlog commitment per sprint assumes a team coordinating around shared ceremonies. Since I'm working alone in short, irregular sessions, I don't need to coordinate with anyone, and committing to a fixed sprint scope up front fights against the fact that my book-tracker features will genuinely evolve as I learn what I actually want (I might not know if I want a "reading progress %" field until I'm partway through building it). Kanban's continuous flow pull the next card when I have time, no fixed iteration boundary matches how my solo, session-based work actually happens.



For TrackFlow, my answer differs: I'd choose Scrum there, because the whole cohort genuinely benefits from synchronization a shared sprint boundary creates natural checkpoints for the group to demo progress, catch integration issues, and re-plan together, which is exactly the coordination problem Scrum's ceremonies exist to solve. That coordination need doesn't exist when I'm the only person working on my own app.





Question 2: A real trade-off



I'll use "Responding to change over following a plan." The trade-off I'll actually face: when I design the Card schema for a book (title, author, genre, progress, rating, notes...), I could spend real time upfront getting every field "right" before writing a line of code, or I could start with a minimal schema and let it evolve as I actually use the app.

I'll lean toward responding to change, I'll start with a bare-minimum card (title, author, status) and add fields only once I notice I actually want them while using the tracker myself. The risk of over-planning here is concrete: I don't yet know if I'll want a star rating, a "date started/finished" pair, or tags for genre until I'm living with the app day to day, and locking that in now means guessing at requirements I can't actually validate yet. The cost of under-planning is low too, adding a field to a card later is cheap, so there's no real reason to front-load that decision.



Question 3: Critique and redesign

Three problems with the "TaskBoard Pro" brief:



1. No working software until week 9 violates the Manifesto value of working software over comprehensive documentation, and Principle 3 ("deliver working software frequently"). A 9-week gap between planning and any runnable version means the first real feedback on whether the design actually works comes far too late to cheaply fix anything.



2\. "No further requirement changes permitted once design begins" directly violates responding to change over following a plan and Principle 2 ("welcome changing requirements, even late in development"). Freezing requirements before any real usage has happened guarantees the team builds against assumptions instead of evidence.





3\. A single all-at-once QA phase across every feature simultaneously (Phase 4) violates Principle 1 ("continuous delivery of valuable software") and Principle 7 ("working software is the primary measure of progress"). Bugs found this late, across the whole system at once, are far more expensive to fix than bugs caught incrementally after each small piece ships.





