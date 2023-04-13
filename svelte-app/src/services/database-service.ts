import type {Database} from '../models/database';
import {getDatabaseNames} from "./database-names-service";
import {getProjectNames } from "../../../react-app/src/services/project-names-service";

export function getDatabases(): Database[] {
    const names = getDatabaseNames();
    const projectNames = getProjectNames()
    return Array.from({ length: 5 }, (_, index) => ({
        key: index,
        name: names[index],
        project: projectNames[index],
        type: "",
        status: index % 2 === 0 ? "Active" : "Inactive",
        createdBy: "Denis Rosa",
        version: "7.1.2"
    }));
}
