const projectModel = require('../models/projectModel');

// Get all projects
exports.getProjects = (req, res) => {
    projectModel.getAllProjects((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// Add project
exports.addProject = (req, res) => {
    const { title, description, tech_stack, github_link, live_link } = req.body;

    projectModel.createProject(
        title,
        description,
        tech_stack,
        github_link,
        live_link,
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Project added successfully' });
        }
    );
};

// Delete project
exports.deleteProject = (req, res) => {
    const id = req.params.id;

    projectModel.deleteProject(id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Project deleted successfully' });
    });
};