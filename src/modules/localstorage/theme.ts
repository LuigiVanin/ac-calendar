import { StorageProxy } from "./proxy";

// TODO? Make this dynamic
interface ThemeStorage {
    value: "dark" | "light";
}

class ThemeLocalStorageProxy implements StorageProxy<ThemeStorage> {
    constructor(private key = "theme") {}

    setItem(value: ThemeStorage) {
        localStorage.setItem(this.key, JSON.stringify(value));
    }

    getItem(): ThemeStorage {
        const value = localStorage.getItem(this.key);

        try {
            if (!value) throw Error("No value");
            return JSON.parse(value || "");
        } catch {
            this.setItem({ value: "light" });
            return { value: "light" };
        }
    }
}

export const themeStorage = new ThemeLocalStorageProxy();
