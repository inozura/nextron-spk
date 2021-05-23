import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Button, Menu, Layout, Modal } from "antd";
import { useRouter } from "next/router";

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
} from "@ant-design/icons";

const { Content, Sider } = Layout;

function MyApp({ Component, pageProps }) {
  const [colappsed, setColappsed] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SPK - ANALITYC HEARARCHY PROCESS</title>
      </Head>
      <Layout style={{ backgroundColor: "white" }}>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
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
            defaultSelectedKeys={["0"]}
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
        }}
      >
        <Button
          type="primary"
          shape="circle"
          size="large"
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
          size="large"
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

      <Modal visible={isModalVisible} centered footer={null} closable={false}>
        <h2>Novandra Zulfi Ramdhan</h2>
        <span>Full Stack Javascript Developer</span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button
            size="middle"
            type="primary"
            htmlType="submit"
            onClick={() => setIsModalVisible(!isModalVisible)}
          >
            <span>Ok</span>
          </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default MyApp;
