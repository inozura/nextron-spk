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

const Steps2 = ({ data }) => {
  return (
    <>
      <Content style={{ padding: 20 }}>
        <h1 style={{ textAlign: "center" }}>Step 2 - Perhitungan Kriteria</h1>
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
          dataSource={data1.sort(
            (a, b) => parseFloat(a.rangking) - parseFloat(b.rangking)
          )}
          pagination={false}
          bordered
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
    title: "Hasil",
    dataIndex: "hasil",
    key: "hasil",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Rangking",
    dataIndex: "rangking",
    key: "rangking",
    render: (text) => <span>{text}</span>,
  },
];

const data1 = [
  {
    alternatif: "A4",
    hasil: 0.368,
    rangking: 1,
  },
  {
    alternatif: "A6",
    hasil: 0.356,
    rangking: 2,
  },
  {
    alternatif: "A1",
    hasil: 0.349,
    rangking: 3,
  },
  {
    alternatif: "A5",
    hasil: 0.291,
    rangking: 4,
  },
  {
    alternatif: "A2",
    hasil: 0.286,
    rangking: 5,
  },
  {
    alternatif: "A3",
    hasil: 0.215,
    rangking: 6,
  },
];

export default Steps2;
