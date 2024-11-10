export const apiEndpoint = () => {
    if (window.location.hostname === "localhost") {
        return "http://localhost:8000/api";
    }
    return "/api";
};
