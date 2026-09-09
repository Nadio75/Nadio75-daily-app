# NOTES-Nadio75

## Assignment 2.1

### Question 1 — Scrum or Kanban, for two different contexts

For my Daily App (solo, short sessions, evolving scope), I'd run it as **Kanban** rather than Scrum. Scrum's structure — fixed sprints, sprint planning, retros, a defined backlog commitment per sprint — assumes a team coordinating around shared ceremonies. Since I'm working alone in short, irregular sessions, I don't need to coordinate with anyone, and committing to a fixed sprint scope up front fights against the fact that my book-tracker features will genuinely evolve as I learn what I actually want (I might not know if I want a "reading progress %" field until I'm partway through building it). Kanban's continuous flow — pull the next card when I have time, no fixed iteration boundary — matches how my solo, session-based work actually happens.

For TrackFlow, my answer differs: I'd choose Scrum there, because the whole cohort genuinely benefits from synchronization — a shared sprint boundary creates natural checkpoints for the group to demo progress, catch integration issues, and re-plan together, which is exactly the coordination problem Scrum's ceremonies exist to solve. That coordination need doesn't exist when I'm the only person working on my own app.

### Question 2 — A real trade-off

I'll use "Responding to change over following a plan." The trade-off I'll actually face: when I design the Card schema for a book (title, author, genre, progress, rating, notes...), I could spend real time upfront getting every field "right" before writing a line of code, or I could start with a minimal schema and let it evolve as I actually use the app.

I'll lean toward responding to change — I'll start with a bare-minimum card (title, author, status) and add fields only once I notice I actually want them while using the tracker myself. The risk of over-planning here is concrete: I don't yet know if I'll want a star rating, a "date started/finished" pair, or tags for genre until I'm living with the app day to day, and locking that in now means guessing at requirements I can't actually validate yet. The cost of under-planning is low too — adding a field to a card later is cheap, so there's no real reason to front-load that decision.

### Question 3 — Critique and redesign

Question 3 — Critique and redesign

Sample Brief — "TaskBoard Pro" (Waterfall-style)

Phase 1 (Weeks 1–2): Gather complete requirements from all stakeholders and sign off on a full specification document covering every feature boards, cards, comments, labels, permissions, notifications, and reporting.

- I appreciate that the Waterfall-style approach provides a clear plan and timeframe, which can help establish structure and expectations. However, gathering complete requirements upfront and requiring sign-off on a full specification creates real risk for my Book Tracker specifically. As a solo builder, I don't yet know whether I'll want a star rating, a "date started/finished" pair, or genre tags until I've actually lived with the app day to day signing off on a fixed feature list now means guessing at requirements I can't validate yet.

- Rather than defining and signing off every feature upfront, an iterative approach would let me build the smallest useful version of the Book Tracker first (title, author, status) and let each additional feature ratings, notes, progress tracking be added only once actually using the app reveals I want it. This creates room to validate assumptions early rather than spending weeks specifying features I may never end up needing.

Refined plan (iterative, for my Book Tracker):

Iteration 1 (Week 1): Build a single board with hardcoded columns (Want to Read / Reading / Finished) and the ability to add a card with just a title and author. Demo it to myself by actually using it for a few days.
# repeat and expand the above sequence for each additional feature, based on what using the app reveals is missing

Phase 2 (Weeks 3–4): Complete UI/UX design for all screens, based on the signed-off spec. No further requirement changes permitted once design begins.

- Issue/problem: Locking in UI/UX for every screen before any real usage assumes I already know what the Book Tracker needs to look like. In practice, I won't know if I want a progress bar, a list view, or a card-grid layout until I've used a rough version myself banning changes at this stage contradicts Agile's iterative nature.

Phase 3 (Weeks 5–9): Build the entire application per spec and design. No demos until the build phase is complete.

- Issue/problem: Waiting weeks before seeing a working version of my own Book Tracker delays the exact feedback loop I need as a solo builder if my card schema or column structure turns out wrong, I won't find out until it's expensive to change.

Phase 4 (Weeks 10–11): Full QA testing pass across all features simultaneously. Phase 5 (Week 12): Launch to all users at once.

- Issue/problem: Testing everything at once, this late, means a bug in something simple (like adding a book) could surface at the same time as a bug in something complex (like progress tracking), making both harder to isolate and fix than if I'd tested each small feature as I built it.


## Assignment 2.2
Question 1: Roles, solo and shared
For TrackFlow, the class-wide build, the roles plausibly split like this: the instructor (or a rotating trainee) holds Product Owner, since they're setting priorities and defining what "done" means for the shared project; a designated trainee or the instructor facilitates as Scrum Master, keeping the ceremonies running; and the rest of the cohort, myself included, makes up the Dev Team actually building features.
For my Daily App, where I'm all three roles at once, I expect to neglect the Product Owner role first. When I'm busy, it's easy to just open the editor and start coding the next obvious thing (Dev Team mode) without stepping back to ask whether that's actually the highest-priority item on my backlog (Product Owner mode), the coding work feels more productive in the moment even when it isn't the right work. A concrete habit to stop this: before starting any coding session, spend 2 minutes re-reading my Sprint Backlog and confirming the item I'm about to work on is still the right one, instead of just picking up wherever I left off.

Question 2 — Definition of Ready, Definition of Done (Book CRUD epic only)
Definition of Ready:
•	The backlog item is written as a user story for example "As a reader, I want to add a book with a title and author so I can start tracking it"
•	Acceptance criteria are listed and specific enough to know when the story is satisfied
•	The exact fields involved for example title, author, genre, etc. are named, not left vague
•	No unresolved dependency on another epic for example it doesn't require Search & Filter to exist first
•	I have a rough sense of how long it'll take, even if not a formal estimate
Definition of Done:
•	The feature works end-to-end when I use it myself, not just in theory
•	Data persists across a page refresh, not just in memory
•	The change is committed to main with a Conventional Commits message
•	I manually tested the happy path and at least one edge case for example, adding a book with a blank title
•	The README reflects the change if it affects how the app is used
Question 3: The artifact most at risk
Of the three Scrum artifacts, the Sprint Backlog is most at risk of being skipped or faked in a solo, daily-cadence project like mine. Without a team relying on it to know what I've committed to, it's tempting to just work directly off the Product Backlog in an ad hoc way pulling whatever feels most interesting that day rather than deliberately committing to a fixed, smaller set of items for a given stretch of work.
The actual cost of skipping it is scope drift: without a real Sprint Backlog acting as a boundary, I lose the discipline that stops me from constantly context-switching between epics, and I lose an honest record of what I actually planned to build in a given period versus what I opportunistically added mid-stream which undermines the whole point of practicing Scrum instead of just building the app in whatever order I feel like.

## Assignment 2.3
Question 1 — Choosing a view

I'd use Board as my Daily App's primary day-to-day view, since it mirrors the actual Board → Column → Card structure the app itself is built around, making it the most natural way to see what's in progress at a glance and drag items forward as I work. List view would help when I need to scan or bulk-edit details across many tasks at once — for example, going through every backlog item to fill in a custom field like Priority, which is tedious to do one card at a time on a Board. Timeline would help specifically when I'm trying to see how Sprint 1's items are spread across the days I've realistically got to work on them, especially once tasks have due dates and I want to spot if I've overloaded a single day.

Question 2 — Custom fields, deliberately

I'll use three custom fields: Priority (High/Medium/Low), which exists to support filtering "what should I actually work on next" when I have limited time in a session; Epic (Book CRUD, Board & Columns, Search & Filter, Reading Progress, Notes & Ratings), which exists to support grouping and reporting on progress per feature area, since sections alone won't show me epic-level completion percentage in a filtered view; and Status Detail (Not Started/In Progress/Blocked), which exists to support a saved filter that surfaces anything currently blocked, since Asana's built-in complete/incomplete toggle doesn't distinguish "blocked" from "just haven't started yet."

Question 3 — Tag or field?

Something that should be a tag: needs-research — a free-form, cross-cutting label I might want to apply to tasks across multiple epics whenever I hit something I don't know how to build yet (e.g. a task in Book CRUD and a task in Search & Filter might both need research, even though they're in different epics). Something that should be a custom field: Epic, since every task belongs to exactly one epic and I want to filter and report on it structurally, not just search for a loose label. If I swapped them — making Epic a tag and needs-research a custom field — I'd lose real structure on Epic (tags don't enforce "pick exactly one value," so a task could accidentally get tagged with two epics or none, breaking any report that assumes one-to-one), and I'd add unnecessary rigidity to needs-research, which doesn't need a fixed set of possible values or per-project scoping — it just needs to exist or not.

