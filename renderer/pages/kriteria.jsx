import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Layout,
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Alert,
  Table,
  Tag,
  Space,
} from "antd";
import { PlusCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import fire from "../config/firebase";

const { Header, Content } = Layout;

const Kriteria = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      await fire
        .firestore()
        .collection("kriteria")
        .onSnapshot((snap) => {
          const res = snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setData(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Content style={{ padding: "20px 30px" }}>
        {!data ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: 100,
            }}
          >
            <LoadingOutlined color="#ddd" size={30} />
          </div>
        ) : (
          <div>
            <h1 style={{ textAlign: "center" }}>Bobot Kriteria</h1>
            <hr
              style={{
                height: 1,
                color: "#ddd",
                backgroundColor: "#ddd",
                width: 20,
              }}
            />

            {/* MAIN */}
            <div style={{ marginTop: 30, marginBottom: 10 }}>
              <Button size="middle" type="ghost" htmlType="submit">
                <span>Tambah Data </span>
                <PlusCircleOutlined size={20} />
              </Button>
            </div>

            {/* TABLE */}
            <Table columns={columns} dataSource={data} bordered />
          </div>
        )}
      </Content>
    </>
  );
};

const columns = [
  {
    title: "Kode",
    dataIndex: "kode",
    key: "kode",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Kriteria",
    dataIndex: "kriteria",
    key: "kriteria",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Bobot",
    dataIndex: "bobot",
    key: "bobot",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Button type="primary" danger>
          Delete
        </Button>
      </Space>
    ),
  },
];

const data1 = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export default Kriteria;
