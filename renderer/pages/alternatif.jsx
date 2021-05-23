import React, { useState, useEffect } from "react";
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
import fire from "../config/firebase";
const { Content } = Layout;

const Alternatif = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [succesAdd, setSuccesAdd] = useState(false);
  const [storeData, setStoreData] = useState({
    alternatif: "",
    nama: "",
    bobot: 0,
    c1: "",
    c2: "",
    c3: "",
    c4: "",
    bobot: 0,
  });

  const fetchData = async () => {
    try {
      await fire
        .firestore()
        .collection("alternatif")
        .onSnapshot((snap) => {
          const res = snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setData(res);
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleStoreData = async () => {
    setIsLoading(true);
    console.log(storeData);
    try {
      await fire
        .firestore()
        .collection("alternatif")
        // .add("alternatif")
        .add({ ...storeData, bobot: handleBobot(storeData.c3) })
        .then((res) => {
          fetchData();
        });
      setSuccesAdd(true);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      setIsModalVisible(false);
      setStoreData();
    }
  };

  const handleBobot = (val) => {
    if (val == "Lebih tahan terhadap penyakit") return 5;
    if (val == "Agak rentan terhadap penyakit") return 4;
    if (val == "Rentan terhadap penyakit") return 3;
    if (val == "Lebih rentan terhadap penyakit") return 2;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Content style={{ padding: "20px 30px", marginTop: 40 }}>
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
            {succesAdd && (
              <Alert
                message="Success Add"
                type="success"
                closable
                showIcon={true}
                style={{ position: "absolute", zIndex: 99 }}
                onClose={() => setSuccesAdd(false)}
              />
            )}
            <h1 style={{ textAlign: "center" }}>Data Alternatif</h1>
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
              <Button
                size="middle"
                type="ghost"
                htmlType="submit"
                onClick={() => setIsModalVisible(!isModalVisible)}
              >
                <span>Tambah Data </span>
                <PlusCircleOutlined size={20} />
              </Button>
            </div>

            {/* TABLE */}
            <Table columns={columns} dataSource={data} bordered />
          </div>
        )}
      </Content>

      {/* MODAL */}
      <Modal visible={isModalVisible} centered closable={false} footer={null}>
        <h3 style={{ textAlign: "right" }}>Tambah Data Alternatif</h3>
        <hr
          style={{
            height: 1,
            color: "#ddd",
            backgroundColor: "#ddd",
            width: 20,
            marginBottom: 40,
            alignSelf: "flex-start",
            marginRight: 0,
          }}
        />
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item label="Alternatif" required>
            <Input
              onChange={(e) =>
                setStoreData({ ...storeData, alternatif: e.target.value })
              }
              required
            />
          </Form.Item>
          <Form.Item label="Nama" required>
            <Input
              onChange={(e) =>
                setStoreData({ ...storeData, nama: e.target.value })
              }
              required
            />
          </Form.Item>
          <Form.Item label="C1" required>
            <Input
              onChange={(e) =>
                setStoreData({ ...storeData, c1: e.target.value })
              }
              required
            />
          </Form.Item>
          <Form.Item label="C2" required>
            <Input
              onChange={(e) =>
                setStoreData({ ...storeData, c2: e.target.value })
              }
              required
            />
          </Form.Item>
          <Form.Item label="C3" required>
            <Select onChange={(val) => setStoreData({ ...storeData, c3: val })}>
              <Select.Option value="Lebih tahan terhadap penyakit">
                Lebih tahan terhadap penyakit
              </Select.Option>
              <Select.Option value="Agak rentan terhadap penyakit">
                Agak rentan terhadap penyakit
              </Select.Option>
              <Select.Option value="Rentan terhadap penyakit">
                Rentan terhadap penyakit
              </Select.Option>
              <Select.Option value="Lebih rentan terhadap penyakit">
                Lebih rentan terhadap penyakit
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="C4" required>
            <Input
              onChange={(e) =>
                setStoreData({ ...storeData, c4: e.target.value })
              }
              required
            />
          </Form.Item>
        </Form>

        {/* MODAL BUTTON */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button
            size="middle"
            type="ghost"
            htmlType="submit"
            onClick={() => setIsModalVisible(!isModalVisible)}
            danger
            disabled={isLoading}
          >
            <CloseCircleOutlined color="#red" />
            <span> Cancel</span>
          </Button>
          <Button
            size="middle"
            type="primary"
            htmlType="submit"
            // onClick={() => handleStoreData()}
            style={{ marginLeft: 5 }}
            disabled={isLoading}
          >
            {isLoading && <LoadingOutlined />}
            <span> Submit</span>
          </Button>
        </div>
      </Modal>
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
    title: "Nama",
    dataIndex: "nama",
    key: "nama",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "C1",
    dataIndex: "c1",
    key: "c1",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "C2",
    dataIndex: "c2",
    key: "c2",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "C3",
    dataIndex: "c3",
    key: "c3",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "C4",
    dataIndex: "c4",
    key: "c4",
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

export default Alternatif;