NOTES.md Updates
1. What the given backlog exercise revealed

Building QuickNotes first genuinely changed how I approached my own project afterward. Practicing on a throwaway backlog meant I made my UI-organization mistakes there instead of on my real project — for example, I initially grouped items a bit loosely by feel rather than by a clear epic boundary, and only tightened that up once I saw how much cleaner the Auth/Notes CRUD/Organization split looked when each section had a clear reason for existing. By the time I built my Book Tracker's sections, I went straight to matching them exactly to my Assignment 2.1 epics instead of re-deciding grouping logic from scratch.

2. Where Sprint 1 Backlog and reality disagreed

Moving sprint-1-backlog.md into Asana didn't reveal a scoping problem with the items themselves, but it did surface a sequencing issue I hadn't thought through on paper: "Display books grouped into their status columns" genuinely depends on "Add a new book with title and author" existing first, since there's nothing to display until books can be created. On paper, both felt like independent Sprint 1 items I'd just work through in any order — setting a real dependency in Asana forced me to actually think about build order, not just feature scope.

3. The field vs. tag call I almost got wrong

I ran into this directly during the practice project. I set out to create a needs-design tag, but couldn't find where to add tags cleanly in the UI in the moment, and ended up creating it as a custom field instead. It technically worked for filtering, but it wasn't the right tool for the job — a tag would have let me apply needs-design loosely across unrelated tasks without forcing every task in the project to have some value for it, while a field implies every task should have an opinion on it, which "needs design or doesn't" isn't really true for something like "delete a note." It was a good real example of the exact distinction Question 3 asks about — I didn't just theorize about the field/tag line, I actually blurred it under mild UI friction, which made the distinction concrete rather than abstract.