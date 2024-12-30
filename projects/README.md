# How to Add a Project

This guide explains how to add a new project to the project using the defined JSON structure. Follow these steps
carefully to ensure your project is displayed correctly.

### Step 1: Locate the Projects Directory

Navigate to the `/projects` directory in the project structure:

```
brainyprep-catalog/
├── catalog/
│   └── projects/
└── scripts/
```

### Step 2: Create a New JSON File

Create a new JSON file in the `/projects` directory.

The file name should follow a descriptive pattern, e.g., `project-name.json`. Use the following JSON structure as a
template:

```json
{
  "title": "Build a Personal Website",
  "description": "Learn how to create your very own personal website from scratch using HTML, CSS, and JavaScript.",
  "difficulty": 2,
  "duration": 4,
  "bannerImage": "https://example.com/banner-image.jpg",
  "projectOverview": "This project walks you through the process of building a personal website, covering HTML structure, CSS styling, and JavaScript functionality. By the end, you'll have a fully functional website to showcase your skills.",
  "categories": [
    "web-development"
  ],
  "icon": "https://example.com/project-icon.svg",
  "willLearn": [
    "Understand the basics of HTML, CSS, and JavaScript.",
    "Build a responsive website layout.",
    "Add interactive elements with JavaScript."
  ],
  "skills": [
    "Web development",
    "HTML, CSS, and JavaScript",
    "Responsive design"
  ],
  "prerequisites": [
    "Basic understanding of HTML, CSS, and JavaScript."
  ],
  "technologies": [
    "HTML",
    "CSS",
    "JavaScript"
  ],
  "phases": [
    {
      "title": "Project Setup",
      "firstMessage": "Let's begin by setting up the project structure and writing the basic HTML layout.",
      "tasks": [
        {
          "title": "Create the HTML skeleton"
        },
        {
          "title": "Set up the folder structure"
        },
        {
          "title": "Link the styles and scripts"
        }
      ]
    },
    {
      "title": "Styling the Website",
      "firstMessage": "Now that we have the basic structure, let's add some style to make it visually appealing.",
      "tasks": [
        {
          "title": "Apply basic CSS styles"
        },
        {
          "title": "Create a responsive layout"
        },
        {
          "title": "Use Flexbox for layout positioning"
        }
      ]
    },
    {
      "title": "Adding Interactivity",
      "firstMessage": "Let's bring the website to life by adding interactivity with JavaScript.",
      "tasks": [
        {
          "title": "Create interactive forms"
        },
        {
          "title": "Add dynamic content with JavaScript"
        },
        {
          "title": "Implement form validation"
        }
      ]
    }
  ]
}
```

### Step 3: Validate the JSON File

Ensure the JSON file is correctly formatted. Use a JSON validator or a code editor with JSON linting capabilities to
avoid syntax errors.

### Step 4: Save and Push the Changes

Save the JSON file in the `/projects` directory. Commit your changes and push them to the repository and do a PR:

```bash
git add catalog/projects/project-name.json
git commit -m "Add new project: [Project Title]"
git push
```

> [!NOTE] **Guidelines for Project Content**
> **Title:** Keep it concise and descriptive.
> **Description:** Summarize the project objective in a few sentences.
> **Difficulty:** Use a scale of 1 (easy) to 5 (hard).
> **Duration:** Specify the approximate number of hours required to complete the project.
> **Categories:** Add relevant tags (e.g., web-development, python).
> **Phases:** Organize tasks into meaningful phases. Each phase should have:
> - A title.
> - A firstMessage introducing the phase.
> - A list of tasks with descriptive titles.