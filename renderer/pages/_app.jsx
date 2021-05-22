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
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
            <Menu.Item key="0" icon={<HomeOutlined />}>
              <Link href="/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<AppleOutlined />}>
              <Link href="/next">Next</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link href="/kriteria">Kriteria</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          className="site-layout"
          style={{
            marginLeft: colappsed ? 200 : 80,
            transition: "all 0.2s ease-in-out",
            backgroundColor: "white",
          }}
        >
          <Content
            style={{
              margin: "24px 16px 0",
              overflow: "initial",
            }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, height: "100%" }}
            >
              <Component {...pageProps} />
            </div>
          </Content>
        </Layout>
      </Layout>
      {router.asPath !== "/home" && (
        <Button
          type="primary"
          shape="circle"
          size="large"
          style={{ position: "absolute", top: 20, right: 20 }}
          onClick={() => router.back()}
        >
          <LeftOutlined />
        </Button>
      )}
      <Button
        type="primary"
        shape="circle"
        size="large"
        style={{ position: "absolute", bottom: 20, right: 20 }}
        onClick={() => setIsModalVisible(!isModalVisible)}
      >
        <InfoCircleOutlined />
      </Button>

      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </React.Fragment>
  );
}

export default MyApp;
