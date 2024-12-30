# How to Add a Course

This guide explains how to add a new course to the project using the defined JSON structure. Follow these steps carefully to ensure your course is displayed correctly.

### Step 1: Locate the Courses Directory

Navigate to the `/courses` directory in the project structure:

```
brainyprep-catalog/
├── catalog/
│   └── courses/
└── scripts/
```

### Step 2: Create a New JSON File

Create a new JSON file in the `/courses` directory.

The file name should follow a descriptive pattern, e.g., `course-name.json`.
Use the following JSON structure as a template:

```json
{
    "title": "Introduction to Python",
    "description": "Want to start coding with one of the most versatile programming languages? Learn the essentials of Python and the skills to tackle real-world problems.",
    "difficulty": 1,
    "duration": 3,
    "bannerImage": "https://example.com/image.jpg",
    "courseOverview": "This course introduces Python from the ground up, covering basic syntax, control structures, data handling, and functions. By the end, you'll be ready to write Python scripts, understand core programming concepts, and move on to more advanced topics.",
    "categories": [
        "python"
    ],
    "icon": "https://example.com/icon.svg",
    "willLearn": [
        "Understand Python syntax and basic programming concepts.",
        "Write Python programs to solve basic problems.",
        "Learn how to use data structures."
    ],
    "skills": [
        "Programming fundamentals",
        "Logical thinking",
        "Python syntax"
    ],
    "prerequisites": [
        "A willingness to learn programming",
        "Basic computer usage skills"
    ],
    "technologies": [
        "Python"
    ],
    "sections": [
        {
            "title": "Intro to Python",
            "firstMessage": "Welcome to the Python programming world! Are you excited to begin your journey?",
            "lessons": [
                { "title": "What is Python?" },
                { "title": "Setting Up Python" },
                { "title": "Running Your First Program" }
            ]
        },
        {
            "title": "Basic Syntax",
            "firstMessage": "Let's explore the basics of Python syntax. Understanding this will give you a foundation for all Python programming.",
            "lessons": [
                { "title": "Variables and Data Types" },
                { "title": "Basic Operators" },
                { "title": "Printing and Comments" }
            ]
        }
    ]
}
```

### Step 3: Validate the JSON File

Ensure the JSON file is correctly formatted.
Use a JSON validator or a code editor with JSON linting capabilities to avoid syntax errors.

### Step 4: Save and Push the Changes

Save the JSON file in the `/courses` directory.
Commit your changes and push them to the repository and do a PR:

```bash
git add catalog/courses/course-name.json
git commit -m "Add new course: [Course Title]"
git push
```

### Step 5: Update the README


> [!NOTE] 
> **Guidelines for Course Content**
> **Title:** Keep it concise and descriptive.
> **Description:** Summarize the course objective in a few sentences.
> **Difficulty:** Use a scale of 1 (easy) to 5 (hard).
> **Duration:** Specify the approximate number of hours required to complete the course.
> **Categories:** Add relevant tags (e.g., python, web-development).
> **Sections:** Organize lessons into meaningful sections. Each section should have:
> - A title.
> - A firstMessage introducing the section.
> - A list of lessons with descriptive titles.
> - Following these steps ensures your course is integrated seamlessly into the project. Let me know if you have any questions or need further assistance!