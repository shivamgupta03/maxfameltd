# Feedback App – Frontend (Angular)

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.12.

This is the **Angular frontend** for the Feedback Collection App. It allows users to submit feedback using a multi-step form and enables viewing, editing, and deleting submitted feedback entries via a dynamic dashboard interface.


---

##  Tech Stack

- Angular 16
- TypeScript
- PrimeNG UI Library
- RxJS
- Angular Forms & Routing
- Toast Notifications (PrimeNG)
- Confirmation Dialogs
- Integration with Express.js + MongoDB backend

---

##  Folder Structure (Simplified)

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/               # Reusable form and dashboard components
│   │   │   ├── multi-step-form/      # Step 1 & Step 2 form fields + logic
│   │   │   ├── feedback-dashboard/   # Dashboard + table + modal
│   │   ├── services/                 # Feedback API service integration
│   │   ├── app-routing.module.ts     # Routing configuration
│   │   ├── app.component.ts          # Root component
│   │   ├── app.module.ts             # Module setup
│   ├── assets/
│   └── environments/
│       ├── environment.ts            # Default local API URL
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/saivivek1102/feedback-app-frontend.git
cd feedback-app/frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
ng serve
```

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

Navigate to:  
 `http://localhost:4200`

The app will automatically reload if you change any source files.

---

##  API Integration

- This frontend connects to the backend hosted at:  
  `http://localhost:5000/api/feedback`

- All feedback submissions and edits are synced in real time with the MongoDB Atlas database via Express backend.

- Supported operations:
  - Submit feedback (POST)
  - View all feedback (GET)
  - View by ID (GET)
  - Edit feedback (PUT)
  - Delete feedback (DELETE)

---

##  Features & Enhancements

- Step-wise feedback submission (2-step form)
- Required field validations (Step 1 & 2)
- Toast notifications for success/error
- Dashboard table listing feedback entries
- Edit modal with update capability
- Confirmation dialog on delete
- Empty state message when no feedback is present
- Clean separation of components and services

---

## Deployment Notes

This frontend is production-ready and can be deployed via:
- GitHub Pages
- Netlify / Vercel
- Firebase Hosting
- Or served alongside the backend on platforms like Render / Railway

Ensure the API URL is updated in `environment.ts` or configured via proxy for deployment.

---

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
