const fs = require('fs');
const path = require('path');

// Paths
const coursesPath = path.join(__dirname, '../courses');
const readmePath = path.join(__dirname, '../README.md');
const projectsPath = path.join(__dirname, '../projects');

// Helper function to get all JSON files in the folder
const getData = (catalog = "courses") => {

    const dicPath = {
        "courses": coursesPath,
        "projects": projectsPath
    }

    const files = fs.readdirSync(dicPath[catalog]).filter(file => file.endsWith('.json'));
    let result = [];
    for (const file of files) {
        const filePath = path.join(dicPath[catalog], file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        result.push(data); // Collect entire course data
    }
    return result;
};


// Generate formatted sections for a course
const formatCourseSections = (sections) => {
    const tableHeader = `| Section Title       | Lessons                  |\n|---------------------|--------------------------|`;
    const tableRows = sections.map(section => {
        const lessons = section.lessons.map(lesson => lesson.title).join(', ');
        return `| ${section.title} | ${lessons} |`;
    }).join('\n');
    return `${tableHeader}\n${tableRows}`;
};

// Generate README content
const generateReadme = (courses, projects) => {
    const header = `# Catalog\n\n ## Courses\n\nBelow are the available courses:\n`;
    const courseDetails = courses.map(course => {
        return `
### ${course.title}

![${course.title} Banner](${course.bannerImage})

**Description**: ${course.description}  
**Difficulty**: ${'⭐'.repeat(course.difficulty)} (${course.difficulty}/5)  
**Duration**: ${course.duration} hours  

**Overview**:

${course.courseOverview}

**What You'll Learn**:

${course.willLearn.map(item => `- ${item}`).join('\n')}

**Prerequisites**:
 
${course.prerequisites.map(item => `- ${item}`).join('\n')}

**Sections**:
 
${formatCourseSections(course.sections)}
`;
    }).join('\n --- \n');
    const projectsHeader = `## Projects\n\nBelow are the available projects:\n`;
    const projectDetails = projects.map(project => {
        return `
### ${project.title}

![${project.title} Banner](${project.icon})

**Description**: ${project.description}  
**Difficulty**: ${'⭐'.repeat(project.difficulty)} (${project.difficulty}/5)  
**Duration**: ${project.duration} hours  

**Overview**:

${project.overview}

**Sections**:
 
${formatCourseSections(project.sections)}
`;
    }).join('\n --- \n');


    return `${header}\n${courseDetails}\n${projectsHeader}\n${projectDetails}`;
};

// Update README.md
const updateReadme = () => {
    const courses = getData("courses");
    const projects = getData("projects");
    const content = generateReadme(courses, projects);
    fs.writeFileSync(readmePath, content, 'utf8');
    console.log('README.md updated successfully!');
};

updateReadme();
