import React, { useEffect, useState } from "react";
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
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import fire from "../config/firebase";
import Steps1 from "./components/steps1";
import Steps2 from "./components/steps2";
import Steps3 from "./components/steps3";

const { Content } = Layout;

const Perhitungan = () => {
  const [data, setData] = useState();
  const [initStep, setInitStep] = useState(1);
  const [instance, setInstance] = useState();

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Content style={{ overflow: "hidden", marginTop: 40 }}>
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
          <StepWizard initialStep={initStep} instance={setInstance}>
            <Steps1 data={data} />
            <Steps2 />
            <Steps3 />
          </StepWizard>
        )}
      </Content>

      {/* BUTTON */}
      {/* FLOAT BUTTON */}
      <div
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          padding: 5,
          borderRadius: 50,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#001529",
          zIndex: 99,
        }}
      >
        <Button
          type="primary"
          shape="circle"
          size="middle"
          onClick={() => {
            setInitStep(initStep - 1);
            instance.previousStep();
          }}
          style={{
            backgroundColor: "#001529",
            borderColor: "white",
            marginRight: initStep !== 3 ? 10 : 0,
            display: initStep !== 1 ? "inline-block" : "none",
          }}
        >
          <LeftCircleOutlined />
        </Button>
        <Button
          type="primary"
          shape="circle"
          size="middle"
          onClick={() => {
            setInitStep(initStep + 1);
            instance.nextStep();
          }}
          style={{
            backgroundColor: "#002140",
            borderColor: "white",
            display: initStep !== 3 ? "inline-block" : "none",
          }}
        >
          <RightCircleOutlined />
        </Button>
      </div>
    </>
  );
};

export default Perhitungan;
