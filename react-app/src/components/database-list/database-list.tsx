import { Table } from "antd";
import { Database } from "../../models/database";

//refactor to service to emulate calling API

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Project",
    dataIndex: "project",
    key: "project",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Created By",
    dataIndex: "createdBy",
    key: "createdBy",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];
function DatabaseList(props: { databases: Database[] }) {
  let databases = props.databases;

  if (databases && databases.length > 0) {
    return <Table dataSource={databases} columns={columns} />;
  } else {
    return <div>No databases found</div>;
  }
}

export default DatabaseList;
