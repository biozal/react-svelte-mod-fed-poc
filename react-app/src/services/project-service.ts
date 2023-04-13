import {Project} from "../models/projects";
import {getProjectNames} from "./project-names-service";

export function getProjects(): Project[] {
    const names = getProjectNames();
    return Array.from({ length: 20 }, (_, index) => ({
        key: [index],
        name: names[index],
        description: `This is the description for Project ${index + 1}`,
        status: index % 2 === 0 ? "Active" : "Inactive",
    }));
}
