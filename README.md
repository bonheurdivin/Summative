Student Finance Tracker

An accessible website used for keeping students' expenses on track, and facilitating with budgets. Created withsematic HTML, JavaScript, and mobile-first CSS.

Features
- Add/edit, and delete transactions
- Regex validation (description, amount, date,.....)
- Live regex search
- Dashboard stats (total spent, top category, total records)
- LocalStorage persistence
- Currency settings
- Custom categories (saved to localStorage)
- Responsive layout (mobile → desktop)
- Keyboard navigation

Regex Catalog
| Field        | Pattern | Example |
|--------------|---------|---------|
| Description  | `^\S(?:.*\S)?$` | "Lunch at cafeteria" |
| Amount       | `^(0|[1-9]\d*)(\.\d{1,2})?$` | "12.50" |
| Date         | `^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$` | "2025-10-01" |
| Category     | `^[A-Za-z]+(?:[ -][A-Za-z]+)*$` | "School Supplies" |
| Advanced     | `\b(\w+)\s+\1\b` | "Laundry laundry day"

How to Run Tests
Open `tests.html` in your browser to see regex validation tests. Each test shows whether the pattern passes or fails for a given input.

Seed Data
The `seed.json` file includes 10 sample transactions with diverse categories, amounts, and descriptions to test regex and dashboard stats.

Accessibility
- Semantic HTML5 landmarks
- Skip-to-content link
- Visible focus styles
- ARIA live regions for feedback
- Keyboard-friendly navigation

Keyboard Map
- `Tab`: Navigate inputs
- `Enter`: Submit forms
- `Esc`: Cancel or close (if implemented)

Live Demo
(Pages)https://bonheurdivin.github.io/Summative

Demo Video
https://youtu.be/gBpqlCjCxr0

Contact
- Email: b.munezero@alustudent.com
- GitHub username: bonheurdivin
