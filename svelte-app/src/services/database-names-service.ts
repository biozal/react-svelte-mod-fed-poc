
export function getDatabaseNames(): string[] {
    return Array.from({ length: 20 }, (_, index) => {
        return `Database ${index + 1}`
    });
}