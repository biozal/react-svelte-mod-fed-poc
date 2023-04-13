// src/ProjectList.tsx
import { Table } from "antd";
import { getProjects } from "../../services/project-service";

//refactor to service to emulate calling API
const projects = getProjects();

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status'
    }
]
function ProjectList () {
    return (
        <Table dataSource={projects} columns={columns} />
    );
}

export default ProjectList;