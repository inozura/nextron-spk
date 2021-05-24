import React, { useState, useEffect } from "react";
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
  Card,
  Row,
} from "antd";
import { Fade } from "react-reveal";
import {
  AppleOutlined,
  GithubOutlined,
  QqOutlined,
  RadiusUprightOutlined,
  WindowsOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Item: FormItem } = Form;
const { Option } = Select;

function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            padding: 150,
          }}
        >
          <h1 style={{ textAlign: "left", zIndex: 99 }}>
            SISTEM PENDUKUNG KEPUTUSAN - TUGAS AKHIR
          </h1>
          <p style={{ zIndex: 99 }}>
            Make simple application reference from the journal
          </p>
          <hr
            style={{
              height: 1,
              color: "#ddd",
              backgroundColor: "#ddd",
              width: 50,
              zIndex: 99,
              marginBottom: 40,
            }}
          />

          <Row align="middle" justify="center">
            <Card
              bordered={false}
              hoverable
              style={{
                borderRadius: 10,
                boxShadow:
                  "0 14px 30px rgb(103 132 187 / 15%), 0 4px 4px rgb(103 132 187 / 5%)",
                zIndex: 99,
                height: 140,
                width: 200,
                margin: 10,
              }}
            >
              <RadiusUprightOutlined
                style={{ fontSize: 50, alignSelf: "end", marginBottom: 20 }}
              />
              <h3 style={{ textAlign: "right" }}>Simple</h3>
            </Card>
            <Card
              bordered={false}
              hoverable
              style={{
                borderRadius: 10,
                boxShadow:
                  "0 14px 30px rgb(103 132 187 / 15%), 0 4px 4px rgb(103 132 187 / 5%)",
                zIndex: 99,
                height: 140,
                width: 200,
                margin: 10,
              }}
            >
              <Row style={{ marginBottom: 20 }} justify="center">
                <WindowsOutlined style={{ fontSize: 50 }} />
                <AppleOutlined style={{ fontSize: 50 }} />
                <QqOutlined style={{ fontSize: 50 }} />
              </Row>
              <h3 style={{ textAlign: "center" }}>Cross Platform</h3>
            </Card>
            <Card
              bordered={false}
              hoverable
              style={{
                borderRadius: 10,
                boxShadow:
                  "0 14px 30px rgb(103 132 187 / 15%), 0 4px 4px rgb(103 132 187 / 5%)",
                zIndex: 99,
                height: 140,
                width: 200,
                margin: 10,
              }}
            >
              <GithubOutlined
                style={{ fontSize: 50, textAlign: "right", marginBottom: 20 }}
              />
              <h3 style={{ textAlign: "right" }}>Open Source</h3>
            </Card>
          </Row>

          <Fade duration={900} right top>
            <div
              style={{
                width: 140,
                height: 140,
                backgroundColor: "#002140",
                position: "absolute",
                right: 0,
                top: 30,
              }}
            />
          </Fade>
          <Fade duration={900} bottom>
            <div
              style={{
                width: 190,
                height: 190,
                backgroundColor: "#001529",
                position: "absolute",
                left: 40,
                bottom: 30,
              }}
            />
          </Fade>

          <span style={{ zIndex: 99, marginTop: 10 }}>
            Novandra Zulfi Ramadhan - 201951240
          </span>
        </div>
      </div>
    </>
  );
}

export default Home;
