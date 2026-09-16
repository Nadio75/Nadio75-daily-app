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

## Assignment 2.4
Question 1: Rewrite Sprint 1 as real user stories
1.	As a reader, I want to add a book by entering its title and author, so that I can start tracking it on my board.
2.	As a reader, I want to edit a book's title or author after adding it, so that I can correct mistakes without deleting and re-adding the book.
3.	As a reader, I want to delete a book I no longer want tracked, so that my board only shows books I actually care about.
4.	As a reader, I want to change a book's status (Want to Read / Reading / Finished / Abandoned), so that it reflects my actual progress with it.
5.	As a reader, I want to see all my books organized into columns by status, so that I can understand my reading life at a glance without hunting for anything.

Question 2: Acceptance criteria

1.	Add a book: A form exists with title and author fields. Submitting both creates a card in Want to Read. Submitting a blank title shows a visible error and blocks submission. The book persists after a page refresh.

2.	Edit a book: Each card has an accessible edit action. Editing opens a form pre-filled with current values. Saving updates the card immediately. Canceling leaves original values unchanged. Edits persist after a refresh.

3.	Delete a book: Each card has an accessible delete action. Confirming removes the card immediately. The deleted book doesn't reappear after a refresh. Deleting one book doesn't affect any other book's data.

4.	Set a book's status: Each card has a way to change status. Selecting a new status moves the card to the matching column. The change persists after a refresh. Only the four valid statuses are selectable.

5.	Display grouped columns: The board shows exactly 4 columns matching the 4 statuses. Each book appears in exactly one column matching its current status. An empty column shows an empty state, not an error. The layout updates immediately when status changes.

Question 3: INVEST check

•	Independent — Fails. It hard-depends on stories 1 and 4 being finished first (nothing to group without books, no columns to sort into without status), which the deck defines Independent as specifically avoiding.
•	Negotiable — Passes; exact layout isn't locked in.
•	Valuable — Passes; a real user, me, cares about seeing progress at a glance.
•	Estimable — Passes, once split.
•	Small — Passes if split; fails as originally written since it bundles UI + data-wiring + all four statuses at once.
•	Testable — Passes; the acceptance criteria are concrete.

Question 4: Estimating alone, again
Using the deck's Fibonacci-like scale (1, 2, 3, 5, 8...) and story 1 as my reference point:
•	Add a book: 3
•	Edit a book: 2
•	Delete a book: 1
•	Set a book's status: 3
•	Display grouped columns (as originally written, un-split): 8 bumped up from my earlier 5, once I actually apply the INVEST failure honestly. The deck's point about growing gaps reflecting growing uncertainty at larger sizes applies directly here: the more I dug in, the less confident I got about its true size, which is exactly the signal an 8 (not a 5) is supposed to represent.
Since I'm working solo, I don't get Planning Poker's actual value the deck is clear that "the value is the gap," the disagreement between team members' independent estimates. Without a second person, I can't surface my own blind spots that way; the closest substitute is deliberately re-estimating a story after applying INVEST, which is what surfaced story 5's real size here.

## Assignment 2.4 – NOTES Updates

### 1. What changed between backlog phrase and real story
When I rewrote “Display books grouped into columns” into a full user story with a “so that” clause, I realised it was actually an epic in disguise. As a raw backlog item it felt simple, but once I named the user and the reason, the dependencies on the other stories became obvious. That forced me to raise the estimate from 5 to 8 points and plan to split it later.

### 2. The retro, from the inside
One real takeaway I’m applying from the TrackFlow mock sprint is to keep the board honest only move a card when real work has started. That’s why I created the empty feature folders before moving the Add and Edit stories to In Progress.

### 3. Estimating with real stories vs. rough backlog items
My estimates felt more confident this time. Having full user stories + acceptance criteria made the size of each item clearer than when they were just short backlog phrases. The Display columns story was the exception — writing it properly actually made me less confident and raised the points, which is exactly what should happen.

## Assignment 3.1
Question 1: Suggesting mode vs. comments vs. direct edits

