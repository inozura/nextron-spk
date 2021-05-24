import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Button, Menu, Layout, Modal, Col } from "antd";
import { useRouter } from "next/router";
const shell = require("electron").shell;

import "antd/dist/antd.css";
import {
  LeftOutlined,
  UserOutlined,
  InfoCircleOutlined,
  HomeOutlined,
  AppleOutlined,
  ReloadOutlined,
  CalculatorOutlined,
  CloseCircleOutlined,
  DingdingOutlined,
  GithubFilled,
  FacebookFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import checkInternetConnected from "check-internet-connected";

const { Content, Sider } = Layout;

function MyApp({ Component, pageProps }) {
  const [colappsed, setColappsed] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkInternet = async () => {
      setIsConnected(false);
      const config = {
        timeout: 10000,
        retries: 3,
        domain: "google.com",
      };

      await checkInternetConnected(config)
        .then(() => {
          console.log("Connection available");
          setIsConnected(true);
        })
        .catch((err) => {
          console.log("No connection", err);
          setIsConnected(true);
        });
    };

    checkInternet();
    return () => {
      setIsConnected(false);
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sistem Pendukung Keputusan - Metode MOORA</title>
      </Head>
      <Layout style={{ backgroundColor: "white" }}>
        <Sider
          style={{
            overflow: "auto",
            height: "100%",
            position: "fixed",
            left: 0,
          }}
          collapsible={true}
          onCollapse={() => setColappsed(!colappsed)}
          collapsed={colappsed}
        >
          <Menu
            theme="dark"
            mode="inline"
            activeKey={
              router.asPath == "/home"
                ? "0"
                : router.asPath == "/kriteria"
                ? "1"
                : router.asPath == "/alternatif"
                ? "2"
                : router.asPath == "/perhitungan"
                ? "3"
                : null
            }
            style={{ marginTop: 30 }}
            selectedKeys={
              router.asPath == "/home"
                ? "0"
                : router.asPath == "/kriteria"
                ? "1"
                : router.asPath == "/alternatif"
                ? "2"
                : router.asPath == "/perhitungan"
                ? "3"
                : null
            }
          >
            <Menu.Item key="0" icon={<HomeOutlined />} active={true}>
              <Link href="/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<AppleOutlined />}>
              <Link href="/kriteria">Kriteria</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ReloadOutlined />}>
              <Link href="/alternatif">Alternatif</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<CalculatorOutlined />}>
              <Link href="/perhitungan">Perhitungan</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          className="site-layout"
          style={{
            marginLeft: colappsed ? 80 : 200,
            transition: "all 0.2s ease-in-out",
            backgroundColor: "white",
          }}
        >
          <Content
            style={{
              overflow: "initial",
            }}
          >
            <div className="site-layout-background" style={{ height: "100%" }}>
              <Component {...pageProps} />
            </div>
          </Content>
        </Layout>
      </Layout>

      {/* FLOAT BUTTON */}
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          padding: 5,
          borderRadius: 50,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#001529",
          transition: "all 0.3s ease-in-out",
          zIndex: 99,
        }}
      >
        <Button
          type="primary"
          shape="circle"
          size="middle"
          onClick={() => router.back()}
          style={{
            backgroundColor: "#001529",
            borderColor: "#001529",
            marginRight: 10,
            display: router.asPath !== "/home" ? "inline-block" : "none",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <LeftOutlined />
        </Button>
        <Button
          type="primary"
          shape="circle"
          size="middle"
          onClick={() => setIsModalVisible(!isModalVisible)}
          style={{
            backgroundColor: "#002140",
            transition: "all 0.3s ease-in-out",
            borderColor: "white",
          }}
        >
          <InfoCircleOutlined />
        </Button>
      </div>

      <Modal
        visible={isModalVisible}
        centered
        footer={null}
        closable
        onCancel={() => setIsModalVisible(!isModalVisible)}
      >
        <Col>
          <DingdingOutlined style={{ fontSize: 70, marginBottom: 25 }} />
          <h2 style={{ marginBottom: 1, textAlign: "right" }}>
            Novandra Zulfi Ramadhan
          </h2>
          <p style={{ textAlign: "right" }}>Full Stack Javascript Developer</p>
        </Col>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <GithubFilled
            style={{ fontSize: 30, margin: 10, cursor: "pointer" }}
            onClick={() => shell.openExternal("https://github.com/inozura")}
          />
          <FacebookFilled
            style={{ fontSize: 30, margin: 10, cursor: "pointer" }}
            onClick={() =>
              shell.openExternal("https://www.facebook.com/iNoozura")
            }
          />
          <TwitterOutlined
            style={{ fontSize: 30, margin: 10, cursor: "pointer" }}
            onClick={() => shell.openExternal("https://twitter.com/inoozura")}
          />
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default MyApp;
