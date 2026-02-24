# Copilot Instructions for LTVFD Website Project

This file contains a checklist to guide the development of the LTVFD (Local Town Volunteer Fire Department) website project. Work through each checklist item systematically.

- [x] Verify that the copilot-instructions.md file in the .github directory is created.
	Created the copilot-instructions.md file in the .github directory.

- [x] Clarify Project Requirements
	User wants a website for their fire station with public events information, contact requests, basic information, staffing, and employee login for schedules, employee events, requests, etc. They have JavaScript experience but are concerned about security.

- [x] Scaffold the Project
	Created a Next.js project with TypeScript and Tailwind CSS in the workspace directory.

- [x] Customize the Project
	Added authentication with NextAuth, database with Drizzle ORM and SQLite, public pages for events, contact, about, staffing, employee dashboard with schedule, events, and requests.

- [ ] Install Required Extensions
	Only install extensions if mentioned in the project setup info.

- [x] Compile the Project
	The project compiles successfully after switching from Prisma to Drizzle ORM to resolve Turbopack build compatibility issues.

- [x] Create and Run Task
	Created a VS Code task for running the development server.

- [x] Launch the Project
	Ran the development server successfully at http://localhost:3000.

- [x] Ensure Documentation is Complete
	Updated README.md with project details and removed HTML comments from this file.