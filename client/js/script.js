    const API_URL = "https://portfolio-production-0fc4.up.railway.app/api/projects";

async function loadProjects() {
    try {
        const response = await fetch(API_URL);
        const projects = await response.json();

        const container = document.getElementById("projects-container");
        container.innerHTML = "";

        projects.forEach(project => {
            const div = document.createElement("div");
            div.classList.add("project-card");

            div.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Tech:</strong> ${project.tech_stack}</p>
                <a href="${project.github_link}" target="_blank">GitHub</a>
                <a href="${project.live_link}" target="_blank">Live</a>
                <button onclick="deleteProject(${project.id})">Delete</button>
            `;

            container.appendChild(div);
        });

    } catch (error) {
        console.error("Error loading projects:", error);
    }
}

async function deleteProject(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    loadProjects(); // refresh
}

const form = document.getElementById("project-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const project = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        tech_stack: document.getElementById("tech_stack").value,
        github_link: document.getElementById("github_link").value,
        live_link: document.getElementById("live_link").value
    };

    await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(project)
    });

    form.reset();
    loadProjects(); // refresh project list
});

loadProjects();