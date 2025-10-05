const courses = [
    {
    id: 1,
    title: "Introduction to HTML",
    description: "Learn the basics of HTML structure and tags.",
    lessons: ["HTML Basics", "Elements and Attributes", "Links & Images", "Semantic HTML"],
    progress: 0,
    },
    {
    id: 2,
    title: "CSS Fundamentals",
    description: "Style your web pages beautifully with CSS.",
    lessons: ["Selectors & Properties", "Box Model", "Flexbox", "Responsive Design"],
    progress: 0,
    },
    {
    id: 3,
    title: "JavaScript Essentials",
    description: "Build dynamic websites using JavaScript.",
    lessons: ["Variables", "Functions", "DOM Manipulation", "Events"],
    progress: 0,
    },
];

const courseListContainer = document.getElementById("courseList");
const courseDetailPage = document.getElementById("course-detail-page");
const homePage = document.getElementById("home-page");
const courseDetailContainer = document.getElementById("courseDetail");

function renderCourses() {
    courseListContainer.innerHTML = "";
    courses.forEach((course) => {
    const div = document.createElement("div");
    div.classList.add("course-card");
    div.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p><strong>Progress:</strong> ${course.progress}%</p>
    `;
    div.onclick = () => showCourseDetail(course.id);
    courseListContainer.appendChild(div);
    });
}

function showCourseDetail(courseId) {
    const course = courses.find((c) => c.id === courseId);
    homePage.style.display = "none";
    courseDetailPage.style.display = "block";

    courseDetailContainer.innerHTML = `
    <h2>${course.title}</h2>
    <p>${course.description}</p>
    <h3>Lessons</h3>
    <div>
        ${course.lessons.map((lesson) => `<div class="lesson">📘 ${lesson}</div>`).join("")}
    </div>
    <div class="progress">
        <div class="progress-bar" style="width: ${course.progress}%;"></div>
    </div>
    <button class="complete-btn" onclick="markAsCompleted(${course.id})">
        Mark as Completed
    </button>
    `;
}

function markAsCompleted(courseId) {
    const course = courses.find((c) => c.id === courseId);
    course.progress = 100;
    showCourseDetail(courseId);
    renderCourses();
    alert(`🎉 You’ve completed "${course.title}"!`);
}

function goBack() {
    courseDetailPage.style.display = "none";
    homePage.style.display = "block";
}

renderCourses();
