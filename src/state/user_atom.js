import { atomWithStorage } from "jotai/utils";

export const userAtom = atomWithStorage("user", null, {
    getItem: (key) => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(atob(value)) : null;
    },
    setItem: (key, newValue) => {
        localStorage.setItem(key, btoa(JSON.stringify(newValue)));
    },
    removeItem: (key) => localStorage.removeItem(key),
});
