export const toFirstUpperCase = (text) => {
    if (!text) return "";

    return text.charAt(0).toUpperCase() + text.slice(1);
};

export const toTitleCase = (text) => {
    if (!text) return "";

    return text
        .split(" ")
        .map((word) => toFirstUpperCase(word))
        .join(" ");
};

/**
 * Formats the Date to a string formatted as HHmm às DD/MM/YY
 */
export const formatTimestamp = (dateString) => {
    const date = new Date(dateString);

    if (!date || date === "Invalid Date") {
        return "-";
    }

    const options = {
        hour: "numeric",
        minute: "numeric",
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
    };

    return new Intl.DateTimeFormat("pt-BR", options).format(date);
};
