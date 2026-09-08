# Standup Log

Dry run of three consecutive (hypothetical) daily standups.

## Day 1

What I did: Set up the initial project structure and created the base HTML/JS scaffold for the board view. Added the three hardcoded columns (Want to Read / Reading / Finished).

What's next: Build the "add a book" form so I can create a card with a title and author.

Blocking: Nothing blocking just need to decide on a simple data structure for a book before I start the form.

## Day 2

What I did: Built the "add a book" form and wired it up so new books appear as cards in the Want to Read column. Tested adding a few books manually.

What's next: Add the ability to move a card between columns (change its status), since right now everything's stuck in Want to Read.

Blocking: Not blocked, but I'm unsure whether to use drag-and-drop or a simple dropdown/button to change status going to just pick the simpler option (dropdown) for now and revisit later if it feels wrong.

## Day 3

What I did: Added the status-change dropdown on each card, so books can move between Want to Read, Reading, and Finished. Noticed books disappear on page refresh since nothing's persisted yet.

What's next: Add persistence (likely localStorage for now) so books don't vanish on refresh this came up naturally from actually using the app, not from the original plan.

Blocking: Slightly blocked on deciding whether localStorage is good enough for now or whether I should jump straight to a real backend going to start with localStorage since it's the smallest step that solves today's actual problem.