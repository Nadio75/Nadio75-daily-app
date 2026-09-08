# Sprint 1 Backlog

First-pass Sprint Backlog for the Daily App (Book Tracker).  
Only items that currently meet the Definition of Ready for the Book CRUD epic are included.

## Definition of Ready (reference)

- Written as a user story (“As a reader, I want…”)
- Acceptance criteria listed and specific
- Exact fields named (title, author, etc.)
- No unresolved dependency on another epic
- Rough sense of effort

## Selected Sprint 1 Items

### 1. Add a new book
**User Story**  
As a reader, I want to add a book with a title and author so I can start tracking it.

**Acceptance Criteria**
- Form with required fields: Title, Author
- Optional field: Genre
- On submit, the book appears in the “Want to Read” column
- Validation: Title and Author cannot be empty

**Fields involved**: title, author, genre (optional)  
**Dependencies**: None  
**Rough effort**: Small

### 2. Edit an existing book’s details
**User Story**  
As a reader, I want to edit a book’s title, author, or genre so I can correct mistakes or update information.

**Acceptance Criteria**
- Clicking a book opens an edit form pre-filled with current values
- I can change Title, Author, and Genre
- Saving updates the book card immediately
- Cancelling discards changes

**Fields involved**: title, author, genre  
**Dependencies**: None (requires at least one book to exist)  
**Rough effort**: Small

### 3. Delete a book
**User Story**  
As a reader, I want to delete a book from the tracker so I can remove books I no longer care about.

**Acceptance Criteria**
- Delete action is available on each book card
- Confirmation prompt appears before permanent deletion
- After confirmation the book is removed from its column and no longer appears anywhere

**Fields involved**: none (action only)  
**Dependencies**: None  
**Rough effort**: Small

### 4. Set a book’s status
**User Story**  
As a reader, I want to set a book’s status (Want to Read / Reading / Finished / On Hold) so I can organise my reading list.

**Acceptance Criteria**
- Status can be changed via a dropdown or buttons on the book card
- Valid statuses: Want to Read, Reading, Finished, On Hold
- Changing status immediately moves the book to the corresponding column
- Default status for a newly added book is “Want to Read”

**Fields involved**: status  
**Dependencies**: None  
**Rough effort**: Small–Medium

## Items I wanted to pull in but could not (not Ready)

I wanted to include several other items but they did not yet meet the Definition of Ready. Displaying books grouped into status columns (item 5) has not been written as a user story with acceptance criteria and still depends on status existing. Moving a book between columns (item 6) has not been refined into a proper user story and largely overlaps with setting a book’s status. Showing a count of books in each column (item 7) is still missing both a user story and acceptance criteria. The Search & Filter items (8–10) belong to a later epic, have not been refined, and potentially depend on the Board & Columns work. The Reading Progress items (11–13) also belong to a later epic, remain unrefined, and depend on the “Reading” status existing. Finally, the Notes & Ratings items (14–15) sit in a later epic and have not been refined yet.

## Sprint Goal (suggested)

Deliver full Book CRUD so a reader can add, edit, delete, and set the status of books.