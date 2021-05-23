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

const Steps3 = ({ data }) => {
  return (
    <>
      <Content style={{ padding: 20 }}>
        <h1 style={{ textAlign: "center" }}>Finally - Perangkingan</h1>
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
    title: "Rangking",
    dataIndex: "rangking",
    key: "rangking",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Metode Moora",
    dataIndex: "moora",
    key: "moora",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Metode Waspas",
    dataIndex: "waspas",
    key: "waspas",
    render: (text) => <span>{text}</span>,
  },
];

const data1 = [
  {
    moora: "A4 = 0.368",
    waspas: "A4 = 0.974",
    rangking: 1,
  },
  {
    moora: "A6 = 0.356",
    waspas: "A6 = 0.899",
    rangking: 2,
  },
  {
    moora: "A1 = 0.349",
    waspas: "A1 = 0.786",
    rangking: 3,
  },

  {
    moora: "A5 = 0.291",
    waspas: "A5 = 0.783",
    rangking: 4,
  },

  {
    moora: "A2 = 0.286",
    waspas: "A2 = 0.675",
    rangking: 5,
  },

  {
    moora: "A3 = 0.215",
    waspas: "A3 = 0.634",
    rangking: 3,
  },
];

export default Steps3;
