const employee = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Navbar Bug",
        "taskDescription": "Resolve the alignment issue on mobile screens for the main navigation bar.",
        "taskDate": "2026-06-02",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Documentation",
        "taskDescription": "Review and update the API integration guide for the team.",
        "taskDate": "2026-05-28",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Feedback Review",
        "taskDescription": "Go over the latest UI/UX feedback from the client staging site.",
        "taskDate": "2026-06-03",
        "category": "Design"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Database Migration",
        "taskDescription": "Migrate old user profile schemas to the new layout database.",
        "taskDate": "2026-05-30",
        "category": "Database"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Button Component",
        "taskDescription": "Build a reusable CSS 3D rotating button UI component.",
        "taskDate": "2026-06-02",
        "category": "UI/UX"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Optimize Images",
        "taskDescription": "Compress asset files to improve front-end page load performance.",
        "taskDate": "2026-06-04",
        "category": "Performance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Setup Git Repository",
        "taskDescription": "Initialize the main repository and set branch permissions for production.",
        "taskDate": "2026-05-25",
        "category": "DevOps"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Unit Tests",
        "taskDescription": "Implement testing scripts for the auth controller validation.",
        "taskDate": "2026-06-02",
        "category": "QA Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix CSS Flexbox Layout",
        "taskDescription": "Adjust property cards grid layout using CSS Flexbox for consistency.",
        "taskDate": "2026-05-29",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review pull requests submitted by junior web devs.",
        "taskDate": "2026-06-03",
        "category": "Management"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Implement Auth Logic",
        "taskDescription": "Connect the login form fields to verify admin and employee routes.",
        "taskDate": "2026-06-02",
        "category": "Authentication"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Deploy to Server",
        "taskDescription": "Push the staging build to the live server environment.",
        "taskDate": "2026-05-27",
        "category": "DevOps"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "SEO Keyword Research",
        "taskDescription": "Analyze and track meta tags data to optimize dashboard visibility.",
        "taskDate": "2026-06-05",
        "category": "SEO"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Design Sidebar",
        "taskDescription": "Create the responsive collapsible sidebar mockup.",
        "taskDate": "2026-05-26",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Refactor API Calls",
        "taskDescription": "Clean up redundancy in asynchronous helper utilities.",
        "taskDate": "2026-06-02",
        "category": "Development"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Profile Page UI",
        "taskDescription": "Complete HTML markup and CSS styling for user profile views.",
        "taskDate": "2026-06-02",
        "category": "UI/UX"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Bug Scrub Meeting",
        "taskDescription": "Attend the sync-up call to triage reported high-priority issues.",
        "taskDate": "2026-06-01",
        "category": "Management"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Secure Password Hashing",
        "taskDescription": "Research and implement salt rounds for mocking safe password storage.",
        "taskDate": "2026-06-04",
        "category": "Security"
      }
    ]
  }
];

const admin = [
  {
    "id": 100,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage=()=>{
localStorage.setItem("employees",JSON.stringify(employee))
localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem("employees"))
    const admin=JSON.parse(localStorage.getItem("admin"))
    console.log(employees,admin)
}

