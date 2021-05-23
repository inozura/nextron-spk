import React, { useState } from "react";
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
} from "antd";

const { Content } = Layout;
const { Item: FormItem } = Form;
const { Option } = Select;

function Home() {
  const [succesAdd, setSuccesAdd] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <h1>SISTEM PENDUKUNG KEPUTUSAN - TUGAS AKHIR</h1>
        <p>Make simple application reference from the journal</p>
        <hr
          style={{
            height: 1,
            color: "#ddd",
            backgroundColor: "#ddd",
            width: 50,
          }}
        />
      </div>
    </>
  );
}

export default Home;