Since I'm building solo, most of my Project Doc writing starts as direct edits but the distinction still matters once anyone else touches the doc. Direct edit: fixing a typo in the Book Tracker's Scope section myself, since I wrote it and own it outright. Suggesting mode: if my instructor proposes tightening my Timeline section's Sprint 1 dates, I'd want that as a suggestion I can accept or reject, not a silent overwrite I still own the final call on my own project's timeline. Comment: my instructor flagging "is a 4-week timeline realistic given you're solo?" on the Timeline section without touching the text a question that needs my judgment, not a rewrite.

Question 2: Permissions, deliberately

Editor just me. I'm the only person building Book Tracker, so I'm the only one who should be able to restructure the Drive folder or rewrite core sections.
Commenter my instructor. Per the assignment's own note, since I'm solo, I'm inviting them specifically to leave at least one real comment they need to give feedback without being able to accidentally edit my Doc or Sheet.
Viewer other cohort trainees, if anyone wants to see how I structured my kickoff package for reference. Read-only keeps my source of truth from getting touched by people outside the project.

Question 3: Sync or async?

For a solo kickoff, almost everything is naturally async, since there's no team to synchronize with but I'd still treat "getting a real comment thread going" as needing a live-ish moment: a quick Meet stand-up works well for surfacing that first blocking question or ambiguity in my Scope section, since waiting on async comments could stall the whole kickoff. Status updates and task assignment (all to myself, into my Sheet tracker) are fully async there's no one to coordinate with, so writing it once and moving on is strictly more efficient than a meeting. The one place async could fail me: if my instructor's comment on the Doc raises something structural (e.g., "your Scope is too broad for 4 weeks"), that's worth a quick sync check-in rather than a long comment thread, since scope changes benefit from real-time back-and-forth more than a status update does.

## 3.1 Reflection

1. What the TidyUp practice revealed

Building TidyUp first meant I made my "who leaves the comment vs. who owns the edit" mistakes on a throwaway doc instead of my real one — the first time I tried Suggesting mode, I almost forgot to switch back to Editing mode afterward, which would've meant my real Book Tracker edits accidentally showed up as suggestions instead of direct changes. Catching that on TidyUp meant I didn't lose that moment on the doc that actually matters.

2. The permission you almost got wrong

Building the real Book Tracker folder, I almost left General access on "Anyone with the link" out of habit, since that's Drive's more convenient default — I caught it because my Question 2 answer specifically argued for Restricted access, and going back to reread my own reasoning is what stopped me from undermining it in practice.

3. Sync vs. async, in practice

My Question 3 split mostly held task assignment and status updates stayed comfortably async since there's no one to coordinate with. The one place it didn't fully hold: I'd planned the instructor's comment thread as purely async, but running the actual stand-up made me realize a scope question ("does deferring Search & Filter make sense?") is exactly the kind of thing that benefits from a quick back-and-forth rather than waiting on a comment reply — which matches what I predicted in my original Question 3 answer, just confirmed it for real this time.

Stretch Goal: 4th permission tier

I'd add a Commenter + resolved-status view tier for a hypothetical non-technical stakeholder (e.g., a mentor checking progress) practically, this is still "Commenter" in Drive's actual permission model, but paired with a separate, simplified status-only Sheet view (or a read-only summary tab) rather than giving them access to the full working tracker. Plain Viewer alone isn't enough because they'd have no way to leave feedback or ask a clarifying question without pinging me directly outside the tool. Commenter solves that by letting them react in-context without touching structure.

## Assignment 3.2
Question 1 — Beyond the core four

My README needs a Known limitations section beyond Purpose, Setup, Usage and a Contribution. Right now the repo is planning-only — feature files like AddBookForm.md and EditBookForm.md are just scaffolding, not working code. Leaving that out would actively hurt someone: if a reader clones the repo expecting a runnable app because the README's Usage section describes one, they'd waste time debugging "broken" setup steps that were never actually implemented yet. A Known limitations section stating "Sprint 1 CRUD is planned but not yet built; see docs/planning/sprint-1-backlog.md" sets accurate expectations instead of implying more exists than does.

