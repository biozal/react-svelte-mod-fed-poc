
export function getProjectNames(): string[] {
    return Array.from({ length: 20 }, (_, index) => {
        return `Project ${index + 1}`
    });
}