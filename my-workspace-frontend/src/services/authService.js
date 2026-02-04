const BASE_URL = "http://localhost:8080/api/auth";

export const loginUser = async (credentials) => {
    const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });

    const data = await res.json();

    // If login failed (401 Unauthorized, etc.)
    if (!res.ok) {
        // This throws the message from your Spring Boot: Map.of("message", "...")
        throw new Error(data.message || "Invalid credentials");
    }

    localStorage.setItem("user", JSON.stringify(data));
    return data;
};

export const registerUser = async (user) => {
    const res = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });

    const data = await res.json();

    // If registration failed (400 Bad Request / Email exists)
    if (!res.ok) {
        throw new Error(data.message || "Registration failed");
    }

    return data;
};

export const getCurrentUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
};