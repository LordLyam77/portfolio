const db = require('../config/db');

// Get all projects
exports.getAllProjects = (callback) => {
    db.query("SELECT * FROM projects", callback);
};

// Insert project
exports.createProject = (title, description, tech_stack, github_link, live_link, callback) => {
    const sql = `
        INSERT INTO projects (title, description, tech_stack, github_link, live_link)
        VALUES (?, ?, ?, ?, ?)
    `;
    db.query(sql, [title, description, tech_stack, github_link, live_link], callback);
};

// Delete project
exports.deleteProject = (id, callback) => {
    db.query("DELETE FROM projects WHERE id = ?", [id], callback);
};