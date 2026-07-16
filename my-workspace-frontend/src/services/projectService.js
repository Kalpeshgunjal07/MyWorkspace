const BASE_URL = `${import.meta.env.VITE_API_URL}/api/projects`;

export const getProjects = async (userId) => {
    const res = await fetch(`${BASE_URL}/user/${userId}`);
    return res.json();
};

export const addProject = async (userId, project) => {
    const res = await fetch(`${BASE_URL}/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
    });
    return res.json();
};

export const updateProject = async (id, project) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
    });
    return res.json();
};

export const deleteProject = async (id) => {
    await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};
