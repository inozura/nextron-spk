import React from "react";
import StepWizard from "react-step-wizard";
import {
  Layout,
  Button,
  Alert,
  Table,
  Space,
  Modal,
  Form,
  Input,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import {
  PlusCircleOutlined,
  LoadingOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
const { Content } = Layout;

const Steps1 = ({ data }) => {
  return (
    <>
      <Content style={{ padding: 20 }}>
        <h1 style={{ textAlign: "center" }}>
          Step 1 - Menentukan Rating kecocokan
        </h1>
        <hr
          style={{
            height: 1,
            color: "#ddd",
            backgroundColor: "#ddd",
            width: 20,
            marginBottom: 30,
          }}
        />
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={false}
        />
      </Content>
    </>
  );
};

const columns = [
  {
    title: "Alternatif",
    dataIndex: "alternatif",
    key: "alternatif",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "C1",
    dataIndex: "c1",
    key: "c1",
    render: (text) => (
      <span>{parseInt(text.match("[+-]?([0-9]*[.])?[0-9]+")[0])}</span>
    ),
  },
  {
    title: "C2",
    dataIndex: "c2",
    key: "c2",
    render: (text) => (
      <span>{parseInt(text.match("[+-]?([0-9]*[.])?[0-9]+")[0])}</span>
    ),
  },
  {
    title: "C3",
    dataIndex: "bobot",
    key: "bobot",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "C4",
    dataIndex: "c4",
    key: "c4",
    render: (text) => (
      <span>{parseInt(text.match("[+-]?([0-9]*[.])?[0-9]+")[0])}</span>
    ),
  },
];

export default Steps1;