Question 2: Comment audit

Comment that shouldn't be there: features/add-book/AddBookForm.md, line 1, "// Add Book feature - scaffolding for Sprint 1". This restates exactly what the filename and folder already say; it adds no information a reader doesn't already have from the path alone.

Comment that's missing: there isn't one yet, because there's no real logic written — but I can point to where one will be needed. Once addBook() is actually implemented, the non-obvious "why" will be around genre being optional while title/author aren't (per docs/planning/sprint-1-backlog.md's acceptance criteria: "Optional field: Genre" vs. "Validation: Title and Author cannot be empty"). A future reader won't know why genre gets special treatment unless a comment explains it — something like "// genre is optional: readers often don't know it yet when first logging a book."

Question 3: What makes a decision ADR-worthy

My real ADR-worthy decision: making Epic a custom field rather than a tag in my task tracker (from Assignment 2.4). What made it worth documenting instead of a routine detail: it wasn't obvious, and getting it wrong had a real consequence — tags don't enforce "pick exactly one value," so treating Epic as a tag would let a task get double-tagged or untagged, silently breaking any report that assumes one task belongs to exactly one epic. A routine detail (e.g., which exact hex color I used for a label) doesn't need an ADR because getting it "wrong" has no downstream effect on how the system behaves — this one does.

## NOTES.md reflections

1. What the sample exercise revealed
Documenting the throwaway QuickNotes signup function first meant I'd already practiced the "comment only what earns its place" instinct before touching real code — when I wrote the real addBook() function, I didn't comment the required-field check or the db.books.insert() call, the same way I'd left the email-format check uncommented in QuickNotes. The genre-optional comment was the one place that mirrored QuickNotes' bcrypt-rounds comment: both are decisions a reader can't infer from the code alone.

2. The comment you were wrong about
The scaffolding comment I flagged in Question 2 (// Add Book feature - scaffolding for Sprint 1) was actually easier to deal with than expected — I didn't need to carefully rewrite it, since replacing the whole placeholder with real code made the comment obsolete outright rather than needing a nuanced edit.

3. The line between decision and detail
After writing a real ADR, I'd document fewer decisions than my original Question 3 answer implied, not more. Writing out the Epic-as-custom-field ADR made me realize the bar isn't "was this a deliberate choice" — plenty of deliberate choices (like which exact bcrypt round count style comment to use) don't need a full ADR. The real bar is "would getting this wrong silently break something downstream" — that's a narrower set than I first thought.

## Links

- README: https://github.com/Nadio75/Nadio75-daily-app/blob/assignment-3-2/README.md
- ADR (Task 7): https://github.com/Nadio75/Nadio75-daily-app/blob/assignment-3-2/docs/decisions/0001-epic-as-custom-field.md
- Real code + comment audit + function doc (Task 6/8): https://github.com/Nadio75/Nadio75-daily-app/blob/assignment-3-2/features/add-book/AddBookForm.md
- CONTRIBUTING.md (Stretch A): https://github.com/Nadio75/Nadio75-daily-app/blob/assignment-3-2/CONTRIBUTING.md

## Assignment 3.3
## Part 1: Written Decisions

Question 1: Channel choice, for real

The most recent real messages I've sent about the Daily App were my commit messages and PR descriptions — which is its own channel choice. Commits like "Add real code with comment fix (Task 6) and Epic ADR (Task 7)" bundle two unrelated changes into one message, which works as a Slack-style quick note but fails as a durable record: six months from now, someone searching history for when the ADR landed gets a message that's half about something else. What I'd change specifically: split into two commits, each with one message about one change. The durable, searchable channel deserves the more deliberate treatment.

Question 2: The self-check you did or skipped

Honest answer: I asked too early on the PowerShell heredoc issue. I pasted a cat > file << 'EOF' command, it hung with >> prompts, and I asked what was wrong rather than first noticing that my prompt said PS C:\Users\User\ — the "PS" was right there telling me I was in PowerShell, not Bash. The self-check I skipped was the cheapest one available: read the error state I was already looking at. I did the same thing again a minute later with cat > on the README file.

Question 3: Specific vs. vague feedback, side by side

Specific version, on my own AddBookForm.md: "The file is named .md but contains only JavaScript — no markdown. That means GitHub renders the code as prose instead of syntax-highlighting it, and editors won't lint it. Suggest renaming to AddBookForm.js, or keeping .md and wrapping the code in a fenced code block if the file is meant to be documentation."

Vague version: "file structure could be cleaner."

The difference in one sentence: the specific version names what's wrong, why it costs something concrete, and what to do about it — the vague version leaves all three for the reader to guess.

## Part 2: BudgetBuddy sample

Task 1: Channel rewrite

That message crams a bug report and a scope decision into one. Split:

Slack: "Heads up — budget sync is broken. Repro: [steps]. Opening a ticket now, will update this thread when I know the cause."

Email: Subject: "Decision needed: export feature in or out of this sprint?" Body: "We haven't decided whether export lands this sprint. In favor: [reason]. Against: [reason]. I need a call by Thursday so I can plan the rest of my week. Happy to discuss live if that's easier."

The bug is time-sensitive and disposable, so Slack. The scope decision needs a record and a deadline, so email.

Task 2: Question rewrite

Context: The category totals on the dashboard don't match the sum of individual transactions — this started after yesterday's updateBudget() change.

What I tried: Logged the transaction array before and after the recalculation — the input data is correct, so the bug is in the aggregation, not the source. I also checked whether it's a rounding issue by comparing to two decimal places; it isn't.

Exact behavior: For the Groceries category, individual transactions sum to R1,240.50, but the dashboard shows R1,180.00 — a R60.50 gap that matches exactly one transaction that's being skipped.

Ask: Does updateBudget() have a known issue with transactions that have a null category, or should I be looking somewhere else?

Task 3: PR feedback on updateBudget()

updateBudget() is doing three separable jobs in one 40-line block: input validation, recalculating category totals, and the database write. That makes it hard to test any one behavior in isolation — right now you can't unit-test the recalculation logic without also hitting the database.

Suggested direction: pull the recalculation into its own pure function that takes transactions and returns totals, then have updateBudget() call it. Validation could move to the top as a guard clause or its own helper. That'd also make the totals bug easier to isolate, since you could test the calculation directly.

Task 4: Receiving it well

Good catch on the testability angle — I hadn't thought about the fact that the recalculation can't be tested without a database round-trip, and that's probably why I've been debugging the totals issue by hand.

One clarifying question: do you think validation should be a guard clause inside updateBudget(), or a separate function the caller invokes first? I can see arguments for both, and I'd rather match whatever pattern we're using elsewhere.

Thanks for taking the time on this — I'll split out the recalculation first and see if the totals bug shows up more clearly once it's isolated.

## Part 3: Real work

Task 5: Real help request

Context: I'm working on addBook() in features/add-book/AddBookForm.md for Sprint 1 of my Book Tracker. The function references db.books.insert() but there's no database layer in the repo yet — it's the first real code in a repo that's otherwise planning docs.

What I tried: Checked my Sprint 1 backlog and epics docs to see if I'd specified a persistence approach — I hadn't; the acceptance criteria describe behavior but not storage. I also looked at whether the assignment expected runnable code or just a documented function, and it's the latter, so I'm not blocked on submitting.

Exact situation: addBook() is written and documented but can't actually run calling it throws ReferenceError: db is not defined.

Ask: For Sprint 1, should I stub persistence with an in-memory array to get the CRUD stories actually working, or is it better to pick the real storage approach now so I'm not rewriting it in a week?

Task 7: Reflect on real feedback received

The feedback I got this week was on AddBookForm.md: that the old scaffolding comment (// Add Book feature scaffolding for Sprint 1) was still sitting above the real code instead of being removed when I replaced it, and that the file was saved as UTF-16 instead of UTF-8 like the rest of the repo.

What made it useful was that both points were concrete and actionable not "clean this up" but the exact line still there, and the exact reason the encoding mattered (diffs showing the whole file as changed instead of just the real edit). I didn't have to guess what "cleaner" meant or go hunting for the problem myself.

How I responded: I didn't just fix it silently, I want to actually understand why the encoding issue happened before I re-save it, since if VS Code or my terminal is defaulting to UTF-16 somewhere, it'll keep happening on future files too, not just this one. So my plan is: fix this file's encoding, then check whether it's a one-off or a setting I need to change so it doesn't recur.

Task 8: Before/after

Before: git commit -m "Add real code with comment fix (Task 6) and Epic ADR (Task 7)"

After: Two commits — git commit -m "Replace add-book scaffolding with real addBook() implementation" and git commit -m "Add ADR 0001: use custom field for Epic instead of tag"

What changed and why: The original bundles two unrelated changes and describes them by assignment task number rather than by what they do. Task numbers are meaningful to me this week and meaningless in three months. The rewrite splits them so each change is independently revertable, and describes the change itself so git log is searchable by what happened rather than by which homework prompted it.

## NOTES-Nadio75.md Updates — Assignment 3.3

1. What the "BudgetBuddy" practice revealed

Rewriting the bad BudgetBuddy question ("the totals aren't adding up right, anyone know why?") made the structure obvious in a low-stakes way — it's easy to spot vagueness in someone else's made-up message. Writing Task 5 for real showed the harder version of the same habit: I don't naturally write "what I tried" before asking, I go straight to the ask. Having just rebuilt BudgetBuddy's question with that structure fresh in mind is the only reason I remembered to include it in my own.

2. The self-check you almost skipped

Yes, while working through this assignment, not just Task 5. Twice I hit a PowerShell error (the cat << EOF heredoc, then cat > triggering Get-Content) and asked what was wrong before reading the prompt I was already looking at, which said PS C:\Users\... the whole time. That's a smaller version of exactly what Question 2 is asking about the cheapest self-check available was right there and I skipped it under momentum, not because it was hard to find.

3. Giving feedback on something real

Writing PR feedback on my own AddBookForm.md felt different from BudgetBuddy in one specific way: with BudgetBuddy, I invented both the problem and the fix, so there was no risk of being wrong. With my real file, I had to actually check the file (confirm the scaffolding comment was still there, confirm the encoding) before writing anything — feedback on real work only stays specific if it's grounded in something you verified, not just plausible-sounding advice. That made it slower to write but also made it something I'd actually trust if someone gave it to me.

## Stretch Goal A — 3-message async Slack thread

Day 1 — blocked:

Nadio: Blocked on addBook(), the function's written and documented, but there's no db object defined anywhere in the repo yet, so calling it throws ReferenceError: db is not defined. Checked my Sprint 1 backlog and epics docs; neither specifies a persistence approach. Not blocking my documentation work, but I can't actually test the function running. Will update once I've decided on a stub vs. real storage.

Day 2 — partial update:

Nadio: Update on the addBook() blocker — going with an in-memory array stub for now (db = { books: [] } with a basic .insert()) rather than picking real storage yet, since Sprint 1's just about proving the CRUD logic works. Function runs and returns the expected object now. Not persisting across restarts yet, which is fine for this sprint but I'll need a real decision before Sprint 2.

Day 3 — resolved:

Nadio: Closing this out — addBook() is fully working against the in-memory stub, all Sprint 1 acceptance criteria pass (required fields validated, genre optional, status defaults to "Want to Read"). Documented the stub limitation in the README's Known limitations section so it's not a surprise later. Moving on to editBook() next.

### Links

- Real PR feedback (Task 6) — scaffolding comment: https://github.com/Nadio75/Nadio75-daily-app/pull/13#issuecomment-5696295035
- Real PR feedback (Task 6) — encoding comment: https://github.com/Nadio75/Nadio75-daily-app/pull/13#issuecomment-5696304517
